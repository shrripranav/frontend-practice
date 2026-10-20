const studentName = "Shrri Pranav";
const greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

function sayHello() {
    greeting.textContent = "Hello! I am " + studentName;
}

greetButton.addEventListener("click", sayHello);