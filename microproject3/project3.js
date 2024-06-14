const inputElement = document.getElementById("output");
const errorElement = document.getElementById("error");

function onButtonClick(event) {
  const value = event.target.innerText.trim();
  inputElement.value = inputElement.value + "" + value;
  hideError();
}

function onDelete() {
  if (inputElement.value) {
    inputElement.value = inputElement.value.slice(0, -1);
  }
  hideError();
}

function onReset() {
  inputElement.value = "";
  hideError();
}

function onEqual() {
  if (inputElement.value) {
    try {
      const input = inputElement.value.replace('X', '*');
      inputElement.value = Math.round(eval(input), 3);
    } catch (error) {
      errorElement.style.display = "block";
    }
  }
}

function hideError() {
  if (errorElement.style.display !== "none") {
    errorElement.style.display = "none";
  }
}