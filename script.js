// Store current number, first and second numbers, operator and "state" of operator (pressed/raised)

let TEMP_ARRAY = [];
let FIRST_NUM = null;
let SECOND_NUM = null;
let CALC_OPERATOR = null;
let OPERATOR_PRESSED = false;

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

    return result;
}

// Stores numbers on temp array screen as user types + returns number
function punchNumber(event) {
    // TODO: FIX multiple decimal points glitch
    if (!TEMP_ARRAY.length) {
        clearScreen();
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
            // Call clear
            clearCalc();
            break;
        // Operate and generate result    
        case "btn-operate":
            console.log("operating");
            SECOND_NUM = Number(TEMP_ARRAY.join(""));
            console.log("second num: " + SECOND_NUM);
            calculate(CALC_OPERATOR);
            break;
        // Operator pressed  
        case "btn-add":
        case "btn-subt":
        case "btn-mult":
        case "btn-div":
            if (!FIRST_NUM) {
                // Save first_num, clear temp array, save calc operator
                FIRST_NUM = Number(TEMP_ARRAY.join(""));
                CALC_OPERATOR = event.target.value;
                TEMP_ARRAY = [];
                
                break;
            }
            else if (FIRST_NUM) {
                console.log("case2");
                 SECOND_NUM = Number(TEMP_ARRAY.join(""));
                 calculate(CALC_OPERATOR);
                 CALC_OPERATOR = event.target.value;
                 //console.log("second num: "+ SECOND_NUM);
                 
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
        TEMP_ARRAY = [];

        return;
    }
}

// Resets all global variables and resets screen
function clearCalc() {
    TEMP_ARRAY = [];
    FIRST_NUM = null;
    SECOND_NUM = null;
    CALC_OPERATOR = null;
    OPERATOR_PRESSED = false;
    
    let screen = document.querySelector("#screen");    
    screen.textContent = 0; 
}

// Clears screen to get ready for input of next number
function clearScreen() {
    let screen = document.querySelector("#screen");
    screen.textContent = "" ;
}

// Updates calculator screen as user types numbers
function updateScreen (number) {
    let screen = document.querySelector("#screen");    
    screen.textContent = number;

    return;
}

window.onload=function main() { 
    // Push each digit to an array as the user enters as digit
    let digits = document.querySelector(".digits");
    let operators = document.querySelector(".operators");
    
    // Calls function to store numbers and update screen
    digits.addEventListener("click", punchNumber, false);
    operators.addEventListener("click", punchOperators, false);
}