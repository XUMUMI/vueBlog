import { nickName, title } from "@/assets/info/information";
import { postsRoutes } from "@/util/posts";
import { pagesRoutes } from "@/util/pages";

export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
    meta: { title },
    props: { nickName }
  },
  {
    path: "/archives",
    name: "Archives",
    component: () => import("@/views/Archives/Archives.vue"),
    meta: { title }
  },
  ...postsRoutes,
  ...pagesRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];
