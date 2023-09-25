let num1 = 0, num2 = 0, op_toggle = false, operator = "";
const nums = document.querySelectorAll(".input");
const operators = document.querySelectorAll(".operation");
const calculate = document.querySelector(".equals");
const screen = document.querySelector(".screen");
console.log(screen.innerHTML);

function displayKey() {
    screen.innerHTML = `${this.innerHTML}`;
    if (!op_toggle) {
        num1 = this.innerHTML;
    }
    else if (op_toggle) {
        screen.innerHTML = `${this.innerHTML}`;
        num2 = this.innerHTML;
        console.log(num2);
        console.log(num1);
    }
}

function selectOperator() {
    operators.forEach(op => op.classList.remove("pressed"));
    if (this.innerHTML.includes("+")) {
        operator = "add";
        // console.log(`${operator}`);
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("-")) {
        operator = "subtract";
        // console.log(`${operator}`);
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("*")) {
        operator = "multiply";
        // console.log(`${operator}`);
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("/")) {
        operator = "divide";
        // console.log(`${operator}`);
        this.classList.add("pressed");
    }

    if (operator != "") {
        op_toggle = true;
    }
}

function calculateResult() {
    switch (operator) {
        case "add":
            op_toggle = true;
            result = parseInt(num1) + parseInt(num2);
            screen.innerHTML = result;
            console.log(num1);
            console.log(num2);
            break;
        case "subtract":
            op_toggle = true;
            result = parseInt(num1) + parseInt(num2);
            screen.innerHTML = result;
            break;
        case "multiply":
            op_toggle = true;
            result = parseInt(num1) + parseInt(num2);
            screen.innerHTML = result;
            break;
        case "divide":
            op_toggle = true;
            result = parseInt(num1) + parseInt(num2);
            screen.innerHTML = result;
            break;
    }
    operators.forEach(op => op.classList.remove("pressed"));
    num1 = 0, num2 = 0;
}

nums.forEach(numb => numb.addEventListener("click", displayKey));
operators.forEach(op => op.addEventListener("click", selectOperator));
calculate.addEventListener("click", calculateResult);
// The code below will print the value of the key when pressed.
// console.log(this.innerHTML);
// console.log(this.innertext);

