import { showCart } from "./showCart";

export const getProductFromLs = () => {
  let cartProducts = localStorage.getItem("cartProducts");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  showCart(cartProducts);
  return cartProducts;
};
