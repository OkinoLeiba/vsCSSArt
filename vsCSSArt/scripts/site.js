function toggleCSS() {

    //var toggleElementBackground = document.getElementById("phone-screen-background");
    var toggleElementForeground = document.getElementById("front-camera-circle");
    var toggeleElementFingerPrint = document.getElementById("bt-inv-center-toggle");
    var toggeleElementLandingScreen = document.getElementById("bg-group-landing_screen");
    //toggleElement.classList.toggle("phone-screen-background");

    if (toggeleElementLandingScreen.style.display === "none" && toggleElementForeground.style.display === "block") {
        //toggleElementBackground.style.display = "block";
        toggleElementForeground.style.display = "none";
        toggeleElementFingerPrint.style.display = "none";
        toggeleElementLandingScreen.style.display = "block";
    } else {
        //toggleElementBackground.style.display = "none";
        toggleElementForeground.style.display = "block";
        toggeleElementFingerPrint.style.display = "block";
        toggeleElementLandingScreen.style.display = "none";
    }
   
}