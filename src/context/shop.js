import { createContext } from "react";

export default createContext({
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
