// Main initialization function that runs when the DOM is fully loaded
const initApp = () => {
  // Hamburger Menu Functionality
  setupHamburgerMenu();

  // Testimonial Slider Functionality
  setupTestimonialSlider();

  // Email Validation and Success Popup Functionality
  setupEmailValidation();
};

/**
 * Sets up the hamburger menu functionality
 * - Toggles the visibility of the mobile menu and overlay
 * - Changes the appearance of the hamburger button
 */
const setupHamburgerMenu = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  // Function to toggle the menu and overlay visibility
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
    overlay.classList.toggle("hidden");
  };

  // Event listeners to handle menu toggling
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
};

/**
 * Sets up the testimonial slider functionality
 * - Updates the dot navigation based on scroll position
 * - Allows users to click on dots to scroll to specific testimonials
 */
const setupTestimonialSlider = () => {
  const container = document.getElementById("testimonial-container");
  const dots = document.querySelectorAll("#dot-navigation .dot");
  const items = container.querySelectorAll("li");

  // Reset the scroll position to the start on page load
  container.scrollLeft = 0;

  // Function to update the active dot based on the current scroll position
  const updateDots = () => {
    const scrollLeft = container.scrollLeft;
    const cardWidth = items[0].offsetWidth;
    const currentIndex = Math.round(scrollLeft / cardWidth);

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("bg-BrightRed");
        dot.classList.remove("bg-white");
      } else {
        dot.classList.remove("bg-BrightRed");
        dot.classList.add("bg-white");
      }
    });
  };

  // Update the dots when the container is scrolled
  container.addEventListener("scroll", updateDots);

  // Scroll to the corresponding testimonial when a dot is clicked
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      container.scrollTo({
        left: index * items[0].offsetWidth,
        behavior: "smooth",
      });
    });
  });
};

/**
 * Sets up email validation for the form and shows a success popup if valid
 * - Validates the email input on form submission
 * - Displays an error message if the email is invalid
 * - Shows a success popup if the email is valid
 */
const setupEmailValidation = () => {
  const emailForm = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("error-message");
  const successPopup = document.getElementById("success-popup"); // Get the success popup element
  const closePopupBtn = document.getElementById("close-popup"); // Get the close button for the popup

  // Function to show the success popup
  const showSuccessPopup = () => {
    successPopup.classList.remove("hidden");
    successPopup.classList.add("flex");
  };

  // Function to hide the success popup
  const hideSuccessPopup = () => {
    successPopup.classList.remove("flex");
    successPopup.classList.add("hidden");
  };

  // Function to validate the email format and display an error if invalid
  const validateEmail = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    // Check if the email input matches the pattern
    if (!emailPattern.test(emailInput.value)) {
      // Show the error message and apply error styles
      errorMessage.classList.remove("hidden");
      emailInput.classList.add(
        "border-BrightRed",
        "text-BrightRed",
        "border-[1.5px]",
      );
      emailInput.classList.remove("border"); // Remove the default border class if any
    } else {
      // Hide the error message and reset the input styles
      errorMessage.classList.add("hidden");
      emailInput.classList.remove(
        "border-BrightRed",
        "text-BrightRed",
        "border-[1.5px]",
      );
      emailInput.classList.add("border"); // Reset to the default border class

      // Show the success popup
      showSuccessPopup();
    }
  };

  // Event listener for form submission to trigger email validation
  emailForm.addEventListener("submit", validateEmail);

  // Event listener to close the success popup
  closePopupBtn.addEventListener("click", hideSuccessPopup);
};

// Run the initApp function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initApp);
