window.onscroll = function () {
  changeNavbarColorAndLogo();
};

function changeNavbarColorAndLogo() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  if (window.pageYOffset > 0) {
    navbar.classList.add("bg-pink"); // Change navbar color when scrolling
    navbar.classList.remove("bg-white");

    // Reduce logo width when scrolling
    logo.classList.add("w-12");
    logo.classList.remove("w-16");
  } else {
    navbar.classList.add("bg-white"); // Original navbar color when at top
    navbar.classList.remove("bg-pink");

    // Reset logo width to original
    logo.classList.add("w-16");
    logo.classList.remove("w-12");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-btn");

  // Toggle mobile menu on hamburger click
  mobileMenuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("active"); // Toggle the mobile navbar visibility
    mobileMenuButton.classList.toggle("active"); // Toggle the hamburger icon to cross
  });

  // Close mobile menu on close button click
  closeMenuButton.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    mobileMenuButton.classList.remove("active");
  });
});
