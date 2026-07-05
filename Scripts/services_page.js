const serviceDescriptions = document.getElementsByClassName("service-description-content");

function switchToService(elementId) {
    document.getElementById("service-description-intro").style.display = "none";
    for (var i = 0; i < serviceDescriptions.length; i++) {
        serviceDescriptions[i].style.display = "none";
    }
    document.getElementById(elementId).style.display = "block";
    document.getElementById("service-hidden-separator").style.display = "block";
    document.getElementById("service-description-button").style.display = "flex";
}