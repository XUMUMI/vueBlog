/**
 * 将文章批量注册到路由和目录
 *
 * @param files       文件 Map
 * @param getFileInfo 回调函数，用于获取文章详细信息：传入单个文件，返回 文章标题、文章路径、文章所在目录容器、文章格式模板
 * @param setContents 回调函数，用于将文章信息写入目录：传入 文章所在目录容器 和 单个文件，无需返回
 * @param routes      要写入的路由
 */
import { nickName } from "@/assets/info/information";

export default (files, getFileInfo, setContents, routes) => {
  const filesList = files.keys();
  /* 先读取第一篇文章的信息 */
  let fileInfo = getFileInfo(filesList[0]),
    prev = null,
    next = null;
  /* 遍历文件进行注册 */
  for (let index = 0; index < filesList.length - 1; ++index) {
    /* 得到下一篇文章 */
    next = getFileInfo(filesList[index + 1]);
    /* 把信息注册到目录和路由 */
    register(filesList[index], fileInfo, prev, next);
    /* 更新前驱记录 */
    prev = fileInfo;
    /* 更新当前文章 */
    fileInfo = next;
  }
  register(filesList[filesList.length - 1], fileInfo, prev, null);

  /**
   * 注册文章函数
   * @param file 文件
   * @param fileInfo 文件详细信息
   * @param prev 上一篇文章
   * @param next 下一篇文章
   */
  function register(file, fileInfo, prev, next) {
    /* 从回调函数获取文章详细信息 */
    const { title, path, contents, component } = fileInfo;
    /* 获取文章内容 */
    const cont = getCont(file);
    /* 将文件写入目录 */
    setContents(contents, file, cont.date);
    /* 写入路由 */
    routes.push({
      path,
      component,
      name: title,
      meta: { title },
      props: { ...cont, prev, next }
    });
  }

  function getCont(file) {
    const div = document.createElement("div");
    div.info = getInfo;
    div.innerHTML = files(file);
    const author = div.info("author") ?? nickName;
    const date = div.info("date");
    const cont = div.innerHTML;
    return { cont, author, date };
  }

  function getInfo(name) {
    const element = this.getElementsByTagName("h6")[0];
    const cont = element?.innerHTML;
    let info;
    if (cont && cont?.indexOf(name) !== -1) {
      info = cont.split(": ")[1];
      this.removeChild(element);
    }
    return info;
  }
};
