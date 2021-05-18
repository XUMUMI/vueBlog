import { createApp } from "vue";
import App from "./views/App/App.vue";
import router from "./router";
import hljs from "highlight.js";

createApp(App)
  .use(router)
  .use(hljs.vuePlugin)
  .mount("#app");
