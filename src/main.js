import { createApp } from "vue";
import App from "@/views/App/App.vue";
import installVueRouter from "@/plugins/router";
import installHighlight from "@/plugins/highlightjs";
import installMarked from "@/plugins/marked";
import "highlightjs-line-numbers.js";

const app = createApp(App);
installVueRouter(app);
installHighlight(app);
installMarked(app);
app.mount("#app");
