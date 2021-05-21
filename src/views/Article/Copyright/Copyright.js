import { license, nickName } from "@/assets/info/information";
import copyright from "@/conf/copyright";

export default {
  name: "Copyright",
  data() {
    return {
      author: this.$marked(`by ${nickName}`),
      copyright: this.$marked(`Copyright ©️ ${new Date().getFullYear()}
       [${license}](${copyright[license]}) LICENSE`)
    };
  }
};
