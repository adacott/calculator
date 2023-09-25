let num1 = "", num2 = "", op_toggle = false, operator = "", result = "";
const nums = document.querySelectorAll(".input");
const operators = document.querySelectorAll(".operation");
const calculate = document.querySelector(".equals");
const screen = document.querySelector(".screen");
const back = document.querySelector(".back");
// const clear
// const decimal
console.log(screen.innerHTML);

function round(num) {
    num = Math.round(num * 100) / 100;
    return num;
}

function displayNum() {
    if (!op_toggle) {
        num1 += `${this.innerHTML}`;
        if (this.innerHTML == "+/-") {
            num1 = parseInt(num1) * -1;
        }
        if (this.innerHTML == "&lt;=") {
            console.log("You pressed back")
        }
        screen.innerHTML = `${num1}`;
    }
    else if (op_toggle) {
        num2 += `${this.innerHTML}`;
        if (this.innerHTML == "+/-") {
            num2 = parseInt(num2) * -1;
        }
        screen.innerHTML = `${num2}`;
    }
}

function selectOperator() {
    operators.forEach(op => op.classList.remove("pressed"));
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
            result = parseInt(num1) + parseInt(num2);
            screen.innerHTML = result;
            break;
        case "subtract":
            op_toggle = false;
            result = parseInt(num1) - parseInt(num2);
            screen.innerHTML = result;
            break;
        case "multiply":
            op_toggle = false;
            result = parseInt(num1) * parseInt(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
        case "divide":
            op_toggle = false;
            if (num1 == 0) {
                screen.innerHTML = "Rlly?";
                break;
            }
            result = parseInt(num1) / parseInt(num2);
            result = round(result);
            screen.innerHTML = result;
            break;
    }

    operators.forEach(op => op.classList.remove("pressed"));
    num1 = "", num2 = "", operator = "";
}


nums.forEach(numb => numb.addEventListener("click", displayNum));
operators.forEach(op => op.addEventListener("click", selectOperator));
calculate.addEventListener("click", calculateResult);

