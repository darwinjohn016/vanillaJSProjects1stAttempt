// Button Elements
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equals]");

//Input Elements
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

// Event Listeners
clearBtn.addEventListener('click',clearAll);

deleteBtn.addEventListener('click',deleteOnce);

numberBtn.forEach(btn => btn.addEventListener('click',inputNumber));

operatorBtn.forEach(btn => btn.addEventListener('click',inputOperator));

equalsBtn.addEventListener('click',operation);

// Functions
function clearAll()
{
    previousOperand.value = "";
    currentOperand.value = "";
    operationString = "";
    boolean = true;
}

function deleteOnce()
{
    currentOperand.value = currentOperand.value.slice(0, currentOperand.value.length - 1);
}

function inputNumber(e)
{
    // Input Number
    let number = e.target.textContent;
    let negativeSign = e.target.value;

    // Negative Sign
    if(negativeSign === "-") currentOperand.value.includes(negativeSign) ? currentOperand.value = currentOperand.value.slice(1,currentOperand.value.length):
    currentOperand.value = negativeSign + currentOperand.value;
    
    // Decimal Point
    if(number === ".") currentOperand.value.includes(number) ? currentOperand.value:
    currentOperand.value = number + currentOperand.value;

    else displayCurrentOperand(number);
}   

// Storage to know what operation will be used;
let operationString = "";

// Used to add commas to string ex. 1,000 , 10,000 , 10,000,000
let nf = new Intl.NumberFormat(undefined,{ maximumFractionDigits: 15 });

// Restriction for the operator buttons
// Only one operator at a time. 
let boolean = true;

function inputOperator(e)
{
    let operator = e.target.textContent;
    if(previousOperand.value === "") displayPreviousOperand();

    let operations = ["+","-","*","/"];

    operations.forEach(operationSign =>
    {
        // Operator button same function with equal button if another operator is present
        if(previousOperand.value.includes(operationSign)) operation();
    })

    if(previousOperand.value !== "" && boolean === true)
    {   
        previousOperand.value += operator;
        boolean = false;
    } 

    if(operator === "+") operationString = "Addition";
    if(operator === "-") operationString = "Subtraction";
    if(operator === "*") operationString = "Multiplication";
    if(operator === "/") operationString = "Division";
}

function operation()
{
    if(previousOperand.value === "" || currentOperand.value === "") return;

    // Revert string without commas
    previousOperand.value = previousOperand.value.replaceAll(',', '');
    currentOperand.value = currentOperand.value.replaceAll(',', '');

    boolean = true;

    if(operationString === "Addition")
        previousOperand.value = parseFloat(previousOperand.value) 
        + parseFloat(currentOperand.value);

    if(operationString === "Subtraction")
        previousOperand.value = parseFloat(previousOperand.value) 
        - parseFloat(currentOperand.value);

    if(operationString === "Multiplication")
        previousOperand.value = parseFloat(previousOperand.value) 
        * parseFloat(currentOperand.value);

    if(operationString === "Division")
        previousOperand.value = parseFloat(previousOperand.value) 
        / parseFloat(currentOperand.value);

    previousOperand.value = nf.format(previousOperand.value);

    operationString = "";
    currentOperand.value = "";   
     
}

function displayCurrentOperand(number)
{
    currentOperand.value += number;
    currentOperand.value = currentOperand.value.replaceAll(',', '');
    currentOperand.value = nf.format(parseFloat(currentOperand.value));
}

function displayPreviousOperand()
{
    previousOperand.value = currentOperand.value;
    currentOperand.value = "";
}




    






