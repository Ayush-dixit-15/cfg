console.log("hello");
const cartBtn = document.getElementById("cartBtn");
const cart = document.getElementById("cart");
const closeBtn = document.getElementById("closeBtn");

const phoneCartBtn = document.getElementById("phoneCartBtn");
const phoneCart = document.getElementById("phoneCart");
const phoneCartCloseBtn = document.getElementById("phoneCartCloseBtn");

const phoneMenuBtn = document.getElementById("phoneMenuBtn");
const phoneMenu = document.getElementById("phoneMenu");
const phoneMenuCloseBtn = document.getElementById("phoneMenuCloseBtn");


cartBtn.addEventListener("click", () => {
    cart.style.transform = "translateX(0)";
})

closeBtn.addEventListener("click", () => {
    cart.style.transform = "translateX(100rem)";
})

phoneMenuBtn.addEventListener("click", () => {
    phoneMenu.style.transform = "translateX(0)";
})

phoneMenuCloseBtn.addEventListener("click", () => {
    phoneMenu.style.transform = "translateX(-100rem)";
})

phoneCartBtn.addEventListener("click", () => {
    phoneCart.style.transform = "translateX(0)";
})

phoneCartCloseBtn.addEventListener("click", () => {
    phoneCart.style.transform = "translateX(100rem)";
})