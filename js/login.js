import { showAlert } from "./components/alert.js";
import {
  formMessage,
  formEmail,
  formPassword,
  loginForm,
  strapiUrl,
  tokenKey,
} from "./constants.js";
import { saveToken } from "./utils/storage.js";

const submitForm = (event) => {
  console.log(event);
  event.preventDefault();

  formMessage.innerHTML = "";

  const emailValue = formEmail.value.trim();
  const passwordValue = formPassword.value.trim();

  if (emailValue.length === 0 && passwordValue.length === 0) {
    return (formMessage.innerHTML += showAlert(
      "Please enter email and password",
      "danger"
    ));
  }
  performLogin(emailValue, passwordValue);
};

loginForm.addEventListener("submit", submitForm);

async function performLogin(email, password) {
  const url = strapiUrl + "/auth/local";
  const data = JSON.stringify({ identifier: email, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(tokenKey, json.jwt);

      location.href = "admin.html";
    }

    if (json.error) {
      formMessage.innerHTML += showAlert("Invalid email or password", "danger");
    }
  } catch (error) {
    console.log(error);
  }
}
