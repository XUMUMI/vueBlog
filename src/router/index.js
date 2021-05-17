import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/App/Home/Home.vue";
import Archives from "@/views/App/Archives/Archives.vue";
import { markdownRoutes } from "@/utils/markdown";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/archives",
    name: "Archives",
    component: Archives
  },
  ...markdownRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
