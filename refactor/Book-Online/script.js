const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button")
const scriptURL = "https://script.google.com/macros/s/AKfycbx9TmWVDJU1u5hAXmf3cZ2Ux-frAHZ711PWRJaTpbzB_Zyil6ORvSHVv3HD4AseObxf/exec";

form.addEventListener('submit', e => {
    submitButton.disabled = true;
    e.preventDefault();
    let requestBody = new FormData(form);
    fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
        alert('Success!', response)
        submitButton.disabled = false
    })
    .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
    });
})