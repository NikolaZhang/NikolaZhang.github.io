---
title: 解释器模式
tag:
  - 命令模式
category: 设计模式
description: 提供了解释语言语法或表达式的方式，通常用于设计小型语言解析器。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-02-10

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 解释器模式可以解释定义其语法表示的语言，还提供了用来解释语言中的语句的解释器。

![20240125231757](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/21-interpreter/20240125231757.png)

解释器模式中的主要角色有:

1. 抽象表达式(AbstractExpression)角色  
   定义解释器的接口，约定解释器的解释操作，一般包含解释方法 interpret()。
2. 终结符表达式（TerminalExpression）：  
   终结符表达式代表语法中的终结符，它是解释器模式中的基本元素。它实现了抽象表达式接口，并提供了解释操作的具体实现。
3. 非终结符表达式（NonterminalExpression）  
   非终结符表达式代表语法中的非终结符，它通常由多个终结符表达式组成。它实现了抽象表达式接口，并提供了解释操作的具体实现
4. 环境角色（Context）：
   包含解释器需要的一些全局信息。

## 代码实现

这里实现一个文件搜索的功能，我们希望程序能够理解`find -name=demo -size=+100k -path=D:/data`该条命令，该命令的含义为：查找D:/data目录下，文件名包含demo，并且大于100k的文件。

### 抽象表达式

抽象表达式`AbstractExpression`中定义了一个用于解析的方法，该方法可以从上下文中获取需要的参数，并且可以将临时解析的结果设置到上下文。

```java
public abstract class AbstractExpression {

    public abstract void interpret(Context ctx);
}

```

### 终结表达式

终结表达式是最基础的规则，定义如下，这里的value表示，原始的表达式的值字符串。当然实现具体的功能我们还需要借助子类进行定制。

```java
public abstract class TerminalExpression extends AbstractExpression {

    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
```

我们对`-name`、`-size`、`-path`这三条规则每个提供一个类进行解析。

`ParamNameExpression`通过匹配文件名是否包含参数中的值，进行过滤。

```java
@Parameter(name = "-name")
public class ParamNameExpression extends TerminalExpression {

    @Override
    public void interpret(Context ctx) {
        List<File> files = ctx.getFiles();
        List<File> fileList = new ArrayList<>();
        for (File file : files) {
            String name = file.getName();
            if (name.contains(this.getValue())) {
                fileList.add(file);
            }
        }
        System.out.printf("%s：过滤文件数量：%s%n", this.getClass().getName(), fileList.size());

        ctx.setFiles(fileList);
    }
}
```

`ParamPathExpression`通过路径参数，获取路径下的所有文件列表。

```java
@Parameter(name = "-path", order = -1)
public class ParamPathExpression extends TerminalExpression {
    @Override
    public void interpret(Context ctx) {
        String value = this.getValue();
        // 获取路径下的所有文件，排除目录

        Path path = Path.of(value);
        File[] files = path.toFile().listFiles();
        if (files == null) {
            throw new RuntimeException("路径不存在");
        }
        System.out.printf("%s：过滤文件数量：%s%n", this.getClass().getName(), files.length);
        ctx.setFiles(Arrays.asList(files));

    }
}

```

`ParamSizeExpression`大小匹配的表达式稍微复杂一些，我们通过`^([+-])?(\d+)([ckmg])$`正则表达式来匹配命令中的参数，
`+-`表示文件是大于还是小于期望值，`ckmg`表示数值单位为字节、KB、MB、GB。

```java
@Parameter(name = "-size")
public class ParamSizeExpression extends TerminalExpression {
    @Override
    public void interpret(Context ctx) {
        List<File> files = ctx.getFiles();
        List<File> fileList = new ArrayList<>();
        for (File file : files) {
            long length = file.length();
            boolean result = compare(this.getValue(), length);
            if (result) {
                fileList.add(file);
            }
        }
        System.out.printf("%s：过滤文件数量：%s%n", this.getClass().getName(), fileList.size());

        ctx.setFiles(fileList);
    }

    private boolean compare(String value, long length) {
        String sizeFlag = "ckmg";
        Pattern pattern = Pattern.compile("^([+-])?(\\d+)([" + sizeFlag + "])$");
        Matcher matcher = pattern.matcher(value);
        boolean matches = matcher.matches();
        if (!matches) {
            throw new RuntimeException("大小匹配表达式错误");
        }
        String g1 = matcher.group(1);
        String g2 = matcher.group(2);
        String g3 = matcher.group(3);
        int ig2 = Integer.parseInt(g2);

        int index = sizeFlag.indexOf(g3);
        long size = (long) (ig2 * Math.pow(1024, index));
        if (g1.startsWith("+")) {
            return length > size;
        } else if (g1.startsWith("-")) {
            return length < size;
        } else {
            return length == size;
        }
    }

}
```

终结表达式上我们加了一个`Parameter`的注解，该注解可以用于标识参数名称，以及解析顺序。

```java
@Retention(RetentionPolicy.RUNTIME)
public @interface Parameter {
    String name();
    int order() default Integer.MAX_VALUE;
}

```

### 非终结符表达式

非终结表达式中聚合了其他的终结表达式。可以实现对多个表达式的解析。我们在这个类中提供了一个`sort`方法用于将终结表达式进行排序，以应对表达式之间存在先后顺序的情况。

