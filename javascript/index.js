let inputId = document.getElementById("inp");
let totalId = document.getElementById("tot");
let remainId = document.getElementById("rem");

inputId.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalId.innerText = inputId.value.length;
  remainId.innerText = inputId.getAttribute("maxlength") - inputId.value.length;
}
