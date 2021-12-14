import { showAlert } from "./components/alert.js";
import { renderNav } from "./components/nav.js";
import {
  formMessage,
  title,
  price,
  description,
  addForm,
  tokenKey,
  productsUrl,
  imgurl,
  featured,
} from "./constants.js";
import { getToken } from "./utils/storage.js";

renderNav();

const addProduct = (event) => {
  event.preventDefault();

  formMessage.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = imgurl.value.trim();
  const featuredCheck = featured.checked;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0 ||
    imageValue.length === 0
  ) {
    return (formMessage.innerHTML += showAlert(
      "Please enter proper values",
      "danger"
    ));
  }

  addProductListener(
    titleValue,
    priceValue,
    descriptionValue,
    imageValue,
    featuredCheck
  );
};

addForm.addEventListener("submit", addProduct);

async function addProductListener(title, price, description, img, featured) {
  const data = JSON.stringify({
    Title: title,
    Price: price,
    Description: description,
    Featured: featured,
    Productimg: {
      alternativeText: "uploaded image",
      url: img,
    },
  });
  const token = getToken(tokenKey);
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(productsUrl, options);
    const json = await response.json();
    console.log(json);

    if (json.created_at) {
      formMessage.innerHTML += showAlert(
        "Congratulations! Product is added to list",
        "success"
      );
      addForm.reset();
    }

    if (json.error) {
      formMessage.innerHTML += showAlert(json.message, "danger");
    }
  } catch (error) {
    console.log(error);
    formMessage.innerHTML += showAlert("An error occured", "danger");
  }
}
