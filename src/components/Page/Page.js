export default {
  name: "page",
  props: { cont: String },
  mounted() {
    this.$refs.page.getElementsByTagName("pre").forEach(this.formatCode);
  },
  methods: {
    formatCode(element) {
      this.$hljs.highlightElement(element);
      this.$hljs.lineNumbersBlock(element);
    }
  }
};
