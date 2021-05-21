/**
 * 路由发生变化修改页面 title
 */
export default (to, from, next) => {
  if (to.meta.title) document.title = to.meta.title;
  next();
};
