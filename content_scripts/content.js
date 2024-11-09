//field who change color 

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

//    part button get // 

const input_text = document.createElement("input"); 
const input_colorbackday = document.createElement("input"); 
const input_backgroundclass = document.createElement("input"); 
const button_send = document.createElement("button"); 


Object.assign(input_text,{
    id: "text_color",
    type: "color",
    value: "#000000"
});

Object.assign(input_colorbackday,{
    id: "background_color",
    type: "color",
    value: "#000000"
});

Object.assign(input_backgroundclass,{
    id: "background_color_class",
    type: "color",
    value: "#000000",
});

Object.assign(button_send,{
    id: "validate_color",
    type: "button",
    innerText: "apply"
}); 

//asign style here 
const input_style = {
    width: "70px",      
    height: "35px",
}

Object.assign(button_send.style,{
    backgroundColor: "#6200ea", 
    color: "white",
    border: "none",
    padding: "15px 40px",
    fontSize: "16px", 
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)", 
    transition: "all 0.3s ease",
    cursor: "pointer"
});

Object.assign(input_text.style,input_style);
Object.assign(input_colorbackday.style,input_style);
Object.assign(input_backgroundclass.style,input_style);

document.querySelector(".breadcrumb.no_margin").appendChild(input_text);
document.querySelector(".breadcrumb.no_margin").appendChild(input_colorbackday);
document.querySelector(".breadcrumb.no_margin").appendChild(input_backgroundclass);
document.querySelector(".breadcrumb.no_margin").appendChild(button_send);


//new approach 
document.getElementById("validate_color").addEventListener('click', function () {
    const valueText =  document.getElementById("text_color").value;
    const valueBackgroundDay =  document.getElementById("background_color").value;
    const valueBackgroundClass =  document.getElementById("background_color_class").value;
    console.log("Couleur du texte :", valueText);
    console.log("Couleur de fond jour :", valueBackgroundDay);
    console.log("Couleur de fond classe :", valueBackgroundClass);

});