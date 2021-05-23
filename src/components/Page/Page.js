export default {
  name: "page",
  props: { cont: String },
  mounted() {
    this.formatElement("pre");
  },
  updated() {
    this.formatElement("pre");
  },
  methods: {
    formatElement(name) {
      this.$refs.page.getElementsByTagName(name).forEach(this.formatCode);
    },
    formatCode(element) {
      this.$hljs.highlightElement(element);
      this.$hljs.lineNumbersBlock(element);
    }
  }
};
