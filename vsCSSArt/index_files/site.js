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

setInterval(clock, 6000);

function clock() {
    const date = new Date();
    let current_time = date.toString().substring(16, 21);
    document.getElementById("left-logo-time").innerHTML = current_time;
}


(function () {
    const queryClass = document.getElementById("app-img-container1"); 
    queryClass.setAttribute("src", "img/google__g__logo.png");
})();


// create row container for apps
for (var i = 0; i < 1; i++) {
    const appRowContainer = document.createElement("div");
    appRowContainer.setAttribute("id", "app-row-container" + (i+1));
}

document.getElementById("search-bar-apps").after(appRowContainer);

// data struct to retain file location for app image
var baseImageFileLocation = "./index_files";
const imageSRCArrayy = [];


const createAppContainers = () => {
    for (var j = 0; j < 4; j++) {
        // create column container for apps
        const appColumnContainer = document.createElement("div");
        appColumnContainer.setAttribute("id", "app-column-container" + (j + 1));
        document.getElementById("app-column-container1").appendChild(appColumnContainer); 


        const appSearchContainer = document.createElement("div");
        appSearchContainer.setAttribute("id", "app-container-search-bar" + (j + 1));
        document.getElementById("app-column-container" + (j + 1)).appendChild("appSearchContainer");

        // TODO: review
        for (var p = 0; p < 4; p++) {
            const appImage = document.createElement("img");
            appImage.setAttribute("id", "app-img-container" + (p + j + 1));
            appImage.setAttribute("src", "");
            appImage.setAttribute("height", "56");
            appImage.setAttribute("width", "56");
            document.getElementById("appSearchContainer" + (p + j + 1));
        }
   
    

        const appRowText = document.createElement("div");
        appRowText.setAttribute("id", "app-row-text-container" + (j + 1));
        document.getElementById("app-column-container" + (j + 1)).after(appRowText);


    }

    const appImage = document.createElement("img");
}


