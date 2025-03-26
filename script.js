function showMessage() {
    alert("Welcome to Deejah's Designs~! Explore our services and transform your style.");
document.addEventListener("DOMContentLoaded", function() {
    var exploreBtn = document.getElementById("explore-btn");
    var gallery = document.getElementById("gallery");

    exploreBtn.addEventListener("click", function() {
        if (gallery.style.display === "none" || gallery.classList.contains("hidden")) {
            gallery.style.display = "flex"; // Show the gallery
            gallery.classList.remove("hidden");
            exploreBtn.textContent = "Hide Gallery"; // Change button text
        } else {
            gallery.style.display = "none"; // Hide the gallery
            gallery.classList.add("hidden");
            exploreBtn.textContent = "Explore Gallery"; // Reset button text
        }
    });
});
