import { quantityToogles } from "./quantityToogles";
import { addToCart } from "./addToCart";

// clone template
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const ShowProducts = (products) => {
  // console.log(products);
  products.forEach((curElem) => {
    const {
      product_id,
      name,
      description,
      category,
      price,
      discounted_price,
      percentage,
      total_stock,
      img,
      gender,
    } = curElem;

    const clone = document.importNode(productTemplate.content, true);

    clone.querySelector("#cardvalue").setAttribute("id", `card${product_id}`);
    // clone.querySelector(".category").textContent = category;
    // clone.querySelector(".off").textContent = `${percentage} %off`;
    clone.querySelector(".productImage").src = img;
    clone.querySelector(".productImage").alt = name;
    clone.querySelector(".productName").textContent = name;
    clone.querySelector(".discountPrice").textContent = `₨.${discounted_price}`;
    clone.querySelector(".actualPrice").textContent = `₨.${price}`;
    clone.querySelector(".productStock").textContent = total_stock;
    clone
      .querySelector(".quantityElement")
      .addEventListener("click", (event) => {
        quantityToogles(event, product_id, total_stock);
      });
    clone.querySelector(".addcart").addEventListener("click", (event) => {
      addToCart(event, product_id, total_stock);
    });
    productContainer.appendChild(clone);
  });
};
