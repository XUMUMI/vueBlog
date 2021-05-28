import Icon from "@/components/Icon/Icon.vue";
import description from "@/assets/info/description.md";
import icons from "@/assets/info/icons.json";
import iconsCD from "@/assets/info/icons-cd.json";
import iconsCN from "@/assets/info/icons-cn.json";

export default {
  name: "Home",
  components: { Icon },
  props: { nickName: String },
  data() {
    return {
      description,
      icons,
      iconsCD,
      iconsCN,
      inCN:
        (navigator.language === "zh-cn") |
        (navigator.language === "zh-CN") |
        (navigator.language === "zh")
    };
  }
};
