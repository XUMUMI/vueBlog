import Page from "@/components/Page/Page.vue";
import Copyright from "./Copyright/Copyright.vue";
import Tags from "@/views/Article/Tags/Tags.vue";
import Nav from "@/views/Article/Nav/Nav.vue";

export default {
  name: "Article",
  components: { Page, Copyright, Tags, Nav },
  props: {
    cont: String,
    prev: String,
    prevLink: String,
    next: String,
    nextLink: String
  }
};
