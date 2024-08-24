function toggleCSS() {

    //var toggleElementBackground = document.getElementById("phone-screen-background");
    var toggleElementForeground = document.getElementById("front-camera-circle");
    var toggeleElementFingerPrint = document.getElementById("bt-inv-center-toggle");
    var toggeleElementLandingScreen = document.getElementById("bg-group-landing_screen");
    //toggleElement.classList.toggle("phone-screen-background");

    if (toggeleElementLandingScreen.style.display === "none" && toggleElementForeground.style.display === "flex") {
        //toggleElementBackground.style.display = "block";
        toggleElementForeground.style.display = "none";
        toggeleElementFingerPrint.style.display = "none";
        toggeleElementLandingScreen.style.display = "flex";
        toggeleElementLandingScreen.style.flexDirection = "column";
    } else {
        //toggleElementBackground.style.display = "none";
        toggleElementForeground.style.display = "flex";
        toggeleElementFingerPrint.style.display = "flex";
        toggleElementForeground.style.flexDirection = "column";
        toggeleElementFingerPrint.style.flexDirection = "column";
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
    const queryClass = document.getElementsByClassName("app-img"); 
    // queryClass.setAttribute("src", "img/google__g__logo.png");
})();


// create row container for apps
for (var i = 0; i < 1; i++) {
    const appRowContainer = document.createElement("div");
    appRowContainer.setAttribute("id", "app-row-container" + (i+1));
}

// document.getElementById("search-bar-apps").after(appRowContainer);

// data struct to retain file location for app image
var baseImageFileLocation = "./img";
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

let randomColor = ['#00FFFF', '#000000', '#0000FF', '#FF00FF', '#808080', '#008000', '#00FF00', '#800000', '#000080', '#808000', '#800080', '#FF0000', '#C0C0C0', '#008080', '#FFFFFF', '#FFFF00', '#F0F8FF', '#FAEBD7', '#00FFFF', '#7FFFD4', '#F0FFFF', '#F5F5DC', '#FFE4C4', '#000000', '#FFEBCD', '#0000FF', '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#556B2F', '#FF8C00', '#9932CC', '#8B0000', '#E9967A', '#8FBC8F', '#483D8B', '#2F4F4F', '#00CED1', '#9400D3', '#FF1493', '#00BFFF', '#696969', '#1E90FF', '#B22222', '#FFFAF0', '#228B22', '#FF00FF', '#DCDCDC', '#F8F8FF', '#FFD700', '#DAA520', '#7F7F7F', '#008000', '#ADFF2F', '#F0FFF0', '#FF69B4', '#CD5C5C', '#4B0082', '#FFFFF0', '#F0E68C', '#E6E6FA', '#FFF0F5', '#7CFC00', '#FFFACD', '#ADD8E6', '#F08080', '#E0FFFF', '#FAFAD2', '#90EE90', '#D3D3D3', '#FFB6C1', '#FFA07A', '#20B2AA', '#87CEFA', '#778899', '#B0C4DE', '#00FF00', '#32CD32', '#FAF0E6', '#FF00FF', '#800000', '#66CDAA', '#0000CD', '#BA55D3', '#9370DB', '#3CB371', '#7B68EE', '#00FA9A', '#48D1CC', '#C71585', '#191970', '#F5FFFA', '#FFE4E1', '#FFE4B5', '#FFDEAD', '#000080', '#9FAFDF', '#FDF5E6', '#808000', '#6B8E23', '#FFA500', '#FF4500', '#DA70D6', '#EEE8AA', '#98FB98', '#AFEEEE', '#DB7093', '#FFEFD5', '#FFDAB9', '#CD853F', '#FFC0CB', '#DDA0DD', '#B0E0E6', '#800080', '#FF0000', '#BC8F8F', '#4169E1', '#8B4513', '#FA8072', '#FA8072', '#2E8B57', '#FFF5EE', '#A0522D', '#C0C0C0', '#87CEEB', '#6A5ACD', '#708090', '#FFFAFA', '#00FF7F', '#4682B4', '#D2B48C', '#008080', '#D8BFD8', '#FF6347', '#40E0D0', '#EE82EE', '#F5DEB3', '#FFFFFF', '#F5F5F5', '#FFFF00', '#9ACD32'];

(function () { 

    const imgClass = document.getElementsByClassName("app-img");

    for (i of imgClass) {
        i.style.backgroundColor = randomColor[Math.floor(Math.random() * imgClass.length)];
    }

})();

