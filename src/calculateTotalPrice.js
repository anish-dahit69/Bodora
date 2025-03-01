import { getProductFromLs } from "./getProductFromLs";

export const calculateTotalPrice = () => {
  const cartItems = getProductFromLs();
  const initialTotalPrice = 0;

  const subTotal = cartItems.reduce((accum, curElem) => {
    const productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialTotalPrice);

  // return subTotal;
  // console.log(subTotal);
  const subTotalElement = (document.querySelector(".subtotalValue").textContent =
    subTotal);
  const shippingCharge = document.querySelector(".taxValue").textContent;
  // console.log(shippingCharge);
  const total = subTotal + parseInt(shippingCharge);
  document.querySelector(".totalValue").textContent = total;
};
