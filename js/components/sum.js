import { cartSum } from "../constants.js";

let sum = 0;

export const summarizeCart = (arr) => {
  cartSum.innerHTML = "";
  arr.forEach((element) => {
    sum += Number(element.Price);
  });
  cartSum.innerHTML += `<div>Totalt: ${sum} NOK</div>`;
};
