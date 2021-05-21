import { createRouter, createWebHistory } from "vue-router";
import routes from "@/conf/routes";
import setTitle from "./setTitle";

export default app => {
  const router = createRouter({ history: createWebHistory(), routes });
  router.beforeEach(setTitle);
  app.use(router);
};
