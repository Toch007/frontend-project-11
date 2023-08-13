const form = document.getElementById("form");
const input = document.querySelector("input");
const errorImage = document.querySelector(".error-img");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value == "") {
    alerts();
    return (errorMessage.innerHTML = "Please provide a valid email");
  }

  if (!input.value.match(pattern)) {
    alerts();
    return (errorMessage.innerHTML = "Please provide a valid email");
  }
});

function alerts() {
  input.style.borderColor = "hsl(0, 93%, 68%)";
  errorImage.style.display = "block";
  errorMessage.style.display = "block";
}

function clearAlert() {
  input.style.borderColor = "hsla(0, 6%, 24%, 50%)";
  errorImage.style.display = "none";
  errorMessage.style.display = "none";
}

input.addEventListener("keypress", () => {
  clearAlert();
});
