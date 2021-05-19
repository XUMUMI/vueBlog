import { posts } from "./index";

/**
 * 获取分类，如果分类不存在则创建后返回新的分类
 * @param packName 分类名
 * @returns {*} 分类数组
 */
export default packName => {
  if (!posts.filter(pack => pack.pack === packName)[0])
    posts.push({ pack: packName, articles: [] });
  return posts.filter(pack => pack.pack === packName)[0];
};
