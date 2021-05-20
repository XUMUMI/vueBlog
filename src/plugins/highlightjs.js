import hljs from "highlight";

window.hljs = hljs;
export default app => {
  app.config.globalProperties.$hljs = window.hljs;
};
