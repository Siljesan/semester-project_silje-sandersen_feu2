import { getProducts } from "./components/api.js";
import { renderFeaturedCard } from "./components/createCards.js";
import { renderNav } from "./components/nav.js";
import { productsUrl } from "./constants.js";

getProducts(productsUrl, renderFeaturedCard);
renderNav();
