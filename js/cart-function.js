/*Got some help from Marius Solheim, and was 
also inspired by this https://www.youtube.com/watch?v=YeFzkC2awTM and 
this https://vimeo.com/457504978/726aababe6 */

const addToCartButton = document.querySelector(".add-to-cart-button");

let cartArray = [];

addToCartButton.addEventListener("click", addNumberOfJackets);

//functions for adding and updating number of items in cart

function addNumberOfJackets() {
  let jacketCounter = localStorage.getItem("cartAmount");

  jacketCounter = parseInt(jacketCounter);

  if (jacketCounter) {
    localStorage.setItem("cartAmount", jacketCounter + 1);
    jacketAmount.textContent = jacketCounter + 1;
  } else {
    localStorage.setItem("cartAmount", 1);
    jacketAmount.textContent = 1;
  }

  addJacket();
  successPopup();
}

function addJacket() {
  let cartArray = [];
  cartArray = JSON.parse(localStorage.getItem("jacketsAddedToCart")) || [];

  cartArray.push(jacket);
  localStorage.setItem("jacketsAddedToCart", JSON.stringify(cartArray));
}

function successPopup() {
  try {
    jacketContainer.innerHTML += `<div class="popup"><h2>Jacket added to bag!</h2><div class="jacket-image"><img src="${jacket.image}" alt=${jacket.name}/></div> <div class="jacket-information">
    <p>${jacket.name}</p><p class="orange-price">${jacket.price}$</p><a class="cta cta-white" href="index.html">Shop more</a><a class="cta cta-white href="checkout-bag.html">Go to cart</a></div>
    `;
  } catch (error) {
    jacketContainer.innerHTML += alert("Jacket was not, try again");
  }
}
