const addToCartButton = document.querySelector(".add-to-cart-button");
let addedItems = [];

addToCartButton.addEventListener("click", addItems);

function updateCart() {
  let itemCounter = localStorage.getItem("itemNumber");

  itemCounter = parseInt(itemCounter);

  if (itemCounter) {
    localStorage.setItem("itemNumber", itemCounter + 1);
    itemNumber.textContent = itemCounter + 1;
  } else {
    localStorage.setItem("itemNumber", 1);
    itemCounter.textContent = 1;
  }

  renderItem();
}

function renderItem() {
  let addedItems = [];
  addedItems = JSON.parse(localStorage.getItem(""));
}
