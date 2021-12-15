import { details, strapiUrl } from "../constants.js";
import { showAlert } from "./alert.js";
import { addListener } from "./createCards.js";
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
    console.log(error);
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
        <div class="detailcont">
        <img class="detailcont__img" src="${strapiUrl}${json.Productimg.url}" alt="${json.Productimg.alternativeText}">
        <div class="detailtext">
        <h1 class="detailtext__heading">${json.Title}</h1>
        <p class="detailtext__paragraph">${json.Description}</p>
        <div class="detailMessage"></div>
        <p class="detailtext__price">${json.Price} NOK</p>
        <button class="detailtext__btn" id="${json.id}-add">Add to cart</button>
        </div>
        </div>`;
    addListener(json);
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
