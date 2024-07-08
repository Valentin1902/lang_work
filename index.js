import { en } from "./js/en.js";
import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js";
import { ua } from "./js/ua.js";

const {
  btn: { btn_ua, btn_en, btn_fr },
  head: { title, head_desc },
  text: { main_text, description },
  flag,
} = refs;

function changeLanguge(lang) {
  title.textContent = lang.title;
  head_desc.textContent = lang.head_desc;
  main_text.textContent = lang.main_text;
  description.textContent = lang.description;
}
btn_ua.addEventListener("click", () => {
  changeLanguge(ua);
});
btn_en.addEventListener("click", () => {
  changeLanguge(en);
});
btn_fr.addEventListener("click", () => {
  changeLanguge(fr);
});
