const serviceContent = document.getElementsByClassName("service-content");
const serviceTabButtons = document.getElementsByClassName("service-tab-button");

function switchToServiceTab(index, button) {
    for (var i = 0; i < serviceContent.length; i++) {
        serviceContent[i].style.display = "none";
        
    }

    for (var i = 0; i < serviceTabButtons.length; i++) {
        serviceTabButtons[i].style.color = "white";
    }

    serviceContent[index].style.display = "block";
    button.style.color = "rgb(239, 214, 52)";
}