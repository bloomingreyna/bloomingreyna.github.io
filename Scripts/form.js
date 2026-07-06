const form = document.getElementById("custom-form");

const nameInput = document.getElementById("name");
const nameError = document.getElementById("request-valid-name");

const emailInput = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const emailError = document.getElementById("request-valid-email");
var emailValid = false;

const phoneInput = document.getElementById("phone");
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const phoneError = document.getElementById("request-valid-phone");
var phoneValid = false;

const cityInput = document.getElementById("city");
const cityError = document.getElementById("request-valid-city");

const textboxes = document.getElementsByClassName("textbox");
const checkboxes = document.getElementsByClassName("service-checkbox");
const checkboxError = document.getElementById("request-valid-service");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Submitted");
});

nameInput.addEventListener("change", (event) => {
    nameError.style.display = (nameInput.value === "") ? "block" : "none";
    nameInput.blur();
    if (nameInput.value != "") {
        emailInput.focus();
        window.scrollTo({
            left: document.getElementById("email-box").getBoundingClientRect().left + window.scrollX,
            top: document.getElementById("email-box").getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
        });
    }
});

emailInput.addEventListener("change", (event) => {
    emailValid = emailRegex.test(emailInput.value);
    emailError.textContent = (emailInput.value === "") ? "This field is required." : "Please enter a valid email address.";
    emailError.style.display = emailValid ? "none" : "block";
    emailInput.blur();
    if (emailValid) {
        phoneInput.focus();
        window.scrollTo({
            left: document.getElementById("phone-box").getBoundingClientRect().left + window.scrollX,
            top: document.getElementById("phone-box").getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
        });
    }
});

phoneInput.addEventListener("change", (event) => {
    phoneValid = phoneRegex.test(phoneInput.value);
    phoneError.textContent = (phoneInput.value === "") ? "This field is required." : "Please enter a valid phone number.";
    phoneError.style.display = phoneValid ? "none" : "block";
    phoneInput.blur();
    if (phoneValid) {
        cityInput.focus();
        window.scrollTo({
            left: document.getElementById("city-box").getBoundingClientRect().left + window.scrollX,
            top: document.getElementById("city-box").getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
        });
    }
    cityInput.focus();
});

cityInput.addEventListener("change", (event) => {
    cityError.style.display = (cityInput.value === "") ? "block" : "none";
    cityInput.blur();
    if (cityInput.value != "") {
        window.scrollTo({
            left: document.getElementById("service-box").getBoundingClientRect().left + window.scrollX,
            top: document.getElementById("service-box").getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
        });
    }
})

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", (event) => {
        checkboxError.style.display = checkboxSelected() ? "none" : "block";
    })
}

function textboxesFilled() {
    if (!emailValid || !phoneValid) {
        return false;
    }

    for (var i = 0; i < textboxes.length; i++) {
        if (textboxes[i].value === "") {
            return false;
        }
    }

    return true;
}

function checkboxSelected() {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    return false;
}

function onSubmitButtonClicked() {
    if (!textboxesFilled() || !checkboxSelected()) {
        alert("Submission failed");
    } else {
        form.requestSubmit();
    }
}