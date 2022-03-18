const form = document.querySelector(".contactForm");

const successMessage = document.querySelector(".successMessage");

const button = document.querySelector("button");

//form input and error variables
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

//function for validation
function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 3) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 8) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (checkLength(message.value, 30) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  //Success message for message sent, disabling the button
  if (checkLength(fullName.value, 3) && checkLength(subject.value, 8) && checkLength(message.value, 30) && validateEmail(email.value)) {
    successMessage.style.display = "block";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
