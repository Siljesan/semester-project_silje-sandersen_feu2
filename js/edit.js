import { showAlert } from "./components/alert.js";
import {
  editForm,
  title,
  productsUrl,
  price,
  description,
  formMessage,
  formId,
  tokenKey,
  imgurl,
  strapiUrl,
  featured,
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

    if (json.Featured) {
      featured.checked = true;
    }

    title.value = json.Title;
    price.value = json.Price;
    description.value = json.Description;
    imgurl.value = strapiUrl + json.Productimg.url;
    formId.value = json.id;

    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    editForm.style.display = "block";
  }
})();

const submitEditForm = (event) => {
  event.preventDefault();
  formMessage.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = imgurl.value.trim();
  const featuredCheck = featured.checked;
  const idValue = formId.value;

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

  updateProduct(
    titleValue,
    priceValue,
    descriptionValue,
    idValue,
    imageValue,
    featuredCheck
  );
};

editForm.addEventListener("submit", submitEditForm);

async function updateProduct(title, price, description, id, img, featured) {
  const data = JSON.stringify({
    Title: title,
    Price: price,
    Description: description,
    Featured: featured,
    Productimg: {
      url: img,
    },
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
    formMessage.innerHTML += showAlert("An error occured", "danger");
  }
}
