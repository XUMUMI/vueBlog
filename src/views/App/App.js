import Home from "@/views/Home/Home.vue";
import Top from "./Top/Top.vue";
import Foot from "./Foot/Foot.vue";
import * as info from "@/assets/info/information";
import { pages } from "@/util/pages";

export default {
  name: "App",
  components: { Home, Top, Foot },
  data() {
    return { info, pages };
  }
};
