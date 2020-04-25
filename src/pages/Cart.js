import React, { useContext } from "react";
import ShopContext from "../context/shop";

import MainNavigation from "../components/MainNavigation";
import "./Cart.css";

const CartPage = () => {
  const { cart, removeProductFromCart } = useContext(ShopContext);
  const cartItemCount = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
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
                <button onClick={() => removeProductFromCart(cartItem.id)}>
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
