import { license, nickName } from "@/assets/info/information";
import copyright from "@/conf/copyright";

export default {
  name: "Copyright",
  data() {
    return {
      nickName,
      license,
      year: new Date().getFullYear(),
      link: copyright[license]
    };
  }
};
