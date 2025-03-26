// Show Welcome Message
function showMessage() {
    alert("Welcome to Deejah's Designs~! Explore our services and transform your style.");
}

// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function() {
    var exploreBtn = document.getElementById("explore-btn");
    var gallery = document.getElementById("gallery");

    // Ensure the gallery starts hidden
    gallery.style.display = "none";

    // Toggle gallery visibility
    exploreBtn.addEventListener("click", function() {
        if (gallery.style.display === "none") {
            gallery.style.display = "flex"; // Show the gallery
            exploreBtn.textContent = "Hide Gallery"; // Change button text
        } else {
            gallery.style.display = "none"; // Hide the gallery
            exploreBtn.textContent = "Explore Gallery"; // Reset button text
        }
    });

    // Call the showMessage function to display the alert
    showMessage();
});
