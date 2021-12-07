import { showAlert } from "./components/alert.js";
import {
  editForm,
  editTitle,
  productsUrl,
  editPrice,
  editDescription,
  formMessage,
  formId,
  tokenKey,
} from "./constants.js";
import { getToken } from "./utils/storage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

(async function () {
  try {
    const response = await fetch(productsUrl + id);
    const json = await response.json();
    document.querySelector(".loading").classList.add("hide");

    editTitle.value = json.Title;
    editPrice.value = json.Price;
    editDescription.value = json.Description;
    formId.value = json.id;
  } catch (error) {
    console.log(error);
  } finally {
    editForm.style.display = "block";
  }
})();

const submitEditForm = (event) => {
  event.preventDefault();
  formMessage.innerHTML = "";

  const titleValue = editTitle.value.trim();
  const priceValue = parseFloat(editPrice.value);
  const descriptionValue = editDescription.value.trim();
  const idValue = formId.value;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return (formMessage.innerHTML += showAlert(
      "Please enter proper values",
      "danger"
    ));
  }

  updateProduct(titleValue, priceValue, descriptionValue, idValue);
};

editForm.addEventListener("submit", submitEditForm);

async function updateProduct(title, price, description, id) {
  const data = JSON.stringify({
    Title: title,
    Price: price,
    Description: description,
  });
  const token = getToken(tokenKey);
  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productsUrl + id, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      formMessage.innerHTML += showAlert("Yay! Product is updated", "success");
    }

    if (json.error) {
      formMessage.innerHTML += showAlert(json.message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}
