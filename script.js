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

operate(10, 3, "/");

// Parameters of calculator functions
let numberOne = 0;
let numberTwo = 0;
let calcOperator = "";




