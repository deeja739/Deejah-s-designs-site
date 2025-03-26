function showMessage() {
    alert("Welcome to Deejah's Designs~! Explore our services and transform your style.");
}
document.getElementById("explore-btn").addEventListener("click", function() {
    var gallery = document.getElementById("gallery");
    if (gallery.classList.contains("hidden")) {
        gallery.classList.remove("hidden"); // Show the gallery
        this.textContent = "Hide Gallery"; // Change button text
    } else {
        gallery.classList.add("hidden"); // Hide the gallery
        this.textContent = "Explore Gallery"; // Reset button text
    }
});
