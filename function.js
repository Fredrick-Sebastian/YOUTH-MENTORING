// Select toggle button and nav links
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Add click event to toggle the menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Select toggle button and nav links
const nationalBtn = document.getElementById("nationalBtn");
const swahiliLanguage = document.getElementById("swahiliLanguage");

// Add click event to toggle the menu
nationalBtn.addEventListener("click", () => {
  swahiliLanguage.classList.toggle("active");
});

