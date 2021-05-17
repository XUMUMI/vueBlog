import Item from "@/views/App/Archives/Post/Item/Item.vue";
export default {
  name: "Post",
  components: { Item },
  props: {
    pack: String,
    articles: Object
  }
};
