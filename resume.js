function switchIframe() {
   // Get the iframe element
var iframe = document.getElementById("resume");

// Check if the device is a mobile or desktop
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // If mobile, change the src of the iframe
   iframe.src = "https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX8_PHtMM&#x2F;view?embed";
} else {
   // If desktop, change the src of the iframe
   iframe.src = "https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFX0Cd6SCg&#x2F;view?embed";
}

}

// Call the function when the page is loaded
window.onload = switchIframe;

// Call the function when the window is resized
window.addEventListener("resize", switchIframe);
