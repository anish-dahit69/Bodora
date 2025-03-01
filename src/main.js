import "remixicon/fonts/remixicon.css";
import products from "/api/products.json";
import { ShowProducts } from "./showProducts";
// console.log(products);
const menuIcon = document.querySelector(".ri-menu-4-fill");
const closeIcon = document.querySelector(".ri-close-line");
const navLists = document.querySelector(".nav-lists");

menuIcon.addEventListener("click", () => {
  navLists.classList.add("active"); // Show menu
  menuIcon.style.display = "none";
  closeIcon.style.display = "inline-block";
});

closeIcon.addEventListener("click", () => {
  navLists.classList.remove("active"); // Hide menu
  closeIcon.style.display = "none";
  menuIcon.style.display = "inline-block";
});

// show product in the UI
ShowProducts(products);
