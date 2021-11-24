import { getProducts } from "./components/api.js";
import { renderProductCard } from "./components/createCards.js";
import { productsUrl } from "./constants.js";

getProducts(productsUrl, renderProductCard);
