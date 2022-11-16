<template>
  <div>
    <mini-list :items="items" />
  </div>
</template>
<script>
import MiniList from "./MiniList.vue";

export default {
  name: "BlogList",
  components: { MiniList },
  data() {
    return {
      items: [],
    };
  },
  created() {
    let shares = require("./data/share");
    this.items = shares.blog;
  },
};
</script>