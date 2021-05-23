import Contents from "./Contents/Contents.vue";
import { posts } from "@/util/posts";

export default {
  name: "Archives",
  components: { Contents },
  data() {
    return { posts };
  }
};
