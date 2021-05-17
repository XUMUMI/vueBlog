import Post from "@/views/App/Archives/Post/Post.vue";
import { posts } from "@/utils/markdown";

export default {
  name: "Archives",
  components: { Post },
  data() {
    return {
      posts: [
        {
          pack: "pack1",
          articles: [
            {
              title: "title1",
              url: "/",
              date: "date"
            },
            {
              title: "title2",
              url: "/",
              date: "date"
            }
          ]
        },
        {
          pack: "pack2",
          articles: [
            {
              title: "title1",
              url: "/",
              date: "date"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.posts = posts;
  }
};
