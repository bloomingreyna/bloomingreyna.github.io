const bookButton = document.getElementById("book-button")

function bookHoverBehavior() {
    bookButton.style.backgroundColor = "rgb(20, 24, 50)";
}

function bookIdleBehavior() {
    bookButton.style.backgroundColor = "rgb(10, 22, 98)";
    bookButton.style.color = "rgb(239, 214, 52)";
}