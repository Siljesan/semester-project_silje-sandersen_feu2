import { renderHero } from "./hero.js";

export async function getProducts(url, call) {
  const response = await fetch(url);
  const json = await response.json();
  call(json);
}

export async function getHero(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  renderHero(json);
}
