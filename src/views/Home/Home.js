import Icon from "@/components/Icon/Icon.vue";
import description from "@/assets/info/description.md";
import icons from "@/assets/info/icons.json";

export default {
  name: "Home",
  components: { Icon },
  props: { nickName: String },
  data() {
    return { description, icons };
  }
};
