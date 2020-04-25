import React from "react";
import useCart from "../hooks/cart";

import MainNavigation from "../components/MainNavigation";
import { addProductToCart } from "../actions/actions";
import "./Products.css";

const products = [
  { id: "p1", title: "Gaming Mouse", price: 29.99 },
  { id: "p2", title: "Harry Potter 3", price: 9.99 },
  { id: "p3", title: "Used plastic bottle", price: 0.99 },
  { id: "p4", title: "Half-dried plant", price: 2.99 },
];

const ProductsPage = () => {
  const { cartItemCount, dispatch } = useCart();
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
                <button onClick={() => dispatch(addProductToCart(product))}>
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

export default ProductsPage;
