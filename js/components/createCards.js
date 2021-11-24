import { featuredProducts, strapiUrl } from "../constants.js";

export const renderFeaturedCard = (arr) => {
  featuredProducts.innerHTML = "";
  arr.forEach((element) => {
    console.log(element);
    if (element.Featured) {
      featuredProducts.innerHTML += `
            <div class="featured__card">
            <img class="featured__card--img" src="${strapiUrl}${element.Productimg.url}" alt="${element.Productimg.alternativeText}">
            <h3>${element.Title}</h3>
            <p>${element.Price}</p>
            </div>`;
    }
  });
};
