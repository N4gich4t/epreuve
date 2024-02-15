// Fonction de redirection vers la page spécifiée
function redirectToAnotherPage() {
    window.location.href = 'https://sites.google.com/view/votre-aventure-commence/epreuve'; // Remplacez cet URL par celui de votre choix
}

// Date de fin du compte à rebours
var endDate = new Date('2024-02-18T12:00:00').getTime(); // Date de fin du compte à rebours

// Mise à jour du compte à rebours chaque seconde
var countdown = setInterval(function() {
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
document.getElementById("bottle").addEventListener("click", function() {
    redirectToAnotherPage();
});
