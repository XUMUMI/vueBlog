module.exports = {
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .end();
  },
  configureWebpack: {
    externals: {
      "highlight.js": "hljs",
      marked: "marked",
      vue: "Vue",
      "vue-i18n": "VueI18n",
      "vue-router": "VueRouter"
    }
  }
};
