let num1 = 0, num2 = 0, op_toggle = false, operator = "";
const nums = document.querySelectorAll(".input");
const operators = document.querySelectorAll(".operation");
const screen = document.querySelector(".screen");
console.log(screen.innerHTML);

function displayKey() {
    screen.innerHTML = `${this.innerHTML}`;
    num1 = this.innerHTML;
    console.log(num1);
    // if (op_toggle) {
    //     screen.innerHTML = `${this.innerHTML}`;
    //     num2 = this.innerHTML;
    //     console.log(num2);
    // }
}

function operate() {
    switch (operator) {
        case "add":
            break;
        case "subtract":
            break;
        case "multiply":
            break;
        case "divide":
            break;
    }
}

nums.forEach(numb => numb.addEventListener("click", displayKey));
operators.forEach(op => op.addEventListener("click", operate));

// The code below will print the value of the key when pressed.
// console.log(this.innerHTML);
// console.log(this.innertext);

