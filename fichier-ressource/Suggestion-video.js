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
var c2A = (random(1, 3));
var c2B = (random(1, 3));
var c2C = (random(1, 3));
var c2D = (random(1, 3));

//Ciblage des éléments de la vidéo selectionner
var texte1A = document.querySelectorAll("p")[0];
var texte1B = document.querySelectorAll("p")[1];
var texte1C = document.querySelectorAll("p")[2];
var texte1D = document.querySelectorAll("p")[3];
var img1A = document.querySelectorAll("img")[0];
var img1B = document.querySelectorAll("img")[1];
var img1C = document.querySelectorAll("img")[2];
var img1D = document.querySelectorAll("img")[3];
var lien1A = document.querySelectorAll("a")[4];
var lien1B = document.querySelectorAll("a")[5];
var lien1C = document.querySelectorAll("a")[6];
var lien1D = document.querySelectorAll("a")[7];
var texte2A = document.querySelectorAll("p")[4];
var texte2B = document.querySelectorAll("p")[5];
var texte2C = document.querySelectorAll("p")[6];
var texte2D = document.querySelectorAll("p")[7];
var img2A = document.querySelectorAll("img")[4];
var img2B = document.querySelectorAll("img")[5];
var img2C = document.querySelectorAll("img")[6];
var img2D = document.querySelectorAll("img")[7];
var lien2A = document.querySelectorAll("a")[4];
var lien2B = document.querySelectorAll("a")[5];
var lien2C = document.querySelectorAll("a")[6];
var lien2D = document.querySelectorAll("a")[7];

/*Vidéo avec ses attributs (image, texte et source) attribué au
nombre généré par la fonction random*/
    //container_1A
    if (c1A == "1"){
        img1A.src = "";
        texte1A.innerHTML = "Titre numéro A1";
        lien1A.id = "1A001";
    }
    else if (c1A == "2"){
        img1A.src = "";
        texte1A.innerHTML = "Titre numéro A2";
        lien1A.id = "1A002";
    }
    else if (c1A == "3"){
        img1A.src = "";
        texte1A.innerHTML = "Titre numéro A3";
        lien1A.id = "1A003";
    }
    else {
        alert("alert-code-erreur-c1A");
    }

    //container_1B
    if (c1B == "1"){
        img1B.src = "";
        texte1B.innerHTML = "Second texte";
        texte1B.id = "1B001";
    }
    else if (c1B == "2"){
        img1B.src = "";
        texte1B.innerHTML = "deuxième nouveau texte";
        texte1B.id = "1B002";
    }
    else if (c1B == "3"){
        img1B.src = "";
        texte1B.innerHTML = "";
        texte1B.id = "1B003";
    }
    else if (c1B == "4"){
        img1B.src = "";
        texte1B.innerHTML = "";
        texte1B.id = "1B004";
    }
    else {
        alert("alert-code-erreur-c1B");
    }

    //container_1C
    if (c1C == "1"){
        img1C.src = "";
        texte1C.innerHTML = "Second texte";
        texte1C.id = "1C001";
    }
    else if (c1C == "2"){
        img1C.src = "";
        texte1C.innerHTML = "texte trois";
        texte1C.id = "1C002";
    }
    else if (c1C == "3"){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1C003";
    }
    else if (c1C == "4"){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1C004";
    }
    else if (c1D == "5"){
        img1C.src = "";
        texte1C.innerHTML = "";
        texte1C.id = "1D005";
    }
    else {
        alert("alert-code-erreur-c1C");
    }

    //container_1D
    if (c1D == "1"){
        img1D.src = "";
        texte1D.innerHTML = "quatre textes";
        texte1D.id = "1D001";
    }
    else if (c1D == "2"){
        img1D.src = "";
        texte1D.innerHTML = "quatrième nouveau texte";
        texte1D.id = "1D002";
    }
    else if (c1D == "3"){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D003";
    }
    else if (c1D == "4"){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D004";
    }
    else if (c1D == "5"){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D005";
    }
    else if (c1D == "6"){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D006";
    }
    else if (c1D == "7"){
        img1D.src = "";
        texte1D.innerHTML = "";
        texte1D.id = "1D007";
    }
    else {
        alert("alert-code-erreur-c1D");
    }




    //container_2A
    if(c2A == "1"){
        img2A.src = "";
        texte2A.innerHTML = "Il était une fois";
        lien2A.id = "1A001";
    }
    else if (c2A == "2"){
        img2A.src = "";
        texte2A.innerHTML = "Titre numéro A2";
        lien2A.id = "1A002";
    }
    else if (c2A == "3"){
        img2A.src = "";
        texte2A.innerHTML = "Titre numéro A3";
        lien1A.id = "1A003";
    }
    else {
        alert("alert-code-erreur-c1A");
    }

    //container_2B
    if (c2B == "1"){
        img2B.src = "";
        texte2B.innerHTML = "Second texte2";
        lien2B.id = "1B001";
    }
    else if (c2B == "2"){
        img2B.src = "";
        texte2B.innerHTML = "deuxième nouveau texte2";
        lien2B.id = "1B002";
    }
    else if (c2B == "3"){
        img2B.src = "";
        texte2B.innerHTML = "";
        lien2B.id = "1B003";
    }
    else if (c2B == "4"){
        img2B.src = "";
        texte2B.innerHTML = "";
        lien2B.id = "1B004";
    }
    else {
        alert("alert-code-erreur-c1B");
    }

    //container_2C
    if (c2C == "1"){
        img2C.src = "";
        texte2C.innerHTML = "Second texte2";
        lien2C.id = "1C001";
    }
    else if (c2C == "2"){
        img2C.src = "";
        texte2C.innerHTML = "texte2trois";
        lien2C.id = "1C002";
    }
    else if (c2C == "3"){
        img2C.src = "";
        texte2C.innerHTML = "";
        lien2C.id = "1C003";
    }
    else if (c2C == "4"){
        img2C.src = "";
        texte2C.innerHTML = "";
        lien2C.id = "1C004";
    }
    else if (c2D == "5"){
        img2C.src = "";
        texte2C.innerHTML = "";
        lien2C.id = "1D005";
    }
    else {
        alert("alert-code-erreur-c1C");
    }

    //container_2D
    if (c2D == "1"){
        img2D.src = "";
        texte2D.innerHTML = "quatre texte2";
        lien2D.id = "1D001";
    }
    else if (c2D == "2"){
        img2D.src = "";
        texte2D.innerHTML = "quatrième nouveau texte2";
        lien2D.id = "1D002";
    }
    else if (c2D == "3"){
        img2D.src = "";
        texte2D.innerHTML = "";
        lien2D.id = "1D003";
    }
    else if (c2D == "4"){
        img2D.src = "";
        texte2D.innerHTML = "";
        lien2D.id = "1D004";
    }
    else if (c2D == "5"){
        img2D.src = "";
        texte2D.innerHTML = "";
        lien2D.id = "1D005";
    }
    else if (c2D == "6"){
        img2D.src = "";
        texte2D.innerHTML = "";
        lien2D.id = "1D006";
    }
    else if (c2D == "7"){
        img2D.src = "";
        texte2D.innerHTML = "";
        lien2D.id = "1D007";
    }
    else {
        alert("alert-code-erreur-c1D");
    }
    