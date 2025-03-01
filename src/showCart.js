const cartValues = document.querySelectorAll(".ri-shopping-cart-line");

export const showCart = (cartProducts) => {
  cartValues.forEach((cartValue) => {
    cartValue.textContent = cartProducts.length || 0;
  });
};
