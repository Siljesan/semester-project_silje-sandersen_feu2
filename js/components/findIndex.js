export const findIndex = (item) => {
  return item.id
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};
