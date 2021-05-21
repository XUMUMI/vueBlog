import { createApp } from "vue";
import App from "@/views/App/App.vue";
import installVueRouter from "@/plugins/router";
import installHighlight from "@/plugins/highlightjs";
import installMarked from "@/plugins/marked";
import installI18n from "@/plugins/i18n";
import "highlightjs-line-numbers.js";

const app = createApp(App);
installVueRouter(app);
installHighlight(app);
installMarked(app);
installI18n(app);
app.mount("#app");
