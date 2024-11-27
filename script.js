// Script for calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {

    // Call appropriate function
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break; 
        default:
            return console.log("error");    
    }

}

// Parameters of calculator functions
let numberOne = 0;
let numberTwo = 0;
let calcOperator = "";



// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.