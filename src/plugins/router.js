import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/App/Home/Home.vue";
import Archives from "@/views/App/Archives/Archives.vue";
import { postsRoutes } from "@/util/posts";
import { nickName } from "@/assets/info/information";
import { pagesRoutes } from "@/util/pages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { nickName }
  },
  {
    path: "/archives",
    name: "Archives",
    component: Archives
  },
  ...postsRoutes,
  ...pagesRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

export default app => {
  app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  );
};
