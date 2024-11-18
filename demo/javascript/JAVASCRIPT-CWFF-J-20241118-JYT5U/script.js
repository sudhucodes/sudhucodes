const display = document.getElementById("output");

function clearDisplay() {
    display.textContent = "0";
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

function appendToDisplay(value) {
    if (display.textContent === "0" && value !== ".") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    try {
        const result = eval(display.textContent.replace("%", "/100"));
        display.textContent = result;
    } catch (error) {
        display.textContent = "Error";
    }
}
