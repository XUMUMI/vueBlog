import Article from "@/views/App/Article/Article.vue";

const files = require.context("@/posts/", true, /\.md$/);

export const posts = [];
export const markdownRoutes = [];

let packIndex = -1;

for (const file of files.keys()) {
  console.log(packIndex);
  const fileInfo = file
    .substring(0, file.length - 3)
    .slice(2)
    .split("/");
  if (fileInfo.length !== 2) continue;
  const packName = fileInfo[0];
  const fileName = fileInfo[1] ?? fileInfo[0];
  const pack = getPack(packName);
  const article = {
    title: fileName,
    url: encodeURIComponent(packName) + "/" + encodeURIComponent(fileName)
  };
  pack.articles.push(article);
  const router = {
    path:
      "/" + encodeURIComponent(packName) + "/" + encodeURIComponent(fileName),
    name: fileName,
    component: Article,
    props: { cont: files(file) }
  };
  markdownRoutes.push(router);
}

function getPack(packName) {
  console.log(this);
  let pack;
  if (!posts[packIndex] || posts[packIndex].pack !== packName) {
    posts.push({ pack: packName, articles: [] });
    ++packIndex;
  }
  pack = posts[packIndex];
  return pack;
}
