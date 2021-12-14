import { logout, navCont, tokenKey, userKey } from "../constants.js";
import { getUsername, removeFromStorage } from "../utils/storage.js";

export const renderNav = () => {
  const { pathname } = document.location;
  console.log(pathname);

  const username = getUsername();
  console.log(username);

  let dynamicNav = `
  <li class="nav__list--item ${
    pathname === "/products.html" ? "active" : ""
  }"><a href="products.html">Products</a></li>
  <li class="nav__list--item ${
    pathname === "/cart.html" ? "active" : ""
  }"><a href="cart.html">Cart</a></li>`;

  if (username) {
    dynamicNav = `
      <li class="nav__list--item ${
        pathname === "/admin.html" ? "active" : ""
      }"><a href="admin.html">Products</a></li>
      <li class="nav__list--item ${
        pathname === "/add.html" ? "active" : ""
      }"><a href="add.html">Add products</a></li>
      `;
  }

  let authLink = `<li class="nav__list--item"><a href="login.html">Login</a></li>`;
  if (username) {
    authLink = `<li class="nav__list--item logout"><a href="index.html">Logout</a></li>`;
  }

  navCont.innerHTML = `
  <nav class="nav">
  <label class="nav__hamburgerLabel" for="nav__hamburgerMenu"><i class="fas fa-bars"></i></label>
  <input type="checkbox" id="nav__hamburgerMenu">
  <ul class="nav__list">
  ${dynamicNav}
  ${authLink}
  </ul>
  </nav>`;

  //signoutUser();
};

const signoutUser = () => {
  return logout.addEventListener("click", function (event) {
    event.preventDefault();
    removeFromStorage(tokenKey);
    removeFromStorage(userKey);
  });
};
