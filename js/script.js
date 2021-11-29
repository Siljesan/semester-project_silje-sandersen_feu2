import { getProducts } from "./components/api.js";
import { renderFeaturedCard } from "./components/createCards.js";
import { productsUrl } from "./constants.js";

getProducts(productsUrl, renderFeaturedCard);
