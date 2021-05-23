/**
 * 将文章批量注册到路由和目录
 *
 * @param files       文件 Map
 * @param getFileInfo 回调函数，用于获取文章详细信息：传入单个文件，返回 文章标题、文章路径、文章所在目录容器、文章格式模板
 * @param setContents 回调函数，用于将文章信息写入目录：传入 文章所在目录容器 和 单个文件，无需返回
 * @param routes      要写入的路由
 */
export default (files, getFileInfo, setContents, routes) => {
  /* 遍历文件进行注册 */
  let prev, next;
  let prevLink, nextLink;
  const filesList = files.keys();
  let fileInfo = getFileInfo(filesList[0]);
  let fileInfoNext;
  for (let index = 0; index < filesList.length; ++index) {
    if (index + 1 < filesList.length) {
      /* 从回调函数获取文章详细信息 */
      fileInfoNext = getFileInfo(filesList[index + 1]);
      next = fileInfoNext.title;
      nextLink = fileInfoNext.path;
    } else {
      next = "";
      nextLink = "";
    }
    register(filesList[index], fileInfo);
    prev = fileInfo.title;
    prevLink = fileInfo.path;
    fileInfo = fileInfoNext;
  }

  /**
   * 注册文章函数
   * @param file 文件
   * @param fileInfo 文件详细信息
   */
  function register(file, fileInfo) {
    /* 从回调函数获取文章详细信息 */
    const { title, path, contents, component } = fileInfo;
    /* 将文件写入目录 */
    setContents(contents, file);
    /* 写入路由 */
    routes.push({
      path,
      component,
      name: title,
      meta: { title },
      props: { cont: files(file), prev, prevLink, next, nextLink }
    });
  }
};
