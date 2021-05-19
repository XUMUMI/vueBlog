export default {
  name: "Article",
  props: { cont: String },
  mounted() {
    document.querySelectorAll("pre").forEach(this.formatCode);
  },
  methods: {
    formatCode(element) {
      this.$hljs.highlightElement(element);
      this.$hljs.lineNumbersBlock(element);
    }
  }
};
