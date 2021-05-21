import Post from "./Post/Post.vue";
import { posts } from "@/util/posts";

export default {
  name: "Archives",
  components: { Post },
  data() {
    return { posts };
  }
};
