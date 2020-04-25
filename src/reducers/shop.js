export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProduct = (state, product) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return updatedCart;
};

const removeProduct = (state, productId) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return updatedCart;
};

export default function shopReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action.product);
    case REMOVE_PRODUCT:
      return removeProduct(state, action.productId);
    default:
      return state;
  }
}
