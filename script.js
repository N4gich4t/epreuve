document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    var video = document.getElementById('background-video');

    // Déclenche la lecture de la musique dès que la page est chargée
    music.play();

    // Ajoute un écouteur d'événement pour déclencher la lecture de la musique lorsqu'un clic est effectué sur la vidéo
    video.addEventListener('click', function() {
        // Vérifie si la musique est en pause
        if (music.paused) {
            // Si oui, lance la lecture de la musique
            music.play();
        } else {
            // Si non, met la musique en pause
            music.pause();
        }
    });
// Votre code de compte à rebours ici
// Fonction de redirection vers la page spécifiée
function redirectToAnotherPage() {
    window.location.href = 'https://www.figma.com/proto/UfVf6Mf5pSMkmXONkD1ANF/Untitled?page-id=0%3A1&type=design&node-id=1-3&viewport=349%2C428%2C0.14&t=SP72x1ETRd8p4OcO-1&scaling=min-zoom&mode=design'; // Remplacez cet URL par celui de votre choix
}

// Date de fin du compte à rebours
var endDate = new Date('2024-02-18T12:00:00').getTime(); // Date de fin du compte à rebours

// Mise à jour du compte à rebours chaque seconde
var countdown = setInterval(function () {
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("bottle").style.display = "inline-block";
    } else {
        document.getElementById("countdown").style.display = "grid";
        document.getElementById("bottle").style.display = "none";
    }
}, 1000);

// Gestion de l'événement de clic sur le bouton
document.getElementById("bottle").addEventListener("click", function () {
    redirectToAnotherPage();

    });
});
