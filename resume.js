function switchImage() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var img = document.getElementById("resumeImage");
        img.src = "Images/Mobile Resume of Chantelle Hicks.svg";
     }
     
    
}

// Call the function when the page is loaded
window.onload = switchImage;

// Call the function when the window is resized
window.addEventListener("resize", switchImage);
