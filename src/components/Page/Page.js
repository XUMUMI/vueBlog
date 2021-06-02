export default {
  name: "page",
  props: { cont: Node },
  mounted() {
    this.flushCont(this.cont);
  },
  updated() {
    this.flushCont(this.cont);
  },
  methods: {
    /**
     * 更新页面内容
     * @param cont 页面内容
     */
    flushCont(cont) {
      const page = this.$refs.page;
      const child = page.lastChild;
      if (child) page.removeChild(child);
      page.appendChild(cont);
    }
  }
};
