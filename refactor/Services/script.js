const serviceContent = document.getElementsByClassName("service-content");

function switchToServiceTab(index) {
    for (var i = 0; i < serviceContent.length; i++) {
        serviceContent[i].style.display = "none";
    }
    serviceContent[index].style.display = "block";
}