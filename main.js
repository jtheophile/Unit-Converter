// select input feild
var input = document.querySelector("#input");

// catch user input event
input.addEventListener("input", convert);

function convert() {

     // get value of user input
    var value = input.value;
    var output = document.querySelector("#output");
    if(value !=="") {
        //  show output
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }
    
    // grams
    document.querySelector("#gram").textContent = value * 453.592;

    // kilogram
    document.querySelector("#kilogram").textContent = value *  453.592 / 1000;

    // ounce
    document.querySelector("#ounce").textContent = value * 16;
}