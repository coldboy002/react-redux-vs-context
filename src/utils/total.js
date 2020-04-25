export const totalCount = (cart) =>
  cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
