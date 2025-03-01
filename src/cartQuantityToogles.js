import { calculateTotalPrice } from "./calculateTotalPrice";
import { getProductFromLs } from "./getProductFromLs";

export const cartQuantityToogles = (
  event,
  product_id,
  discounted_price,
  total_stock
) => {
  const currentCard = document.querySelector(`#card${product_id}`);
  if (!currentCard) {
    console.warn(`Card with id #card${product_id} not found`);
  }
  const productPrice = currentCard.querySelector(".discountPrice");
  const productQuantity = currentCard.querySelector(".productQuantity");
  //   console.log(productQuantity,productPrice);

  let cartProducts = getProductFromLs();

  let quantity = 1;
  let localPrice = 0;

  const existingProduct = cartProducts.find((curElem) => {
    return curElem.product_id === product_id;
  });

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localPrice = existingProduct.price;
  } else {
    localPrice = discounted_price;
    discounted_price = discounted_price;
  }

  if (event.target.classList.contains("incrBtn")) {
    if (quantity < total_stock) {
      quantity += 1;
    } else if (quantity === total_stock) {
      quantity = total_stock;
      localPrice = discounted_price * quantity;
    }
  }

  if (event.target.classList.contains("decrBtn")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localPrice = Number(discounted_price * quantity);

  let updatedCart = { product_id, price: localPrice, quantity };
  updatedCart = cartProducts.map((curProd) => {
    return curProd.product_id === product_id ? updatedCart : curProd;
  });
  localStorage.setItem("cartProducts", JSON.stringify(updatedCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = localPrice;

  calculateTotalPrice();
};
