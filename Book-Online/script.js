const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button")
const scriptURL = "https://script.google.com/macros/s/AKfycbx9TmWVDJU1u5hAXmf3cZ2Ux-frAHZ711PWRJaTpbzB_Zyil6ORvSHVv3HD4AseObxf/exec";

const firstName = document.getElementById("client-first-name-input");
const firstNameError = document.getElementById("first-name-error");
var validFirstName = false;

const lastName = document.getElementById("client-last-name-input");
const lastNameError = document.getElementById("last-name-error");
var validLastName = false;

const email = document.getElementById("client-email-input");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailError = document.getElementById("email-error");
var validEmail = false;

const phone = document.getElementById("client-phone-number-input");
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const phoneError = document.getElementById("phone-number-error");
var validPhone = true;

const address = document.getElementById("client-address-input");
const addressError = document.getElementById("address-error");
var validAddress = false;

const serviceCheckboxes = document.getElementsByClassName("service-check");
const servicesValue = document.getElementById("services-value");
const serviceErrorMsg = document.getElementById("service-error");
var serviceSelected = false;

const serviceList = document.getElementById("service-list");

const prefersPhone = document.getElementById("prefers-phone");
const prefersPhoneValue = document.getElementById("prefers-phone-value");

const errorBox = document.getElementById("error-box");
const errorFields = document.getElementById("error-fields");

form.addEventListener('submit', e => {
    submitButton.disabled = true;
    e.preventDefault();

    if (!validFirstName || !validLastName || !validEmail || !validPhone || !validAddress || !serviceSelected) {
        errorBox.style.display = "block";
        errorFields.innerHTML = `
            ${!validFirstName ? "<li>First Name</li>" : ""}
            ${!validLastName ? "<li>Last Name</li>" : ""}
            ${!validEmail ? "<li>Email</li>" : ""}
            ${!validPhone ? "<li>Phone Number</li>" : ""}
            ${!validAddress ? "<li>Address</li>" : ""}
            ${!serviceSelected ? "<li>Services</li>" : ""}
        `;
        submitButton.disabled = false;
        return;
    }
    errorBox.style.display = "none";

    let requestBody = new FormData(form);
    submitButton.innerHTML = "SUBMITTING..."
    submitButton.style.fontSize = "1rem";
    fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
        alert('Booking form submitted! Please check your email for confirmation.\n\nDismiss this message to go back to the home page.', response);
        window.location.replace("/docs/index.html");
    })
    .catch(error => {
        alert('Error!', error.message);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = "SUBMIT";
        submitButton.style.fontSize = "1.5rem";
    });
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (event.target.nodeName === "INPUT") {
            event.target.blur();
        }
    }
})

firstName.addEventListener("change", (event) => {
    firstNameError.style.display = "none";
    validFirstName = true;
    if (firstName.value === "") {
        firstNameError.style.display = "block";
        validFirstName = false;
    }
});

lastName.addEventListener("change", (event) => {
    lastNameError.style.display = "none";
    validLastName = true;
    if (lastName.value === "") {
        lastNameError.style.display = "block";
        validLastName = false;
    }
});

email.addEventListener("change", (event) => {
    emailError.style.display = "none";
    validEmail = true;
    if (!emailRegex.test(email.value) && email.value !== "") {
        emailError.innerHTML = `<img class="error-img" src="../General/Images/alert-error.svg">Invalid email address.`;
        emailError.style.display = "block";
        validEmail = false;
    } else if (email.value === "") {
        emailError.innerHTML = `<img class="error-img" src="../General/Images/alert-error.svg">This field is required.`;
    }
});

phone.addEventListener("change", (event) => {
    phoneError.style.display = "none";
    validPhone = true;
    if (!phoneRegex.test(phone.value) && phone.value !== "") {
        phoneError.innerHTML = `<img class="error-img" src="../General/Images/alert-error.svg">Invalid phone number.`;
        phoneError.style.display = "block";
        validPhone = false;
    }
});

address.addEventListener("change", (event) => {
    addressError.style.display = "none";
    validAddress = true;
    if (address.value === "") {
        addressError.style.display = "block";
        validAddress = false;
    }
});

for (var i = 0; i < serviceCheckboxes.length; i++) {
    serviceCheckboxes[i].addEventListener("change", function(event) {
        var str = "";
        var serviceListInnerHTML = `<li style="color: grey;"><i>No services selected...</i></li>`;
        var serviceAdded = false;
        serviceSelected = false;
        for (var j = 0; j < serviceCheckboxes.length; j++) {
            if (serviceCheckboxes[j].checked) {
                str = str + (serviceAdded ? ", " : "") + serviceCheckboxes[j].value;
                if (!serviceAdded) {
                    serviceListInnerHTML = ``;
                }
                serviceAdded = true;
                serviceSelected = true;

                serviceListInnerHTML = serviceListInnerHTML + `<li>${serviceCheckboxes[j].value}</li>`;
            }
        }
        servicesValue.value = str;
        serviceList.innerHTML = serviceListInnerHTML;

        if (!serviceSelected) {
            serviceErrorMsg.style.display = "block";
        } else {
            serviceErrorMsg.style.display = "none";
        }
    });
}

prefersPhone.addEventListener("change", (event) => {
    prefersPhoneValue.value = prefersPhone.checked ? "Yes" : "No";
})