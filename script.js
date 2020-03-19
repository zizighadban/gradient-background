
/*
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//innerHTML = går att ändra bg-color genom body.style
//denna lägger vi i color1/color2 function
//body.style.background = "red";

//finns mouseover, keypress, click etc
//finns också "input" för i<nput type="color">
color1.addEventListener("input", function(){
    //color1.value visar alla hex-colors i console när man ändrar färgen från webbsidan <input type="color">
    //console.log(color1.value); 
    
    //innerHTML + samma syntax för linear-gradient i CSS 
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function(){
    //color1.value visar alla hex-colors i console när man ändrar färgen från webbsidan <input type="color">
    //console.log(color2.value);

    //innerHTML + samma syntax för linear-gradient i CSS 
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})
*/


/*--------------------- CLEAN-VERSION AV OVAN---------------------*/

var css = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//vi skapar en function för gradient där samma kod ej upprepas i addEventListeners nedan
function addGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    //text.Content (innerHTML) lägger till text i body
    css.textContent = body.style.background + ";"
}

//inga () på addGradient här. Detta för att addEventListeners redan är en function som triggar igång addGradient funktionen
// color1.addEventListener("input", addGradient);
// color2.addEventListener("input", addGradient);

//användning av oninput i HTML så addEventListeners behövs ej
//dock är addEventListeners mycket bättre vid flera olika skapade function