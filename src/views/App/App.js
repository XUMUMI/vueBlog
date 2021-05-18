import Home from "@/views/App/Home/Home.vue";
import Top from "@/views/App/Home/Top/Top.vue";
import Foot from "@/views/App/Home/Foot/Foot.vue";
import * as info from "@/assets/info/information";
import { pages } from "@/util/pages";

export default {
  name: "App",
  components: { Home, Top, Foot },
  data() {
    return { info, pages };
  },
  updated() {
    this.pages = pages;
  }
};
