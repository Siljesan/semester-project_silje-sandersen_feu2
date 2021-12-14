import { tokenKey, userKey } from "../constants.js";

export const saveToStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const retrieveFromStorage = (key) => {
  const value = window.localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
};

export const removeFromStorage = (key) => {
  window.localStorage.removeItem(key);
};

export const saveToken = (tokenKey, token) => {
  saveToStorage(tokenKey, token);
};

export const getToken = (tokenKey) => {
  return retrieveFromStorage(tokenKey);
};

export const saveUser = (userKey, user) => {
  saveToStorage(userKey, user);
};

export const getUsername = () => {
  const user = retrieveFromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
};
