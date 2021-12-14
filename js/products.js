import { getProducts } from "./components/api.js";
import { renderProductCard } from "./components/createCards.js";
import { renderNav } from "./components/nav.js";
import { productsUrl } from "./constants.js";

getProducts(productsUrl, renderProductCard);
renderNav();
