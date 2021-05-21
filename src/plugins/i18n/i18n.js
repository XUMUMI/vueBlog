import { createI18n } from "vue-i18n";
import { language } from "@/assets/info/information";
import cn from "@/assets/lang/cn";
import en from "@/assets/lang/en";

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: language,
  messages: { ...cn, ...en }
});
export const $t = i18n.global.t;
export default i18n;
