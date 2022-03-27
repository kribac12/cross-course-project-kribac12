const checkoutForm = document.querySelector(".checkoutForm");
const button = document.querySelector("button");

const successMessage = document.querySelector(".payment-success");

//form input and error variables
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

//function for validation
function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (checkLength(address.value, 2) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

//Success message
if (checkLength(fullName.value, 3) && checkLength(city.value, 2) && checkLength(address.value, 2)) {
  successMessage.style.display = "block";
}

checkoutForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
