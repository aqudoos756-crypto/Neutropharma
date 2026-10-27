const greetButton = document.querySelector("#greet-button");
const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", () => {
  greeting.textContent = "Hello! Thanks for visiting.";
});
