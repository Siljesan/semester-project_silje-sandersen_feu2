import { navCont, tokenKey, userKey } from "../constants.js";
import { getUsername, removeFromStorage } from "../utils/storage.js";
import logoutBtn from "../components/logout.js";

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
  }"><a href="cart.html">Cart</a></li>
  <li class="nav__list--item"><a href="login.html">Login</a></li>`;

  if (username) {
    dynamicNav = `
      <li class="nav__list--item ${
        pathname === "/admin.html" ? "active" : ""
      }"><a href="admin.html">Products</a></li>
      <li class="nav__list--item ${
        pathname === "/add.html" ? "active" : ""
      }"><a href="add.html">Add products</a></li>
      <button class="nav__list--item logout">Logout</button>
      `;
  }

  navCont.innerHTML = `
  <nav class="nav">
  <label class="nav__hamburgerLabel" for="nav__hamburgerMenu"><i class="fas fa-bars"></i></label>
  <input type="checkbox" id="nav__hamburgerMenu">
  <ul class="nav__list">
  ${dynamicNav}
  </ul>
  </nav>`;

  logoutBtn();
};
