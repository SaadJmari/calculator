//Variables
const numbersContainer = document.querySelector(".numbers")
const operationsContainer = document.querySelector(".operators")
const numbersBtn = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"]
const operationsBtn = ["+", "-", "*", "/", "="]
const display = document.querySelector(".display")
const btns = document.querySelectorAll("button")
let firstNum, secondNum, operator, result
let awaitingSecondNum = false;




//Creating the calculator's buttons
numbersBtn.forEach(num => {
    const button = document.createElement("button")
    button.classList.add("number")
    button.textContent = num
    numbersContainer.appendChild(button)
})

operationsBtn.forEach(op => {
    const buttons = document.createElement("button")
    buttons.classList.add("operations")
    buttons.textContent = op
    operationsContainer.appendChild(buttons)
})

//Operations
const sum = function (a, b) {
    return a + b
}

const substraction = function (a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const division = function (a, b) {
    if (b == 0) { return "error!" }
    else { return a / b }
}

//Hundle numbers display
numbersContainer.addEventListener('click', (event) => {
    let target = event.target
    if (display.textContent == "error!") {
        display.textContent = ""
    }
    if (target.textContent === "=") {
        return
    }
    if (target.classList == "number" && display.textContent.length < 15) {
        if (target.textContent == "." && display.textContent.indexOf(".") >= 0) {
            return
        }
        display.textContent += target.textContent
    }

})

//Chained operations
operationsContainer.addEventListener('click', (event) => {
    let target = event.target
    if (target.classList == "operations") {
        if (target.textContent == "=") {
            // Equals operation: calculate the result
            if (firstNum !== undefined && display.textContent !== "") {
                secondNum = Number(display.textContent)
                switch (operator) {
                    case '+':
                        result = sum(firstNum, secondNum)
                        break;
                    case '-':
                        result = substraction(firstNum, secondNum)
                        break;
                    case '*':
                        result = multiply(firstNum, secondNum)
                        break;
                    case '/':
                        result = division(firstNum, secondNum)
                        break;
                }
                display.textContent = result
                firstNum = undefined
                secondNum = undefined
                operator = undefined
                awaitingSecondNum = false
            }
        } else {
            // Operator clicked
            if (!awaitingSecondNum) { // Only calculate if a number was entered
                if (firstNum !== undefined) {
                    secondNum = Number(display.textContent);
                    switch (operator) {
                        case '+':
                            result = sum(firstNum, secondNum);
                            break;
                        case '-':
                            result = substraction(firstNum, secondNum);
                            break;
                        case '*':
                            result = multiply(firstNum, secondNum);
                            break;
                        case '/':
                            result = division(firstNum, secondNum);
                            break;
                    }
                    display.textContent = result;
                    firstNum = result;
                    secondNum = undefined;
                } else {
                    firstNum = Number(display.textContent);
                    display.textContent = "";
                    secondNum = undefined;
                }
            }
            operator = target.textContent;
            awaitingSecondNum = true; // Waiting for the next input
        }
    }
})