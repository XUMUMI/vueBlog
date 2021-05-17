import Icon from "../../../components/Icon/Icon.vue";
export default {
  name: "Home",
  components: { Icon },
  data() {
    return {
      icons: {
        Zhihu: {
          url: "https://www.zhihu.com/people/xumumi",
          icon: "zhihu"
        },
        FaceBook: {
          url: "https://www.facebook.com/XUMUMI",
          icon: "facebook"
        },
        Twitter: {
          url: "https://twitter.com/xxumumi",
          icon: "twitter"
        },
        Instagram: {
          url: "https://www.instagram.com/XUMUMI",
          icon: "instagram"
        },
        Reddit: {
          url: "https://www.reddit.com/user/XUMUMI",
          icon: "reddit"
        },
        Github: {
          url: "https://github.com/XUMUMI",
          icon: "github"
        }
      }
    };
  }
};
