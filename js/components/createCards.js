import { featuredProducts, productcont, strapiUrl } from "../constants.js";

export const renderFeaturedCard = (arr) => {
  featuredProducts.innerHTML = "";
  arr.forEach((element) => {
    if (element.Featured) {
      featuredProducts.innerHTML += `
            <div class="card featuredCard">
            <img class="card__img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
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
    <img class="card__img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
    <h3>${element.Title}</h3>
    <p>${element.Price}</p>
    </div>`;
  });
};
