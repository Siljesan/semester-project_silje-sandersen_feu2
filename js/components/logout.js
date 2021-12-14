import { tokenKey, userKey } from "../constants.js";
import { removeFromStorage } from "../utils/storage.js";

export default function logoutBtn() {
  const btn = document.querySelector(".logout");
  if (btn) {
    btn.onclick = function () {
      removeFromStorage(tokenKey);
      removeFromStorage(userKey);
      location.href = "index.html";
    };
  }
}
