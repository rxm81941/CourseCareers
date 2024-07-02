const resulText = document.getElementsByClassName("result-text")[0];

let storedValue = null;
let operator = null;

function onNumberPressed(number) {
    if (number === ".") {
        if (resulText.innerHTML.length === 0 || resulText.innerHTML.includes(".")) return
    }

    resulText.innerHTML += number.toString();
}

function canOperate() {
    return resulText.innerHTML.length >= 1;
}

function operate(number) {
    let result;

    switch (operator) {
        case "+":
            result = storedValue + number;
            break;

        case "-":
            result = storedValue - number;
            break;
            
        case "x":
            result = storedValue * number;
            break;

        case "/":
            result = storedValue / number;
            break;
    }

    resulText.innerHTML = result;
    storedValue = null;
    operator = null;
}

function onOperationPressed(operation) {
    const number = parseFloat(resulText.innerHTML);

    if (!canOperate()) return;

    if (operation === "=" && storedValue !== null) {
        return operate(number);
    } else if (operation === "c") {
        storedValue = null;
        operator = null;
    } else {
        operator = operation;
        storedValue = number;
    }

    resulText.innerHTML = "";
    
}