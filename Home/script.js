const introTextboxes = document.getElementById("intro-textboxes");
const altCallToAction = document.getElementById("call-to-action-row");
const introImage = document.getElementById("intro-image");

const aspectRatioQuery = window.matchMedia("(max-aspect-ratio: 5/4)");

window.addEventListener("resize", resizeIntroImage);
window.addEventListener("load", resizeIntroImage);

function resizeIntroImage() {
    if (!aspectRatioQuery.matches) {
        introImage.style.height = `${introTextboxes.getBoundingClientRect().height}px`;
    } else {
        introImage.style.height = `${altCallToAction.getBoundingClientRect().height}px`;
    }
}