import React, { useReducer } from "react";
import shopReducer from "../reducers/shop";
import { addProduct, removeProduct } from "../actions/actions";
import ShopContext from "./shop";

const initialState = [];
const GlobalState = (props) => {
  const [cart, dispatch] = useReducer(shopReducer, initialState);

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch(addProduct(product));
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch(removeProduct(productId));
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
