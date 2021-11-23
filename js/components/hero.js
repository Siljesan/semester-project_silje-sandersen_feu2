import { heroBanner } from "../constants.js";

export const renderHero = (api) => {
  heroBanner.innerHTML = "";
  api.forEach((element) => {
    console.log(element.url);
    heroBanner.innerHTML += `
      <div><img src="${element.url}" alt="${element.alternativeText}"></div>`;
  });
};
