import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {setVuetifyThemeMode} from "./utils/common";

export default ({
                    Vue,      // VuePress 应用正在使用的Vue版本
                    options,  // 根Vue实例的选项
                    router,   // 应用的路由实例
                    siteData,  // 站点元数据
                    isServer,
                }) => {
    Vue.use(Vuetify);

    if(!isServer) {
        options.vuetify = new Vuetify({
            theme: { dark: setVuetifyThemeMode() },
        });
    } else {
        options.vuetify = new Vuetify({
            theme: { dark: false },
        });
    }
}