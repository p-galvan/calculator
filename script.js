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

// Updates calculator screen as user types numbers
function updateScreen(number) {
    let screen = document.querySelector("#screen");
    screen.textContent = number;
    
    return;
}

let FIRST_NUM = null;
let TEMP_ARRAY = [];
let SECOND_NUM = null;
let CALC_OPERATOR = "";

window.onload=function main() { 
    // Parameters of calculator functions

    // Functions to populate the display when clicking the digit buttons. Store the content of display...
    // ... in a variable for use in next step

        // Push each digit to an array as the user enters as digit
        let digits = document.querySelector(".digits");
        let screen = document.querySelector("#screen");
        let operators = document.querySelector(".operators");

        // Calls function to store numbers and update screen
        digits.addEventListener("click", punchNumber, false);

        // operators.addEventListener("click", (event) => {
            



        // });
        // When operator btn is pressed, join array -> string -> number for first string???

        // when OPERATE btn is pressed, same as above for second string, then call 
}


// Store the first and second numbers input by the user and then operate on them when the user presses = btn
// ... You should already have the code that can populate the display, so update the display with result once operate is called




