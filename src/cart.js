import { calculateTotalPrice } from "./calculateTotalPrice";
import { cartQuantityToogles } from "./cartQuantityToogles";
import { deleteCartItem } from "./deleteCartItem";
import { fetchLocaldata } from "./fetchLocaldata";
import { getProductFromLs } from "./getProductFromLs";
import products from "/api/products.json";
// console.log(products);
let localcart = getProductFromLs();
// console.log(localcart);
let localItems = products.filter((curElem) => {
  return localcart.some((curProd) => {
    return curProd.product_id === curElem.product_id;
  });
});
// console.log(localItems);
const cartContainer = document.querySelector("#productcontainer");
const cartClone = document.querySelector("#productTemplate");

export const displayProducts = () => {
  localItems.forEach((curElem) => {
    const { product_id, name, discounted_price, img, total_stock } = curElem;

    const clone = document.importNode(cartClone.content, true);
    // fetch price and quantity from local storage
    let lsProduct = fetchLocaldata(product_id, discounted_price);
    clone.querySelector("#cardvalue").setAttribute("id", `card${product_id}`);
    clone.querySelector(".productImage").src = img;
    clone.querySelector(".productImage").alt = name;
    clone.querySelector(".productName").textContent = name;
    clone.querySelector(".discountPrice").textContent = lsProduct.price;
    clone.querySelector(".productQuantity").textContent = lsProduct.quantity;
    clone
      .querySelector(".quantityElement")
      .addEventListener("click", (event) => {
        cartQuantityToogles(event, product_id,discounted_price, total_stock);
      });
    clone.querySelector(".delete").addEventListener("click", (event) => {
      deleteCartItem(event, product_id);
    });
    cartContainer.appendChild(clone);
  });
};
// to display products in the cart
displayProducts();

// calculate total price

calculateTotalPrice();