import { getHero, getProducts } from "./components/api.js";
import { renderFeaturedCard } from "./components/createCards.js";
import { heroUrl, productsUrl } from "./constants.js";

//getHero(heroUrl);
getProducts(productsUrl, renderFeaturedCard);
