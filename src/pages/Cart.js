import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MainNavigation from "../components/MainNavigation";
import { removeProductFromCart } from "../actions/actions";
import "./Cart.css";

const CartPage = ({ cartItems, cartItemCount, removeProductFromCart }) => {
  return (
    <>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="cart">
        {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cartItems.map((cartItem) => (
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
  };
};

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  cartItemCount: PropTypes.number.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { removeProductFromCart }
)(CartPage);
