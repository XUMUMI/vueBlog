import Home from "@/views/Home/Home.vue";
import Archives from "@/views/Archives/Archives.vue";
import { nickName, title } from "@/assets/info/information";
import { postsRoutes } from "@/util/posts";
import { pagesRoutes } from "@/util/pages";

export default [
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
