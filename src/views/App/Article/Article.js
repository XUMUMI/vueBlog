import Page from "@/components/Page/Page.vue";
import Copyright from "@/views/App/Article/Copyright/Copyright.vue";

export default {
  name: "Article",
  components: { Page, Copyright },
  props: { cont: String }
};
