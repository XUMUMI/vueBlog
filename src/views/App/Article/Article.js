import hljs from "highlight.js";
export default {
  name: "Article",
  props: { cont: String },
  mounted() {
    document.querySelectorAll("pre").forEach(hljs.highlightBlock);
  },
  updated() {
    document.querySelectorAll("pre").forEach(hljs.highlightBlock);
  }
};
