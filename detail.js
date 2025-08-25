let currentIndex = 0;
let slideInterval;

// Pindah slide manual
function moveSlide(step) {
  const gallery = document.getElementById("gallery");
  const total = gallery.children.length;
  currentIndex = (currentIndex + step + total) % total;
  gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide
function startAutoSlide() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // ganti slide setiap 4 detik
}

// Stop auto slide saat mouse hover (opsional)
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Mulai auto-slide saat halaman dibuka
window.onload = () => {
  startAutoSlide();

  // Pause saat hover gallery
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.addEventListener("mouseenter", stopAutoSlide);
  galleryContainer.addEventListener("mouseleave", startAutoSlide);
};
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  // Toggle mobile menu on click
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change icon when menu is toggled
    if (navLinks.classList.contains("active")) {
      mobileMenu.textContent = "✖"; // Cross icon when menu is open
    } else {
      mobileMenu.textContent = "☰"; // Hamburger icon when menu is closed
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenu.textContent = "☰"; // Reset icon
    });
  });
});
