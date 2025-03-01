export const quantityToogles = (event, product_id, total_stock) => {
  const currentCard = document.querySelector(`#card${product_id}`);
  // if (!currentCard) {
  //   console.warn(`Card with id #card${product_id} not found`);
  //   return;
  // }
  // console.log(currentCard);
  const decrementButton = currentCard.querySelector(".decrBtn");
  const incrementButton = currentCard.querySelector(".incrBtn");
  const productQuantity = currentCard.querySelector(".productQuantity");
  // console.log(productQuantity)
  let quantity = parseInt(productQuantity.getAttribute("dataQuantity")) || 1;
  // console.log(quantity);

  if (event.target.classList.contains("incrBtn")) {
    if (quantity < total_stock) {
      quantity += 1;
    } else if (quantity === total_stock) {
      quantity = total_stock;
    }
  }

  if (event.target.classList.contains("decrBtn")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  // console.log(quantity);
  productQuantity.setAttribute("dataQuantity", quantity);

  // Disable decrement button if quantity is less than or equal to 1
  if (quantity <= 1) {
    decrementButton.disabled = true;
  } else {
    decrementButton.disabled = false;
  }

  // Disable increment button if quantity is equal to total stock
  if (quantity >= total_stock) {
    incrementButton.disabled = true;
  } else {
    incrementButton.disabled = false;
  }

  return quantity;
};
