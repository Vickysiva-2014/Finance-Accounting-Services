const aboutHero = {
  title: "ABOUT US",
  desc: "Home/About",
  bg: "Images/AboutBanner.jpg"
};

const heroSection = document.getElementById("aboutHero");
const contentDiv = document.getElementById("aboutHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${aboutHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${aboutHero.title}</h1>
    <p>${aboutHero.desc}</p>
  `;
}

document.querySelectorAll(".accordion-item").forEach(item => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
      document.querySelectorAll(".accordion-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-dropdown');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;

      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) {
          menu.classList.remove('show');
        }
      });

      dropdown.classList.toggle('show');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});



window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.innerWidth > 768) {
    if (window.scrollY > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  } else {
    header.classList.remove("fixed");
  }
});

const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.classList.add("dark");
    }
  });

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.classList.toggle("dark");

    // Save the preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

