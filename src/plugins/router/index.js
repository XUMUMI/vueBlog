import { createRouter, createWebHistory } from "vue-router";
import routes from "@/conf/routes";
import setTitle from "./setTitle";
import toTop from "@/util/toTop";

export default app => {
  const router = createRouter({ history: createWebHistory(), routes });
  router.afterEach(toTop);
  router.beforeEach(setTitle);
  app.use(router);
};
