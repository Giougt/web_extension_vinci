//get value color text 

//get value color background day schedule 
document.body.addEventListener("click",function(){
    console.log("hello"); 
})

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


