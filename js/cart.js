const totalJackets = document.querySelector(".total-jackets");
const cartContainer = document.querySelector(".cart-container");

function addJackets() {
  let cartJackets = localStorage.getItem("jacketsAddedToCart");
  cartJackets = JSON.parse(cartJackets);

  totalJackets.innerHTML = `<h2 class="total-jackets-heading">(${cartJackets.length})</h2>`;

  cartContainer.innerHTML = "";

  for (let i = 0; i < cartJackets.length; i++) {
    cartContainer.innerHTML += `<div class= "jacket-specific"><div class="jacket-specific-image">
        <img src="${cartJackets[i].image}"/></div><div class="jacket-specific-info"><h3>${cartJackets[i].name}</h3>
        <p class="orange-price">${cartJackets[i].price}$</p></div></div>`;
  }
}

addJackets();
