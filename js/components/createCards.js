import { featuredProducts, productcont, strapiUrl } from "../constants.js";

export const renderFeaturedCard = (arr) => {
  featuredProducts.innerHTML = "";
  arr.forEach((element) => {
    if (element.Featured) {
      featuredProducts.innerHTML += `
            <div class="card featuredCard">
            <div class="imgCont">
            <a href="productDetail.html">
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
            <a href="productDetail.html">
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
