import { $t } from "@/plugins/i18n/i18n";
import getPack from "@/util/posts/getPack";
import register from "@/util/articleRegister";
import component from "@/views/Article/Article.vue";

const files = require.context("@/assets/posts/", true, /\.md$/);

export const posts = [];
export const postsRoutes = [];

/**
 * 获取文件信息
 *
 * @param file 文件
 * @returns {{path: string, contents: ([]|Object|ObjectConstructor|*), title: string}}
 * title 文章标题
 * path 文章路径
 * contents 目录容器
 */
const getFileInfo = file => {
  const fileInfo = file.substring(2, file.length - 3).split("/");
  /* 获取归档分类，一层归为默认分类 */
  const pack = 2 === fileInfo.length ? fileInfo[0] : $t("default_pack_name");
  /* 如果是一层，文件名会落入 0，两层则落入 1。这里先获取 1，如果 1 没有就说明文件名在 0 */
  const title = fileInfo[1] ?? fileInfo[0];
  /* 为了支持中文和空格，必须对分类名和文件名进行编码 */
  const path = `/${encodeURIComponent(pack)}/${encodeURIComponent(title)}`;
  return { title, path, contents: getPack(pack).articles, component };
};

/**
 * 写入目录
 * @param contents 目录容器
 * @param file     文件
 * @param date     修改日期
 */
const setContents = (contents, file, date) => {
  /* 写入目录 TODO 获取文件修改时间 */
  contents.push({ ...getFileInfo(file), date });
};

/* 注册到目录和路由 */
register(files, getFileInfo, setContents, postsRoutes);
