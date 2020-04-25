import React, { useReducer } from "react";
import shopReducer, { ADD_PRODUCT, REMOVE_PRODUCT } from "../reducers/shop";

import ShopContext from "./shop";

const GlobalState = (props) => {
  const [cart, dispatch] = useReducer(shopReducer, []);

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
