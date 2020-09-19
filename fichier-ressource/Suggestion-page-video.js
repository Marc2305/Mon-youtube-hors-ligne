//Génère un nombre aléatoire
function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

//min et max à compléter
var V1A = (random(1, 3));
var V1B = (random(1, 3));
var V1C = (random(1, 3));
var V1D = (random(1, 3));
var V1E = (random(1, 3));
var V1F = (random(1, 3));

var VLienVideo = document.getElementsByClassName(".video");
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
var Vlien0 = document.querySelectorAll("a")[0];
var Vlien1 = document.querySelectorAll("a")[1];
var Vlien2 = document.querySelectorAll("a")[2];
var Vlien3 = document.querySelectorAll("a")[3];
var Vlien4 = document.querySelectorAll("a")[4];
var Vlien5 = document.querySelectorAll("a")[5];

    if (VLienVideo.id == "2AA001" || VLienVideo.id == "2AA002" || VLienVideo.id == "2AA003"){
        if (V1A = "1"){
            Vimg0.src = "";
            Vtext0.innerHTML = "Texte de la vidéo en suggestion 1";
            Vlien0.id = "2AA001";
            /*Si la vidéo en suggestion est la même que la vidéo 
            diffusé actuellement, la vidéo suggéré changera et 
            passera à la vidéo suivante dans la liste des id*/
            if (VLienVideo.id == "2AA001"){
                Vimg0.src = "";
                Vtext0.innerHTML = "Texte modifié car vidéo identique 1";
                Vlien0.id = "2AA002";
            }
            else {
                Vimg0.src = "";
                Vtext0.innerHTML = "Texte de la vidéo en suggestion 1";
                Vlien0.id = "2AA001";
            }
        }
        else if (V1A = "2"){
            Vimg0.src = "";
            Vtext0.innerHTML = "Texte de la vidéo en suggestion 2";
            Vlien0.id = "2AA002";
            if (VLienVideo.id = "2AA002"){
                Vimg0.src = "";
                Vtext0.innerHTML = "Texte modifié car vidéo identique 2";
                Vlien0.id = "2AA003";
            }
            else {
                
            }
        }
        else if (V1A = "3"){
            Vimg0.src = "";
            Vtext0.innerHTML = "Texte de la vidéo en suggestion 2";
            Vlien0.id = "2AA003";
            if (VLienVideo.id = "2AA003"){
                Vimg0.src = "";
                Vtext0.innerHTML = "Texte modifié car vidéo identique 3";
                Vlien0.id = "2AA004";
            }
            else {
                
            }
        }
        else if (V1A = "4"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else {
            alert("alert-code-erreur-V1A");
        }
    }
    else if (VLienVideo.id = "2BA001" || "2BA002" || "2BA003"){
        if (V1A = "1"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "2"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "3"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "4"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else {
            alert("alert-code-erreur-V1A");
        }
    }
    else if (VLienVideo.id = "2CA001" || "2CA002" || "2CA003"){
        if (V1A = "1"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "2"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "3"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "4"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else {
            alert("alert-code-erreur-V1A");
        }
    }
    else if (VLienVideo.id = ""){
        if (V1A = "1"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "2"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "3"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else if (V1A = "4"){
            Vimg0.src = "";
            Vtext0.innerHTML = "";
            Vlien0.id = "";
        }
        else {
            alert("alert-code-erreur-V1A");
        }
    }