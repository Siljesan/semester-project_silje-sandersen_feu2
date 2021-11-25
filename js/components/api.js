import { details, strapiUrl } from "../constants.js";
import { showAlert } from "./alert.js";
import { renderHero } from "./hero.js";
import { searchItems } from "./searchField.js";

export async function getProducts(url, call) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    document.querySelector(".loading").classList.add("hide");

    call(json);
    searchItems(json);
  } catch (error) {
    document.querySelector(".alert").innerHTML = showAlert(
      "An error occured",
      "danger"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}

export async function getDetails(url, itemId) {
  try {
    const response = await fetch(url + itemId);
    const json = await response.json();
    document.querySelector(".loading").classList.add("hide");
    document.title = json.Title;
    details.innerHTML += `
        <div>
        <h1>${json.Title}</h1>
        <div class="detailText">
        <img class="detailText__img" src="${strapiUrl}${json.Productimg.url}" alt="${json.Productimg.alternativeText}">
        <p>${json.Description}</p>
        </div>
        </div>`;
  } catch (error) {
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
