/*Got some help from Marius Solheim*/

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
}

function addJacket() {
  let cartArray = [];
  cartArray = JSON.parse(localStorage.getItem("jacketsAddedToCart")) || [];

  cartArray.push(jacket);
  localStorage.setItem("jacketsAddedToCart", JSON.stringify(cartArray));
}
