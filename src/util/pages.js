import register from "@/util/articleRegister";

const files = require.context("@/assets/pages/", false, /\.md$/);

export const pages = [];
export const pagesRoutes = [];

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
  /* 文件名掐头去尾 */
  const title = file.substring(2, file.length - 3);
  /* 为了支持中文和空格，必须对分类名和文件名进行编码 */
  const path = `/${encodeURIComponent(title)}`;
  return { title, path, contents: pages };
};

/**
 * 写入目录
 * @param contents 目录容器
 * @param file     文件
 */
const setContents = (contents, file) => contents.push(getFileInfo(file));

/* 注册到目录和路由 */
register(files, getFileInfo, setContents, pagesRoutes);
