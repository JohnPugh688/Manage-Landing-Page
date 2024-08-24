const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");

    // Toggle the overlay visibility
    overlay.classList.toggle("hidden");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  hamburgerBtn.addEventListener("click", click);

  // Optionally, close the menu and overlay when the overlay is clicked
  overlay.addEventListener("click", toggleMenu);
};
document.getElementById("testimonial-slider").scrollLeft = 0;

document.addEventListener("DOMContentLoaded", initApp);
