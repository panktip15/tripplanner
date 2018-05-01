const newMarker = function(type, coord) {
    
    const markerImg;
    
    if(type === "Activity") {
      markerImg = "http://i.imgur.com/WbMOfMl.png";  
    } else if (type === "Hotel") {
        markerImg = "http://i.imgur.com/D9574Cu.png";
    } else if(type === "Restaurant") {
        markerImg = "http://i.imgur.com/cqR6pUI.png";
    }

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = markerImg;
}

module.exports = newMarker;