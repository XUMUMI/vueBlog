import Item from "./Item/Item.vue";

export default {
  name: "Contents",
  components: { Item },
  props: {
    pack: String,
    articles: Object
  }
};
