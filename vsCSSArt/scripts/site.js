function toggleCSS() {

    var toggleElementBackground = document.getElementById("phone-screen-background");
    var toggleElementForeground = document.getElementById("front-camera-circle");
    var toggeleElementFingerPrint = document.getElementById("bt-inv-center-toggle");
    //toggleElement.classList.toggle("phone-screen-background");

    if (toggleElementBackground.style.display === "none" && toggleElementForeground.style.display === "block") {
        toggleElementBackground.style.display = "block";
        toggleElementForeground.style.display = "none";
        toggeleElementFingerPrint.style.display = "none";
    } else {
        toggleElementBackground.style.display = "none";
        toggleElementForeground.style.display = "block";
        toggeleElementFingerPrint.style.display = "block";
    }
   
}