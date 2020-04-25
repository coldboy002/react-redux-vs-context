export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODCUT_FROM_CART";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};
