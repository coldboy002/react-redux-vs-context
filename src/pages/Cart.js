import React from "react";

import MainNavigation from "../components/MainNavigation";
import { removeProductFromCart } from "../actions/actions";
import "./Cart.css";
import useCart from "../hooks/cart";

const CartPage = () => {
  const { cart, cartItemCount, dispatch } = useCart();
  return (
    <>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="cart">
        {cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={() => dispatch(removeProductFromCart(cartItem.id))}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CartPage;
