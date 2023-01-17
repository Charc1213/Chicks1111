function switchIframe() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        document.getElementById("video-iframe").src = "https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX8_PHtMM&#x2F;view?embed";
    } else {
        document.getElementById("video-iframe").src = "https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX0Cd6SCg&#x2F;view?embed";
    }
}

// Call the function when the page is loaded
window.onload = switchIframe;

// Call the function when the window is resized
window.addEventListener("resize", switchIframe);
