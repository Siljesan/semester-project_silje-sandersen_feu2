import { renderFeaturedCard } from "./createCards.js";
import { renderHero } from "./hero.js";

export async function getProducts(url) {
  const response = await fetch(url);
  const json = await response.json();
  renderFeaturedCard(json);
}

export async function getHero(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  renderHero(json);
}
