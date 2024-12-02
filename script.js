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
    if (b === 0) {
        return "NOT A NUMBER!!";
    }
    
    return a / b;
}

// Calls apporporiate math function when called and returns result
function operate(a, b, operator) {
    let result = null;
    // Call appropriate function
    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break; 
        default:
            return console.log("error");    
    }
    // Round result
    result = Math.round(result * 100) / 100;

    return console.log(result);
}

// TEST
operate(10, 3, "/");

// Stores numbers on temp array screen as user types + returns number
function punchNumber(event) {
    // TODO: FIX multiple decimal points glitch
    TEMP_ARRAY.push(event.target.value);
    let number = Number(TEMP_ARRAY.join(""));
    
    updateScreen(number);
    
    return number;
}

function punchOperators(event) {

    switch(event.target.id) {
        case "btn-operate":
            // CALL Operate
            console.log(event.target.id);
            break;
        case "btn-neg":
            // multiply number times -1
            console.log(event.target.id);
            break;
        case "btn-ac":
            // Call clear
            clear();
            break;
        default:
            console.log(event.target.id);
    }

}

// Resets all global variables and resets screen
function clear() {
    TEMP_ARRAY = [];
    FIRST_NUM = null;
    SECOND_NUM = null;
    CALC_OPERATOR = null;
    
    let screen = document.querySelector("#screen");    
    screen.textContent = 0;
    
}

// Updates calculator screen as user types numbers
function updateScreen(number, SCREEN) {
    let screen = document.querySelector("#screen");    
    screen.textContent = number;
    
    return;
}

let TEMP_ARRAY = [];
let FIRST_NUM = null;
let SECOND_NUM = null;
let CALC_OPERATOR = null;

window.onload=function main() { 

    // Push each digit to an array as the user enters as digit
    let digits = document.querySelector(".digits");
    let operators = document.querySelector(".operators");
    
    // Calls function to store numbers and update screen
    digits.addEventListener("click", punchNumber, false);

    operators.addEventListener("click", punchOperators, false);
        
    
}


// Store the first and second numbers input by the user and then operate on them when the user presses = btn
// ... You should already have the code that can populate the display, so update the display with result once operate is called




