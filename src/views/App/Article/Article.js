export default {
  name: "Article",
  props: { cont: String },
  mounted() {
    this.$refs.cont.getElementsByTagName("pre").forEach(this.formatCode);
  },
  methods: {
    formatCode(element) {
      this.$hljs.highlightElement(element);
      this.$hljs.lineNumbersBlock(element);
    }
  }
};
