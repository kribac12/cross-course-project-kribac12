const totalJackets = document.querySelector(".total-jackets");
const cartContainer = document.querySelector(".cart-container");
const removeJacketButton = document.querySelector(".cta-remove");

function addJackets() {
  let cartJackets = localStorage.getItem("jacketsAddedToCart");
  cartJackets = JSON.parse(cartJackets);

  totalJackets.innerHTML = `<h2 class="total-jackets-heading">Jackets in cart (${cartJackets.length})</h2>`;

  cartContainer.innerHTML = "";

  for (let i = 0; i < cartJackets.length; i++) {
    cartContainer.innerHTML += `<div class= "jacket-specific"><div class="jacket-specific-image">
        <img src="${cartJackets[i].image}"/></div><div class="jacket-specific-info"><h3>${cartJackets[i].name}</h3>
        <p class="orange-price">Price: ${cartJackets[i].price}$</p></div><div><button class="cta cta-remove" type="button">Remove</button></div>`;
  }
}

addJackets();

/* Tried to make this work 

const removeJacketButton = document.querySelector(".cta-remove");

function removeJackets() {
  for (let i = 0; i < removeJacketButton.length; i++) {
    const removeButton = removeJacketButton[i];
    removeButton.addEventListener("click", function (event) {
      const removeButtonClicked = event.target;
      console.log("clicked");
    });
  }
}

removeJackets(); */