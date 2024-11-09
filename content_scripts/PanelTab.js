chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

//export data to content 
export function get_data() {
    document.getElementById("validate_color").addEventListener('click', function() {
        const value_text = document.getElementById("text_color").value;
        const value_background_day = document.getElementById("background_color").value;
        const value_background_class = document.getElementById("background_color_class").value;
    return {value_text,value_background_day,value_background_class}; 
  }
); 
}