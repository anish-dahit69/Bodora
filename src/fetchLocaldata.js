import { getProductFromLs } from "./getProductFromLs";
// fetch price and quantity from local storage
export const fetchLocaldata = (product_id, discounted_price) => {
  let carProducts = getProductFromLs();

  let existingProduct = carProducts.find((curElem) => {
    return curElem.product_id === product_id;
  });
  let quantity = 1;
  let price = discounted_price;

  if (existingProduct) {
    price = existingProduct.price;
    quantity = existingProduct.quantity;
  }

  return { price, quantity };
};
