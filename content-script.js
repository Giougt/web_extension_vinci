//get value color text 

//get value color background day schedule 
buttonE.document.addEventListener("click", function(){
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
})

document.querySelector(".b-panel-content.b-sidebar-content.b-box-center.b-widget-scroller.b-resize-monitored.b-content-element.b-auto-container.b-flex-column").addEventListener("click",function(){
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