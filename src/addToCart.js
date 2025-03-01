import { getProductFromLs } from "./getProductFromLs";
import { showCart } from "./showCart";
import { showToast } from "./showToast";

getProductFromLs();
export const addToCart = (event, product_id, total_stock) => {
  let arrayLocalStorage = getProductFromLs();
  const currentCard = document.querySelector(`#card${product_id}`);
  if (!currentCard) {
    console.warn(`Card with id #card${product_id} not found`);
    return;
  }
  //   console.log(currentCard);

  let price = currentCard.querySelector(".discountPrice").innerText;
  let quantity = currentCard.querySelector(".productQuantity").innerText;
  //   console.log(price, quantity);
  price = price.replace("₨.", "");

  let existingProduct = arrayLocalStorage.find((product) => {
    return product.product_id === product_id;
  });

  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { product_id, price, quantity };
    arrayLocalStorage = arrayLocalStorage.map((curProd) => {
      return curProd.product_id === product_id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProducts", JSON.stringify(arrayLocalStorage));
    showCart(arrayLocalStorage);
    return;
  }
  if (existingProduct) {
    // alert("Product already in cart");
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);
  //   console.log(price);
  arrayLocalStorage.push({ product_id, price, quantity });
  localStorage.setItem("cartProducts", JSON.stringify(arrayLocalStorage));

  // Reset the quantity in the UI
  // quantity.innerText = 1;
  showCart(arrayLocalStorage);
  showToast(`Product id ${product_id} added successfully!`);
};
