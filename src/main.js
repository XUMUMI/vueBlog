import { createApp } from "vue";
import App from "@/views/App/App.vue";
import installVueRouter from "@/plugins/router";
import installMarked from "@/plugins/marked";
import installI18n from "@/plugins/i18n";

const app = createApp(App);
installVueRouter(app);
installMarked(app);
installI18n(app);
app.mount("#app");
