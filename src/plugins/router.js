import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/App/Home/Home.vue";
import Archives from "@/views/App/Archives/Archives.vue";
import { postsRoutes } from "@/util/posts";
import { title, nickName } from "@/assets/info/information";
import { pagesRoutes } from "@/util/pages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title },
    props: { nickName }
  },
  {
    path: "/archives",
    name: "Archives",
    component: Archives,
    meta: { title }
  },
  ...postsRoutes,
  ...pagesRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

export default app => {
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });
  app.use(router);
};
