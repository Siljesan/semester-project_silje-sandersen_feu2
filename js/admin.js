import { getProducts } from "./components/api.js";
import { renderNav } from "./components/nav.js";
import { productList, strapiUrl, productsUrl } from "./constants.js";

const renderProductList = (arr) => {
  let featured = "";
  productList.innerHTML = "";
  arr.forEach((element) => {
    console.log(element);
    if (element.Featured) {
      featured = "YES";
    } else {
      featured = "NO";
    }
    productList.innerHTML += `
        <div class="adminProducts__items">
        <h3 class="adminProducts__items--element">${element.id}</h3>
        <h3 class="adminProducts__items--element">${element.Title}</h3>
        <h3 class="adminProducts__items--element">${featured}</h3>
        <img class="adminProducts__img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
        <a href="editProduct.html?id=${element.id}">Edit</a>
        </div>`;
  });
};

getProducts(productsUrl, renderProductList);
renderNav();
