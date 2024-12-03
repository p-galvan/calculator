// Store current number, first and second numbers, operator and "state" of operator (pressed/raised)
let TEMP_ARRAY = [];
let FIRST_NUM = null;
let SECOND_NUM = null;
let CALC_OPERATOR = null;
let OPERATOR_PRESSED = false;
const DECIMAL_BTN = document.querySelector("#btn-dec");

// Basic math functions
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
        updateScreen("Not a number!");
        return;
    }
    return a / b;
}

// Calls apporporiate math function when called and returns result
function operate(a, b, operator) {
    let result;

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

    return result;
}

// Stores numbers on temp array screen as user types + returns number
function punchNumber(event) {
    // Clear screen if first number already saved
    if (!TEMP_ARRAY.length) {
        clearScreen();
    }
    // Disable "." button after it's pressed
    if (event.target.value === ".") {
        DECIMAL_BTN.disabled = true;
    }

    TEMP_ARRAY.push(event.target.value);
    let number = Number(TEMP_ARRAY.join(""));
    
    updateScreen(number);    
}

function punchOperators(event) {
    switch(event.target.id) {
        // Multiply current number * -1
        case "btn-neg":
            console.log(event.target.id);
            break;
        // Clear Calculator    
        case "btn-ac":
            clearCalc();
            break;
        // Operate and generate result    
        case "btn-operate":
            SECOND_NUM = Number(TEMP_ARRAY.join(""));
            calculate(CALC_OPERATOR);
            break;
        // Operator pressed  
        case "btn-add":
        case "btn-subt":
        case "btn-mult":
        case "btn-div":
            // FIRST_NUM doesn't exist --> save and wait for SECOND_NUM
            if (!FIRST_NUM) {
                FIRST_NUM = Number(TEMP_ARRAY.join(""));
                CALC_OPERATOR = event.target.value;
                DECIMAL_BTN.disabled = false;
                clearArray();
                
                break;
            }
            // SAVE SECOND_NUM and calculate result with current operator
            else if (FIRST_NUM) {
                SECOND_NUM = Number(TEMP_ARRAY.join(""));
                calculate(CALC_OPERATOR);
                 
                // Save the new operator for use in next operation
                CALC_OPERATOR = event.target.value;
                 
                break;
            }
    }
}

// Calls operate, updates screen, resets second_num and calc_operator
function calculate(CALC_OPERATOR) {
    if(!SECOND_NUM) {
        return;
    }
    else {
        // Calculate result        
        result = operate(FIRST_NUM, SECOND_NUM, CALC_OPERATOR);

        // Update screen and change state of operator pressed
        updateScreen(result);
        FIRST_NUM = result;
        SECOND_NUM = null;
        CALC_OPERATOR = null;
        DECIMAL_BTN.disabled = false;
        clearArray();

        return;
    }
}

// Resets all global variables and resets screen
function clearCalc() {
    clearArray();
    FIRST_NUM = null;
    SECOND_NUM = null;
    CALC_OPERATOR = null;
    
    let screen = document.querySelector("#screen");    
    screen.textContent = 0; 
}

// Clears screen to get ready for input of next number
function clearScreen() {
    let screen = document.querySelector("#screen");
    screen.textContent = "" ;
}

// Clears array from previous data
function clearArray() {
    TEMP_ARRAY = [];
}


// Updates calculator screen as user types numbers
function updateScreen (number) {
    let screen = document.querySelector("#screen");    
    screen.textContent = number;
}

window.onload=function main() { 
    // Push each digit to an array as the user enters as digit
    let digits = document.querySelector(".digits");
    let operators = document.querySelector(".operators");
    
    // Calls function to store numbers and update screen
    digits.addEventListener("click", punchNumber, false);
    operators.addEventListener("click", punchOperators, false);
}