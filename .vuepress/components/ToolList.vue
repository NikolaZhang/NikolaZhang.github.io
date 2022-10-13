<template>
  <div>
    <mini-list :items="items"/>
  </div>
</template>
<script>
import MiniList from "./MiniList.vue";

export default {
  name: "ToolList",
  components: {MiniList},
  data() {
    return {
      items: [],
    };
  },
  created() {
    let shares = require("../config/data/share");
    this.items = shares.tool
  }
};
</script>