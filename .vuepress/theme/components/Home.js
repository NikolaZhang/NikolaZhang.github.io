import Vue from "vue";
import MyTransition from "@theme/components/MyTransition.vue";
import NavLink from "@theme/components/Navbar/NavLink.vue";
export default Vue.extend({
    name: "Home",
    components: { MyTransition, NavLink },
    computed: {
        actionLinks() {
            const { action } = this.$frontmatter;
            if (Array.isArray(action))
                return action;
            return [action];
        },
    },
});
//# sourceMappingURL=Home.js.map