export const showToast = (message) => {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top", // top or bottom
    position: "right", // left, center or right
    backgroundColor: "#4CAF50",
  }).showToast();
};
