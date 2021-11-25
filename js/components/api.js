import { renderHero } from "./hero.js";

export async function getProducts(url, call) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    document.querySelector(".loading").classList.add("hide");

    call(json);
  } catch {
    document.querySelector(".alert").innerHTML += showAlert(
      "An error occured",
      "danger"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

export async function getHero(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  renderHero(json);
}
