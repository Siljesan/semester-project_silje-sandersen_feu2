export const findIndex = (arr, item) => {
  return arr
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};
