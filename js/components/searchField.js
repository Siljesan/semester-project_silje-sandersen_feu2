import { inputValue } from "../constants.js";
import { renderProductCard } from "./createCards.js";

export const searchItems = (items) => {
  inputValue.onkeyup = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = items.filter((item) => {
      if (item.Title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    renderProductCard(filteredSearch);
  };
};
