import Article from "@/views/App/Article/Article.vue";
import { defaultPageName } from "@/assets/info/information";

const files = require.context("@/assets/posts/", true, /\.md$/);

export const posts = [];
export const postsRoutes = [];

for (const file of files.keys()) {
  /* 对路径切段存入数组 */
  const fileInfo = file.substring(2, file.length - 3).split("/");
  /* 只渲染一层和两层的文件 */
  if (fileInfo.length > 2) continue;
  /* 获取归档分类，一层归为默认分类 */
  const pack = 2 === fileInfo.length ? fileInfo[0] : defaultPageName;
  /* 如果是一层，文件名会落入 0，两层则落入 1。这里先获取 1，如果 1 没有就说明文件名在 0 */
  const title = fileInfo[1] ?? fileInfo[0];
  /* 为了支持中文和空格，必须对分类名和文件名进行编码 */
  const path = `/${encodeURIComponent(pack)}/${encodeURIComponent(title)}`;
  /* 写入目录 TODO 获取文件修改时间 */
  getPack(pack).articles.push({ title, path });
  /* 写入路由 */
  postsRoutes.push({
    path,
    name: title,
    component: Article,
    props: { cont: files(file) }
  });
}

/**
 * 获取分类，如果分类不存在则创建后返回新的分类
 * @param packName 分类名
 * @returns 分类数组
 */
function getPack(packName) {
  if (!posts.filter(pack => pack.pack === packName)[0]) {
    posts.push({ pack: packName, articles: [] });
  }
  return posts.filter(pack => pack.pack === packName)[0];
}
