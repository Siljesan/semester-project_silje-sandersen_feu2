import { cartSum } from "../constants.js";

let sum = 0;

export const summarizeCart = (arr) => {
  arr.forEach((element) => {
    sum += Number(element.Price);
  });
  cartSum.innerHTML += `<div>Totalt: ${sum} NOK</div>`;
};
