import { calculateTotalPrice } from "./calculateTotalPrice";
import { getProductFromLs } from "./getProductFromLs";
import { showCart } from "./showCart";
import { showToast } from "./showToast";

export const deleteCartItem = (event, product_id) => {
  let cartProducts = getProductFromLs();
  cartProducts = cartProducts.filter(
    (curElem) => curElem.product_id !== product_id
  );

  //update cart
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  //remove from cart

  const removeCart = document.querySelector(`#card${product_id}`);
  removeCart.remove();
  showToast(`Product id ${product_id} removed successfully!`);

  showCart(cartProducts);
  calculateTotalPrice();
};
