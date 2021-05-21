export default {
  name: "Foot",
  props: {
    name: String,
    recordNumber: String
  },
  data() {
    return {
      cont: this.$marked(
        `© ${this.name} | [${this.recordNumber}](https://beian.miit.gov.cn/)`
      )
    };
  }
};
