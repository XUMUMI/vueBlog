import Post from "@/views/App/Archives/Post/Post.vue";
import { posts } from "@/util/posts";

export default {
  name: "Archives",
  components: { Post },
  data() {
    return { posts };
  }
};
