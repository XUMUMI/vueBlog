import hljs from "highlight.js";

window.hljs = hljs;
export default app => {
  app.config.globalProperties.$hljs = window.hljs;
};
