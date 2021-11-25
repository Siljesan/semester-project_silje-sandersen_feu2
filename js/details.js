import { getDetails } from "./components/api.js";
import { productsUrl } from "./constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

getDetails(productsUrl, id);
