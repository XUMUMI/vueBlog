export default {
  name: "page",
  props: { cont: Object },
  mounted() {
    this.$refs.page.appendChild(this.cont);
  }
};
