import { license } from "@/assets/info/information";
import copyright from "@/conf/copyright";

export default {
  name: "Copyright",
  props: { author: String },
  data() {
    return {
      copyright: this.$marked(`Copyright ©️ ${new Date().getFullYear()}
       [${license}](${copyright[license]}) LICENSE`)
    };
  }
};
