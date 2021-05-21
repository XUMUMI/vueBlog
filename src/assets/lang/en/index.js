import cn from "./en";

const lang = ["en", "en-us", "en-US"];
const messages = {};
lang.forEach(value => (messages[value] = cn));
export default messages;
