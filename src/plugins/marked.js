import marked from "marked";

export default app => {
  app.config.globalProperties.$marked = marked;
};
