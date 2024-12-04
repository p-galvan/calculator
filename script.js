// Store current number, first and second numbers, operator and "state" of operator (pressed/raised)
let TEMP_ARRAY = [0];
let FIRST_NUM = null;
let SECOND_NUM = null;
let CALC_OPERATOR = null;
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
        return console.log("Not a number!");
    }
    else {
        return a / b;
    }
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
    }
    
    return roundNumber(result);
}

// Rounds number to two decimal places
function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

// Stores numbers on temp array screen as user types + returns number
function punchNumber(event) {
    // Prevent non-buttons within digits from firing off action
    if (event.target.className != "btn") {
        return;
    }
    // Disable "." button after it's pressed
    if (event.target.value === ".") {
        toggleDecimal();
    }

    TEMP_ARRAY.push(event.target.value);
    let number = parseFloat(TEMP_ARRAY.join(""));
    console.log(TEMP_ARRAY);

    updateScreen(number);    
}

function punchOperators(event) {
    switch(event.target.id) {
        // Multiply current number * -1
        case "btn-neg":
            toNegative();
            break;
        // Clear Calculator    
        case "btn-ac":
            clearCalc();
            break;
        // Operate and generate result    
        case "btn-operate":
            // If user presses "=" w/o entering operator and/or second number
            if (!CALC_OPERATOR || (TEMP_ARRAY.length === 0)) {
                console.log("cheecky!");
                return;
            }

            SECOND_NUM = parseFloat(TEMP_ARRAY.join(""));
            calculate();
            break;
        // Operator pressed  
        case "btn-add":
        case "btn-subt":
        case "btn-mult":
        case "btn-div":
            // FIRST_NUM doesn't exist --> save and wait for SECOND_NUM
            if (!FIRST_NUM) {
                FIRST_NUM = parseFloat(TEMP_ARRAY.join(""));
                CALC_OPERATOR = event.target.value;
                toggleDecimal();
                clearArray();
                
                break;
            }
            // SAVE SECOND_NUM and calculate result with current operator
            else if (FIRST_NUM) {
                SECOND_NUM = parseFloat(TEMP_ARRAY.join(""));
                calculate();
                 
                // Save the new operator for use in next operation
                CALC_OPERATOR = event.target.value;
                 
                break;
            }
    }
}

// Calls operate, updates screen, resets second_num and calc_operator
function calculate() {    
    // Validate second number
    if(SECOND_NUM === null) {
        return;
    }
    
    if(SECOND_NUM === 0) {
        SECOND_NUM = 0;
    }
    // Calculate result  
    result = operate(FIRST_NUM, SECOND_NUM, CALC_OPERATOR);

    // Update screen and change state of operator pressed
    clearArray();
    updateScreen(result);
    FIRST_NUM = result;
    SECOND_NUM = null;
    CALC_OPERATOR = null;
    DECIMAL_BTN.disabled = false;
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
    TEMP_ARRAY = [0];
}

// Toggle decimal button on/off
function toggleDecimal() {
    if (DECIMAL_BTN.disabled === true) {
        DECIMAL_BTN.disabled = false;
    }
    else if (DECIMAL_BTN.disabled === false) {
        DECIMAL_BTN.disabled = true;
    }
}

// Multiplies current number times -1 and assigns to FIRST_NUM/SECOND_NUM
function toNegative() {
    // Save FIRST_NUM, multiply by -1 and update screen
    let number = parseFloat(TEMP_ARRAY.join(""));
    number *= -1;

    updateScreen(number);
    console.log(number);
    console.log(typeof(number));

    TEMP_ARRAY.push(number);

    //return !FIRST_NUM ? FIRST_NUM = number : SECOND_NUM = number;
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