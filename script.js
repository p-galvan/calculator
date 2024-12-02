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

window.onload=function main() { 
    // Parameters of calculator functions
    let NUMBER_ONE = [];
    let NUMBER_TWO = 0;
    let CALC_OPERATOR = "";

    // Functions to populate the display when clicking the digit buttons. Store the content of display...
    // ... in a variable for use in next step

        // Push each digit to an array as the user enters as digit
        let digits = document.querySelector(".digits");

        digits.addEventListener("click", (event) => {
            // Store into array
            NUMBER_ONE = NUMBER_ONE.push(event.target.value);
            console.log(NUMBER_ONE);
            // Change display    

        });

        // When operator btn is pressed, join array -> string -> number for first string???

        // when OPERATE btn is pressed, same as above for second string, then call 
}



// Store the first and second numbers input by the user and then operate on them when the user presses = btn
// ... You should already have the code that can populate the display, so update the display with result once operate is called





