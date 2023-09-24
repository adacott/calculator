let num1, num2, operator;
const keys = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
console.log(screen.innerHTML);

function displayKey() {
    console.log(this.innerHTML)
    screen.innerHTML = `${this.innerHTML}`;
}

function operate() {

}

keys.forEach(key => key.addEventListener("click", displayKey));

// The code below will print the value of the key when pressed.
// console.log(this.innerHTML);
// console.log(this.innertext);

