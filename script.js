// ================================
// ASPIRANTS - STUDY WEBSITE
// JavaScript File
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Aspirants! 📚");

    // Start Learning button
    const startButton = document.querySelector(".button");

    if (startButton) {
        startButton.addEventListener("click", function () {
            alert("Welcome to Aspirants! 🎓\nLet's start your study journey!");
        });
    }

    // Subject cards animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.style.transform = "scale(1.03)";
            card.style.transition = "0.2s";

            setTimeout(function () {
                card.style.transform = "scale(1)";
            }, 200);

        });

    });

});
