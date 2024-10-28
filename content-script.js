//get value color text 

//get value color background day schedule 

//active button dark_mode 


//color other day with the same color
document.querySelector(".b-panel-content.b-sidebar-content.b-box-center.b-widget-scroller.b-resize-monitored.b-content-element.b-auto-container.b-flex-column").addEventListener("click",function(){
    console.log("hello");
});

//button dark_mode 
const buttonE = document.createElement("button");
buttonE.innerText = ">/";

Object.assign(buttonE.style, {
    top: "100px",
    marginLeft: "760px",
    backgroundColor: "#333", // Fond sombre (gris foncé)
    border: "2px solid #555", // Bordure gris clair
    color: "#fff", // Texte blanc pour contraste
    borderRadius: "35px", // Bouton arrondi
    padding: "2px 40px", // Taille du bouton
    fontSize: "16px", // Taille du texte
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Ombre subtile
    zIndex: "1000",
});

document.querySelector(".breadcrumb.no_margin").appendChild(buttonE);

//active button dark_mode 
let statut = 1; 
buttonE.addEventListener("click", function() {
    if (statut === 1) {
        dark_mode_style();
        statut = 0;
    } else {
        const background_class_style = document.querySelectorAll(".b-dayview-day-container .b-calendar-cell .b-cal-event-body");
        background_class_style.forEach(function(element) {
            element.style.backgroundColor = "orange";
});
        statut = 1;
    }
});


function dark_mode_style() {
    const text_class_style = document.querySelectorAll(".b-dayview-day-container .b-calendar-cell .b-cal-event");
    text_class_style.forEach(function(element) {
        element.style.color = "white";
});

    const background_class_style = document.querySelectorAll(".b-dayview-day-container .b-calendar-cell .b-cal-event-body");
    background_class_style.forEach(function(element) {
        element.style.backgroundColor = "black";
});

    const background_extra_style = document.querySelectorAll(".b-cal-event");
    background_extra_style.forEach(function(element) {
        element.style.backgroundColor = "black";
});
}
