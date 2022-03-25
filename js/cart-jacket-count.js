const jacketAmount = document.querySelector(".jacket-amount p");

function addJacketCounter() {
  let jacketCounter = localStorage.getItem("cartAmount");

  if (jacketCounter) {
    jacketAmount.textContent = jacketCounter;
  } else {
    jacketAmount.textContent = "";
  }
}

addJacketCounter();
