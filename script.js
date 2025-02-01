//Variables
const numbersContainer = document.querySelector(".numbers")
const operationsContainer = document.querySelector(".operators")
const numbersBtn = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="]
const operationsBtn = ["+", "-", "*", "/"]
const display = document.querySelector(".display")
let firstNum, secondNum


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

numbersContainer.addEventListener('click', (event) => {
    let target = event.target
    if (target.classList == "number" && display.textContent.length < 15) {
        if (target.textContent == "." && display.textContent.indexOf(".") >= 0) {
            return
        }
        display.textContent += target.textContent
    }
})

