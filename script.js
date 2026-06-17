function checkNumber() {
    const number = Number(document.getElementById("numberInput").value);
    const result = document.getElementById("result");

    if (isNaN(number)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let message = "";

    if (number > 0) {
        message += "The number is Positive. ";
    } else if (number < 0) {
        message += "The number is Negative. ";
    } else {
        message += "The number is Zero. ";
    }

    if (number !== 0) {
        if (number % 2 === 0) {
            message += "It is Even.";
        } else {
            message += "It is Odd.";
        }
    }

    result.textContent = message;
}