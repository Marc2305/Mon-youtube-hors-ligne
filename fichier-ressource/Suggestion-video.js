//Génère un nombre aléatoire
function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

//min et max à compléter
//Limite à 50
var c1A = (random(1, 3));
var c1B = (random(1, 3));
var c1C = (random(1, 3));
var c1D = (random(1, 3));

//Ciblage des éléments de la vidéo selectionner
var texte1A = document.querySelectorAll("p")[0];
var texte1B = document.querySelectorAll("p")[1];
var texte1C = document.querySelectorAll("p")[2];
var texte1D = document.querySelectorAll("p")[3];
var img1A = document.querySelectorAll("img")[0];
var img1B = document.querySelectorAll("img")[1];
var img1C = document.querySelectorAll("img")[2];
var img1D = document.querySelectorAll("img")[3];
var lien1A = document.querySelectorAll("a")[0];


/*Vidéo avec ses attributs (image, texte et source) attribué au
nombre généré par la fonction random*/
    //container_1A
    if(c1A == 1){
        img1A.src = "";
        texte1A.innerHTML = "Du texte";
        lien1A.id = "1A001";
    }
    else if(c1A == 2){
        img1A.src = "";
        texte1A.innerHTML = "Nouveau texte";
        lien1A.id = "1A002";
    }
    else if(c1A == 3){
        img1A.src = "";
        texte1A.innerHTML = "Nouveau texte";
        lien1A.id = "1A003";
    }
    else{
        alert("alert-code-erreur-c1A");
    }

    //container_1B
    if (c1B == 1){
        img1B.src = "";
        texte1B.innerHTML = "Second texte";
        texte1B.id = "1B001";
    }
    else if (c1B == 2){
        img1B.src = "";
        texte1B.innerHTML = "deuxième nouveau texte";
        texte1B.id = "1B002";
    }
    else if (c1B == 3){
        img1B.src = "";
        texte1B.innerHTML = "";
        texte1B.id = "1B003";
    }
    else if (c1B == 4){
        img1B.src = "";
        texte1B.innerHTML = "";
        texte1B.id = "1B004";
    }
    else {
        alert("alert-code-erreur-c1B");
    }

    //container_1C
    if (c1C == 1){
        img1C.src = "";
        texte1C.innerHTML = "Second texte";
        texte1C.id = "1C001";
    }
    else if (c1C == 2){
        img1C.src = "";
        texte1C.innerHTML = "texte trois";
        texte1C.id = "1C002";
    }
    else if (c1C == 3){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1C003";
    }
    else if (c1C == 4){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1C004";
    }
    else if (c1D == 5){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1D005";
    }
    else {
        alert("alert-code-erreur-c1C");
    }

    //container_1D
    if (c1D == 1){
        img1D.src = "";
        texte1D.innerHTML = "quatre textes";
        texte1D.id = "1D001";
    }
    else if (c1D == 2){
        img1D.src = "";
        texte1D.innerHTML = "quatrième nouveau texte";
        texte1D.id = "1D002";
    }
    else if (c1D == 3){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D003";
    }
    else if (c1D == 4){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D004";
    }
    else if (c1D == 5){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D005";
    }
    else if (c1D == 6){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D006";
    }
    else if (c1D == 7){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D007";
    }
    else {
        alert("alert-code-erreur-c1D");
    }
    