```java
public abstract class NonterminalExpression extends AbstractExpression {

    private List<TerminalExpression> terminalExpressions = new ArrayList<>();

    public List<TerminalExpression> getTerminalExpressions() {
        return terminalExpressions;
    }

    public void setTerminalExpressions(List<TerminalExpression> terminalExpressions) {
        this.terminalExpressions = terminalExpressions;
    }

    public void addExpression(TerminalExpression expression) {
        this.terminalExpressions.add(expression);
    }

    public void sort() {
        this.terminalExpressions.sort((o1, o2) -> {
            int order1 = o1.getClass().getAnnotation(Parameter.class).order();
            int order2 = o2.getClass().getAnnotation(Parameter.class).order();
            return order1 - order2;
        });

    }
}

```

下面定义了一个find命令对应的非终结表达式子类：

```java
@Command(name = "find")
public class FindExpression extends NonterminalExpression {

    @Override
    public void interpret(Context ctx) {
        List<TerminalExpression> terminalExpressions = this.getTerminalExpressions();

        for (TerminalExpression terminalExpression : terminalExpressions) {
            terminalExpression.interpret(ctx);
        }


        for (File file : ctx.getFiles()) {
            System.out.println("查找结果：============================");
            System.out.printf("文件名：%s，大小：%s%n", file.getAbsolutePath(), file.length());
        }
    }


}
```

这里我们循环遍历了，所有的非终结表达式，并调用他们自己的解析方法。当然如果`find`命令本身还有别的含义可以补充自己的解析逻辑。

这里我们添加了`Command`注解，用于标识命令名称。

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Command {
    String name();
}
```

### 上下文

```java
public class Context {
    private String text;
    private List<File> files;

    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }


    public List<File> getFiles() {
        return files;
    }

    public void setFiles(List<File> files) {
        this.files = files;
    }
}

```

### 工具类

我们提供一个工具类，用于初步分解命令字符串，并将其匹配到对应的表达式上去。

```java
public class ContextUtil {

    private static final Map<String, Class<? extends NonterminalExpression>> nonterminalMap = new HashMap<>();
    private static final Map<String, Class<? extends TerminalExpression>> terminalMap = new HashMap<>();

    /**
     * 注册命令
     *
     * @param clazz
     */
    public static void commandRegister(Class<? extends NonterminalExpression> clazz) {
        Command clazzAnno = clazz.getAnnotation(Command.class);
        if (clazzAnno == null) {
            return;
        }

        String name = clazzAnno.name();
        nonterminalMap.put(name, clazz);
    }

    /**
     * 注册参数
     *
     * @param clazz
     */
    public static void parameterRegister(Class<? extends TerminalExpression> clazz) {
        Parameter clazzAnno = clazz.getAnnotation(Parameter.class);
        if (clazzAnno == null) {
            throw new RuntimeException("无参数名称，该参数无法注册");
        }

        String name = clazzAnno.name();
        if (!name.startsWith("-")) {
            throw new RuntimeException("参数名必须以-作为前缀");
        }
        terminalMap.put(name, clazz);
    }

    /**
     * 解析文本
     *
     * @param text
     * @return
     * @throws NoSuchMethodException
     * @throws InvocationTargetException
     * @throws InstantiationException
     * @throws IllegalAccessException
     */
    public static NonterminalExpression parse(String text) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        // 首先按照分隔符-分割字符串
        String[] parts = text.split(" ");
        String command = parts[0];
        if (!nonterminalMap.containsKey(command)) {
            throw new RuntimeException("command not found");
        }
        NonterminalExpression expression = nonterminalMap.get(command)
                .getDeclaredConstructor()
                .newInstance();

        TerminalExpression terminalExpression = null;
        for (int i = 1; i < parts.length; i++) {
            String part = parts[i];
            String[] keyValues = part.split("=");
            if (keyValues.length != 2) {
                throw new RuntimeException(String.format("参数格式不正确: [%s]", part));
            }
            String key = keyValues[0];
            String value = keyValues[1];
            if (key.trim().isEmpty() || value.trim().isEmpty()) {
                continue;
            }
            if (terminalMap.containsKey(key)) {
                terminalExpression = terminalMap.get(key).getDeclaredConstructor()
                        .newInstance();
            }
            if (terminalExpression == null) {
                continue;
            }
            terminalExpression.setValue(value);
            expression.addExpression(terminalExpression);
        }
        // 排序确保path参数在最前面解析
        expression.sort();
        return expression;
    }

}
```

工具类不是必须的，但是通过该工具类我们将一些公共的逻辑提取了出来，尤其是通过注解提取命令和参数，使得之后添加命令，扩展命令更加便利。

### 测试

测试类中我们先进行命令和参数的注册，使得我们的程序可以选择支持哪些表达式的解析。这算是对该模式的功能扩展。

```java
public class Client {
    public static void main(String[] args) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException {
        String text = "find -name=demo -size=+100k -path=D:/data";
        ContextUtil.commandRegister(FindExpression.class);
        ContextUtil.parameterRegister(ParamNameExpression.class);
        ContextUtil.parameterRegister(ParamSizeExpression.class);
        ContextUtil.parameterRegister(ParamPathExpression.class);
        NonterminalExpression expression = ContextUtil.parse(text);

        Context ctx = new Context();
        expression.interpret(ctx);
    }
}
```

运行结果：

![20240210161049](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/21-interpreter/20240210161049.png)
