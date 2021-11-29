export const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};
