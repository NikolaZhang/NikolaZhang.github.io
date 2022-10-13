<template>
  <Common :sidebar="$frontmatter.blog !== true">
    <template
      v-if="$frontmatter.blog && $parent - themeConfig.blog !== false"
      #sidebar-bottom
    >
      <BlogInfo />
    </template>
    <template>
      <main class="page">
        <MyTransition>
          <BreadCrumb :key="$route.path" />
        </MyTransition>

        <slot name="top" />

        <MyTransition :delay="0.04">
          <PageInfo :key="$route.path" />
        </MyTransition>

        <MyTransition v-if="pagePassword && !pageDescrypted" :delay="0.08">
          <Password
            :key="$route.path"
            :page="true"
            @password-verify="password = $event"
          />
        </MyTransition>

        <template v-else>
          <MyTransition :delay="0.12">
            <Anchor :key="$route.path" />
          </MyTransition>

          <MyTransition :delay="0.12">
            <Content slot-key="content-before" />
          </MyTransition>

          <MyTransition v-show="!pagePassword || pageDescrypted" :delay="0.08">
            <Content :key="$route.path" class="theme-default-content" />
          </MyTransition>

          <MyTransition :delay="0.12">
            <Content slot-key="content-after" />
          </MyTransition>

          <MyTransition :delay="0.12">
            <PageMeta :key="$route.path" />
          </MyTransition>

          <MyTransition :delay="0.14">
            <PageNav :key="$route.path" v-bind="{ sidebarItems }" />
          </MyTransition>

          <MyTransition :delay="0.12">
            <Content slot-key="comment-before" />
          </MyTransition>

          <MyTransition :delay="0.16">
            <Comment :key="$route.path" />
          </MyTransition>

          <MyTransition :delay="0.12">
            <Content slot-key="comment-after" />
          </MyTransition>
        </template>

        <slot name="bottom" />
      </main>
    </template>
  </Common>
</template>

<script>
import Vue from "vue";
import BlogInfo from "@BlogInfo";
import Common from "@theme/components/Common.vue";
import Anchor from "@theme/components/Anchor.vue";
import Comment from "@Comment";
import MyTransition from "@theme/components/MyTransition.vue";
import PageInfo from "@mr-hope/vuepress-plugin-comment/lib/client/PageInfo.vue";
import PageMeta from "@theme/components/PageMeta.vue";
import PageNav from "@theme/components/PageNav.vue";
import Password from "@theme/components/Password.vue";

export default {
  name: "BangumiLayout",
  components: {
    BlogInfo,
    Common,
    Anchor,
    Comment,
    MyTransition,
    PageInfo,
    PageMeta,
    PageNav,
    Password,
  },
  props: {
    sidebarItems: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      password: "",
    };
  },
  computed: {
    pagePassword() {
      const { password } = this.$frontmatter;
      return typeof password === "number"
        ? password.toString()
        : typeof password === "string"
        ? password
        : "";
    },
    pageDescrypted() {
      return this.password === this.pagePassword;
    },
  },
};
</script>

<style lang="stylus">
.page {
  display: block;
  box-sizing: border-box;
  min-height: 100vh;
  padding-left: $sidebarWidth;
  padding-bottom: 2rem;
  background: var(--bgcolor);

  @media (max-width: $MQMobile) {
    min-height: 100vh;
  }

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    padding-left: $mobileSidebarWidth;
  }

  @media (min-width: ($MQMobile + 1px)) {
    .theme-container:not(.has-sidebar) & {
      padding-left: 0;
    }
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    padding-left: 0;
  }

  @media (min-width: $MQWide) {
    .has-anchor &:not(.blog) {
      padding-right: 16rem;
    }
  }
}
</style>
