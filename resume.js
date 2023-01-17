function switchImage() {
    // Get the current screen size
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// Select the SVG image element
var img = document.getElementById("resumeImage");

// Check the screen size and swap the image source accordingly
if (screenWidth < 480 || screenHeight < 480) {
  img.src = "Images/Mobile Resume of Chantelle Hicks.svg";
} else {
  img.src = "Images/Resume of Chantelle Hicks.svg";
}

}

// Call the function when the page is loaded
window.onload = switchImage;

// Call the function when the window is resized
window.addEventListener("resize", switchImage);
