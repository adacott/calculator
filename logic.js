let num1, num2, operator;

function operate() {

}

const keys = document.querySelectorAll("button");

console.log(keys);

keys.forEach(key => key.addEventListener("click", function (e) {
    console.log(this.innerHTML);
}))

// The code below will print the value of the key when pressed.
console.log(this.innerHTML);
console.log(this.innertext);