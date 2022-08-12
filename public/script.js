console.log("hello");
const cartBtn = document.getElementById("cartBtn");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("closeBtn");

cartBtn.addEventListener("click", () => {
    cart.style.transform = "translateX(0)";
})

closeBtn.addEventListener("click", () => {
    cart.style.transform = "translateX(100rem)";
})