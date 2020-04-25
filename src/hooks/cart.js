import { useSelector, useDispatch } from "react-redux";
import { totalCount } from "../utils/total";

export default function useCart() {
  const cart = useSelector((state) => state.cart);
  const cartItemCount = totalCount(cart);
  const dispatch = useDispatch();

  return {
    cart,
    cartItemCount,
    dispatch,
  };
}
