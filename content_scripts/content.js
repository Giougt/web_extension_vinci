//import data from paneltab 
import {get_Data} from "/extension_web_devinci/content_scripts/PanelTab.js";
const get = get_Data(); 
//button dark_mode 
const buttonE = document.createElement("button");
buttonE.innerText = "dark";

//style dark mode button 
const dark_mode= {
    top: "100px",
    marginLeft: "760px",
    backgroundColor: "#333", // Fond sombre (gris foncé)
    border: "2px solid #555", // Bordure gris clair
    color: "#fff", // Texte blanc pour contraste
    borderRadius: "35px", // Bouton arrondi
    padding: "2px 40px", // Taille du bouton
    fontSize: "16px", // Taille du texte
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Ombre subtile
    zIndex: "1000"
};

//new object for replace style 
const light_button = {
    backgroundColor: "#fff",
    border: "2px solid #555",
    color: "black",
};

Object.assign(buttonE.style,dark_mode);

document.querySelector(".breadcrumb.no_margin").appendChild(buttonE);

//active button dark_mode 
let statut = 1; 
buttonE.addEventListener("click", function() {
    if (statut === 1) {
        dark_mode_style();
        Object.assign(buttonE.style,light_button);
        buttonE.innerText = "light";
        statut = 0;
    } else {
        dark_mode_style("default");
        Object.assign(buttonE.style,dark_mode);
        buttonE.innerText = "dark";
        statut = 1;
    }
});

function dark_mode_style(state) {
    const text_class_style = document.querySelectorAll(".b-dayview-day-container .b-calendar-cell .b-cal-event");
    text_class_style.forEach(function(element) {
        if (state === "default"){
            element.style.color = "black"; 
        }else{
            element.style.color = "white"; 
        }
});

    const background_class_style = document.querySelectorAll(".b-dayview-day-container .b-calendar-cell .b-cal-event-body");
    background_class_style.forEach(function(element) {
        if (state === "default"){
            element.style.backgroundColor = "rgb(241,248,253)";
        }else{
            element.style.backgroundColor = "black";
        }
});

    const background_extra_style = document.querySelectorAll(".b-cal-event");
    background_extra_style.forEach(function(element) {
        if (state === "default"){
            element.style.backgroundColor = "rgb(109,183,236)";
        }else{
            element.style.backgroundColor = "black";
        }
});
}

//test import data 
console.log(get.value_text); 