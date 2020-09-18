//Génère un nombre aléatoire
function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

//min et max à compléter
var V1A = (random(1, 3));
var V1B = (random(1, 3));
var V1C = (random(1, 3));
var V1D = (random(1, 3));

var Vimg0 = document.querySelectorAll("img")[0];
var Vimg1 = document.querySelectorAll("img")[1];
var Vimg2 = document.querySelectorAll("img")[2];
var Vimg3 = document.querySelectorAll("img")[3];
var Vimg4 = document.querySelectorAll("img")[4];
var Vimg5 = document.querySelectorAll("img")[5];
var Vtext0 = document.querySelectorAll("p")[0];
var Vtext1 = document.querySelectorAll("p")[1];
var Vtext2 = document.querySelectorAll("p")[2];
var Vtext3 = document.querySelectorAll("p")[3];
var Vtext4 = document.querySelectorAll("p")[4];
var Vtext5 = document.querySelectorAll("p")[5];


if(V1A == 1){
    Vimg0.src = "";
    Vtexte0.innerHTML = "";
}