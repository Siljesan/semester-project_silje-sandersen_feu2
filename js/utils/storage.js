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
