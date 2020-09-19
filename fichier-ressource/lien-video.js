var idVideo = document.getElementById("cible-video");
var TitreVideo = document.getElementsByClassName("titre_video");
var VLienVideo = document.getElementsByClassName(".video");

if (texte1A.textContent == "Titre1"){
    TitreVideo.innerHTML = "Titre 1";
    idVideo.src = "photo-audio-video/video/....mp4";
    VLienVideo.id = "2AA001";
}
else if (texte1A.textContent == "Titre2"){
    TitreVideo.innerHTML = "Titre 2";
    idVideo.src = "photo-audio-video/video/....mp4";
    VLienVideo.id = "2AA002";
}
else if (texte1A.textContent == "Titre numéro A3"){
    TitreVideo.innerHTML = "Titre 3";
    idVideo.src = "photo-audio-video/video/....mp4";
    VLienVideo.id = "2AA003";
}
else {
    alert("alert-erreur-code-lien-id");
}