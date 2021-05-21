import Item from "./Item/Item.vue";

export default {
  name: "Post",
  components: { Item },
  props: {
    pack: String,
    articles: Object
  }
};
