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
    if (this.innerHTML.includes("+")) {
        console.log("you're adding");
        operator = "add";
        console.log(`${operator}`);
    }
    else if (this.innerHTML.includes("-")) {
        console.log("you're subtracting");
        operator = "subtract";
        console.log(`${operator}`);
    }
    else if (this.innerHTML.includes("*")) {
        console.log("you're multiplying");
        operator = "multiply";
        console.log(`${operator}`);
    }
    else if (this.innerHTML.includes("/")) {
        console.log("you're dividing");
        operator = "divide";
        console.log(`${operator}`);
    }


    switch (operator) {
        case "add":
            op_toggle = true;

            break;
        case "subtract":
            op_toggle = true;

            break;
        case "multiply":
            op_toggle = true;

            break;
        case "divide":
            op_toggle = true;

            break;
    }
}

nums.forEach(numb => numb.addEventListener("click", displayKey));
operators.forEach(op => op.addEventListener("click", operate));

// The code below will print the value of the key when pressed.
// console.log(this.innerHTML);
// console.log(this.innertext);

