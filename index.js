const originalPriceClass = document.querySelector(".original-price");
const promoPriceClass = document.querySelector(".promo-price");

const original_price = 169.99;

originalPriceClass.textContent = `$${original_price}`;
promoPriceClass.textContent = `$${original_price - 20}`;

window.addEventListener("resize", () => {
  const productImageClass = document.querySelector(".product-image");

  if (this.innerWidth >= 1440) {
    productImageClass.src = "./images/image-product-desktop.jpg";
  } else {
    productImageClass.src = "./images/image-product-mobile.jpg";
  }
});
