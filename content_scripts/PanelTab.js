chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

let value_text = ""; 
let value_background_day = ""; 
let value_background_class = ""; 

document.getElementById("validate_color").addEventListener('click', function() {
        value_text = document.getElementById("text_color").value;
        value_background_day = document.getElementById("background_color").value;
        value_background_class = document.getElementById("background_color_class").value;
  }
); 

//export data to content 
export function get_Data() {
    return {
        value_text,
        value_background_day,
        value_background_class
    };
}