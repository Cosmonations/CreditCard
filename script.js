const form = document.querySelector("form"),
    cardNumberInput = form.querySelector(".card-number"),
    expiryInput = form.querySelector(".expiry"),
    cvvInput = form.querySelector(".cvv"),
    cardNameInput = form.querySelector(".card-name");

// Card Number Validation 
function checkCardNumber() {
    const cardPattern = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
    if (!cardNumberInput.value.trim().match(cardPattern)) {
        return cardNumberInput.classList.add("invalid");
    }
    cardNumberInput.classList.remove("invalid");
}

// Expiry Date Validation 
function checkExpiry() {
    const expiryPattern = /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/;
    if (!expiryInput.value.trim().match(expiryPattern)) {
        return expiryInput.classList.add("invalid");
    }
    expiryInput.classList.remove("invalid");
}

// CVV Validation 
function checkCvv() {
    const cvvPattern = /^\d{3}$/;
    if (!cvvInput.value.trim().match(cvvPattern)) {
        return cvvInput.classList.add("invalid");
    }
    cvvInput.classList.remove("invalid");
}

// 4. Cardholder Name Validation 
function checkCardName() {
    if (cardNameInput.value.trim() === "") {
        return cardNameInput.classList.add("invalid");
    }
    cardNameInput.classList.remove("invalid");
}

// Calling Functions on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing form submission

    // Run all validation checks
    checkCardNumber();
    checkExpiry();
    checkCvv();
    checkCardName();

    // Attach live validation events
    cardNumberInput.addEventListener("keyup", checkCardNumber);
    expiryInput.addEventListener("keyup", checkExpiry);
    cvvInput.addEventListener("keyup", checkCvv);
    cardNameInput.addEventListener("keyup", checkCardName);

    // Check if ant input contains the 'invalid' class
    if (
        !cardNumberInput.classList.contains("invalid") &&
        !expiryInput.classList.contains("invalid") &&
        !cvvInput.classList.contains("invalid") &&
        !cardNameInput.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});