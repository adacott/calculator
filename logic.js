let num1 = "", num2 = "", op_toggle = false, operator = "", result = "";
const nums = document.querySelectorAll(".input");
const operators = document.querySelectorAll(".operation");
const calculate = document.querySelector(".equals");
const screen = document.querySelector(".screen");
const back = document.querySelector(".back");
// const decimal
// const clear
console.log(screen.innerHTML);

function round(num) {
    num = Math.round(num * 1000) / 1000;
    return num;
}

function displayNum() {
    if (!op_toggle) {
        num1 += `${this.innerHTML}`;
        if (this.innerHTML == "+/-") {
            num1 = parseInt(num1) * -1;
        }
        screen.innerHTML = `${num1}`;
    }
    else if (op_toggle) {
        num2 += `${this.innerHTML}`;
        if (this.innerHTML == "+/-") {
            num2 = parseInt(num2) * -1;
        }
        screen.innerHTML = `${num2}`;
        operators.forEach(op => op.classList.remove("pressed"));
    }
}

function selectOperator() {
    operators.forEach(op => op.classList.remove("pressed"));

    // Allows chaining operations
    if (operator != "" && num2 != "") {
        calculateResult();
        num1 = result;
        result = "";
    }

    if (this.innerHTML.includes("+") && num1 != "") {
        operator = "add";
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("-") && num1 != "") {
        operator = "subtract";
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("*") && num1 != "") {
        operator = "multiply";
        this.classList.add("pressed");
    }
    else if (this.innerHTML.includes("/") && num1 != "") {
        operator = "divide";
        this.classList.add("pressed");
    }

    if (operator != "") {
        op_toggle = true;
    }
}

function calculateResult() {
    switch (operator) {
        case "add":
            op_toggle = false;
            result = parseFloat(num1) + parseFloat(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
        case "subtract":
            op_toggle = false;
            result = parseFloat(num1) - parseFloat(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
        case "multiply":
            op_toggle = false;
            result = parseFloat(num1) * parseFloat(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
        case "divide":
            op_toggle = false;
            if (num1 == 0) {
                screen.innerHTML = "Rlly?";
                break;
            }
            result = parseFloat(num1) / parseFloat(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
    }
    if (num1 == "") {
        screen.innerHTML = "0";
    }
    num1 = "", num2 = "", operator = "";
}

function backSpace() {
    if (screen.innerHTML.length == 1) {
        // str = screen.innerHTML;
        // str = str.slice(0, -1);
        // screen.innerHTML = `${str}`;
        screen.innerHTML = 0;
        if (!op_toggle) {
            num1 = "";
        }
        else if (op_toggle) {
            num2 = "";
        }
    }
    else if (screen.innerHTML.length > 1) {
        if (!op_toggle) {
            str = screen.innerHTML;
            str = str.slice(0, -1);
            screen.innerHTML = `${str}`;
            num1 = parseInt(str);
        }
        else if (op_toggle) {
            str = screen.innerHTML;
            str = str.slice(0, -1);
            screen.innerHTML = `${str}`;
            num2 = parseInt(str);
        }
    }

}


nums.forEach(numb => numb.addEventListener("click", displayNum));
operators.forEach(op => op.addEventListener("click", selectOperator));
calculate.addEventListener("click", calculateResult);
back.addEventListener("click", backSpace);

// TODO: Add support for decimal key, clear button, and percent button. 
// Prevent numbers from overflowing off the side of the calculator if someone spams numbers:
//  This can be done by detecting the length of the screen.innerHTML, and if its greater than some
//  threshold, n, remove all event listeners, or to add a conditional statement to my displayNum
//  function that will scan for length and prevent this. 
//
// If backspace is pressed when only 1 digit is shown, set screen to 0
//
// If the negative button is pressed on zero, or pressed before a number is pressed, do nothing,
// or at least don't return an error.