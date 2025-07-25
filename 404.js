const notFoundHero = {
  title: "PAGE NOT FOUND",
  bg: "Images/404Banner.jpg"
};

const heroSection = document.getElementById("notFoundHero");
const contentDiv = document.getElementById("notFoundHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${notFoundHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${notFoundHero.title}</h1>
  `;
}

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

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});