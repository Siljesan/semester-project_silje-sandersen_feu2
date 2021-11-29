import {
  cartContainer,
  cartKey,
  details,
  featuredProducts,
  productcont,
  strapiUrl,
} from "../constants.js";
import { retrieveFromStorage, saveToStorage } from "../utils/storage.js";
import { findIndex } from "./findIndex.js";

let collection = [];
let storageArray = retrieveFromStorage(cartKey);

const createCart = (item, version) => {
  const { id, Productimg, Title, Price } = item;

  return `
  <div class="cart">
  <div class="cart__item">
  <img class="cart__item--img" src="${strapiUrl}${Productimg.url}" alt="${Productimg.alternativeText}">
  <div class="cart__itemText">
  <h3 class="cart__itemText--title">${Title}</h3>
  <p class="cart__itemText--price">${Price}</p>
  </div>
  <button class="cart__item--btn" id="${id}-${version}"><i class="fas fa-trash"></i></button>
  </div>
  </div>`;
};

const removeListener = () => {
  storageArray.forEach((item) => {
    document
      .getElementById(`${item.id}-remove`)
      .addEventListener("click", () => {
        storageArray.splice(findIndex(storageArray, item), 1);
        saveToStorage(item);
        renderCart();
      });
  });
};

export const addListener = (item) => {
  document.getElementById(`${item.id}-add`).addEventListener("click", () => {
    collection.push(item);
    saveToStorage(cartKey, collection);
  });
};

export const renderCart = () => {
  cartContainer.innerHTML = "";
  if (!storageArray.length) {
    cartContainer.innerHTML = "<h2>No items added</h2>";
  } else {
    storageArray.forEach((item) => {
      return (cartContainer.innerHTML += createCart(item, "remove"));
    });
    removeListener();
  }
};

export const renderFeaturedCard = (arr) => {
  featuredProducts.innerHTML = "";
  arr.forEach((element) => {
    if (element.Featured) {
      featuredProducts.innerHTML += `
            <div class="card featuredCard">
            <div class="imgCont">
            <a href="productDetail.html?id=${element.id}">
                <div class="imgCont__overlay"></div>
                <img class="card__img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
                <div class="imgCont__details fadeIn-top">
                    <h4>Read more</h4>
                </div>
            </a>
            </div>
            <h3>${element.Title}</h3>
            <p>${element.Price}</p>
            </div>`;
    }
  });
};

export const renderProductCard = (arr) => {
  productcont.innerHTML = "";
  arr.forEach((element) => {
    productcont.innerHTML += `
    <div class="card productCard">
        <div class="imgCont">
            <a href="productDetail.html?id=${element.id}">
                <div class="imgCont__overlay"></div>
                <img class="card__img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
                <div class="imgCont__details fadeIn-top">
                    <h4>Read more</h4>
                </div>
            </a>
        </div>
        <h3>${element.Title}</h3>
        <p>${element.Price}</p>
    </div>`;
  });
};
