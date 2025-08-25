// Toggle Menu Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Ketika tombol menu mobile diklik, toggle kelas active untuk menampilkan/menyembunyikan menu
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah scroll default
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Efek scroll halus
        block: "start", // Scroll ke bagian atas target
      });
      navLinks.classList.remove("active"); // Menutup menu mobile setelah link diklik
    }
  });
});

// Efek Navbar yang Meningkat
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"; // Mengubah background navbar
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"; // Menambahkan shadow
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.8)";
    navbar.style.boxShadow = "none"; // Menghilangkan shadow ketika scroll kembali ke atas
  }
});

// Animasi Pita Keahlian
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width"); // Mengambil data width dari atribut
    setTimeout(() => {
      bar.style.width = width + "%"; // Animasi progress bar
    }, index * 100); // Penundaan untuk efek bertahap
  });
};

// Pengamat Perpotongan (Intersection Observer) untuk Animasi
const observerOptions = {
  threshold: 0.2, // Threshold untuk mulai animasi
  rootMargin: "0px 0px -100px 0px", // Margin root observer
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("skills")) {
        setTimeout(animateSkillBars, 300); // Animasi skill bars saat section skills terlihat
      }

      // Animasi kartu (skill-card dan project-card)
      const cards = entry.target.querySelectorAll(".skill-card, .project-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1"; // Munculkan kartu
          card.style.transform = "translateY(0)"; // Animasi naik
        }, index * 150); // Penundaan untuk efek bertahap
      });

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Inisialisasi animasi untuk setiap section
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"; // Mulai dengan opacity 0
  section.style.transform = "translateY(50px)"; // Mulai dengan posisi terjemahan
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease"; // Efek transisi
  observer.observe(section); // Mengamati setiap section
});

// Inisialisasi animasi untuk kartu
document
  .querySelectorAll(".skill-card, .project-card")
  .forEach((card) => {
    card.style.opacity = "0"; // Kartu dimulai dengan opacity 0
    card.style.transform = "translateY(30px)"; // Kartu dimulai di posisi terjemahan
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"; // Efek transisi
  });

// Formulir Kontak yang Ditingkatkan
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah pengiriman form default

  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  // Menampilkan status loading
  submitBtn.textContent = "Mengirim...";
  submitBtn.style.opacity = "0.7";
  submitBtn.disabled = true;

  // Simulasi panggilan API
  setTimeout(() => {
    submitBtn.textContent = "Terkirim! ✓";
    submitBtn.style.background =
      "linear-gradient(135deg, #10b981 0%, #059669 100%)"; // Mengubah latar belakang tombol

    setTimeout(() => {
      alert(
        "Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda."
      );
      contactForm.reset(); // Reset form setelah pengiriman berhasil

      // Mengembalikan tombol ke status awal
      submitBtn.textContent = originalText;
      submitBtn.style.background =
        "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)";
      submitBtn.style.opacity = "1";
      submitBtn.disabled = false;
    }, 1500);
  }, 2000);
});

// Efek Pengetikan yang Ditingkatkan
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = "";
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i); // Menambahkan satu karakter per interval
      i++;
    } else {
      clearInterval(timer); // Menyelesaikan pengetikan
    }
  }, speed);
};

// Efek Parallax yang Ditingkatkan
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset; // Mengambil scroll Y
  const hero = document.querySelector(".hero");
  const rate = scrolled * -0.3;
  hero.style.transform = `translateY(${rate}px)`; // Parallax untuk hero section

  // Menambahkan rotasi pada konten hero
  const heroContent = document.querySelector(".hero-content");
  const rotation = scrolled * 0.05;
  heroContent.style.transform = `translateY(${rate * 0.5}px) rotate(${rotation}deg)`;
});

// Efek Pemuatan Halaman yang Halus
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0"; // Mulai dengan opacity 0
  document.body.style.transition = "opacity 0.8s ease"; // Transisi opacity

  window.addEventListener("load", () => {
    document.body.style.opacity = "1"; // Ubah opacity menjadi 1 setelah halaman dimuat

    // Mulai efek pengetikan setelah pemuatan halaman
    setTimeout(() => {
      const heroTitle = document.querySelector(".hero h1");
      const originalText = heroTitle.textContent;
      typeWriter(heroTitle, originalText, 120); // Efek pengetikan pada judul hero
    }, 500);
  });
});

// Tambahkan efek hover pada kartu proyek
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.02)"; // Efek saat mouse masuk
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(-8px) scale(1)"; // Efek saat mouse keluar
  });
});

// Enhancements untuk browser modern
if ("IntersectionObserver" in window) {
  console.log("Animasi yang Ditingkatkan diaktifkan");
} else {
  // Fallback untuk browser lama
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "1";
    section.style.transform = "none"; // Hilangkan efek animasi untuk browser lama
  });
}

