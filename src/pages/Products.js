import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MainNavigation from "../components/MainNavigation";
import { addProductToCart } from "../actions/actions";
import "./Products.css";

const products = [
  { id: "p1", title: "Gaming Mouse", price: 29.99 },
  { id: "p2", title: "Harry Potter 3", price: 9.99 },
  { id: "p3", title: "Used plastic bottle", price: 0.99 },
  { id: "p4", title: "Half-dried plant", price: 2.99 },
];

const ProductsPage = ({ cartItemCount, addProductToCart }) => {
  return (
    <>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={() => addProductToCart(product)}>
                  Add to Cart
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
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
  };
};

ProductsPage.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { addProductToCart }
)(ProductsPage);
