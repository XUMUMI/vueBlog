import Article from "@/views/App/Article/Article.vue";

const files = require.context("@/assets/pages/", false, /\.md$/);

export const pages = [];
export const pagesRoutes = [];

for (const file of files.keys()) {
  /* 文件名掐头去尾 */
  const title = file.substring(2, file.length - 3);
  /* 为了支持中文和空格，必须对文件名进行编码 */
  const path = `/${encodeURIComponent(title)}`;
  /* 写入目录 TODO 获取文件修改时间 */
  pages.push({ title, path });
  /* 写入路由 */
  pagesRoutes.push({
    path,
    name: title,
    component: Article,
    meta: { title },
    props: { cont: files(file) }
  });
}
