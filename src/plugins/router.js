import { createRouter, createWebHistory } from "vue-router";
import routes from "@/conf/routes";

/**
 * 路由发生变化修改页面 title
 */
function setTitle(to, from, next) {
  if (to.meta.title) document.title = to.meta.title;
  next();
}

export default app => {
  const router = createRouter({ history: createWebHistory(), routes });
  router.beforeEach(setTitle);
  app.use(router);
};
