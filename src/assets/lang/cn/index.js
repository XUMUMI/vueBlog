import cn from "./cn";

const lang = ["cn", "zh-cn", "zh-CN"];
const messages = {};
lang.forEach(value => (messages[value] = cn));
export default messages;
