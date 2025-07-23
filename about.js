const aboutHero = {
  title: "ABOUT US",
  desc: "Home/About",
  bg: "Images/AboutBanner.jpg"  // Replace with your actual image path
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

      // Close other dropdowns
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) {
          menu.classList.remove('show');
        }
      });

      // Toggle current
      dropdown.classList.toggle('show');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});



window.addEventListener('scroll', function () {
    const mainHeader = document.getElementById('main-header');
    
    // When page is scrolled more than 1px
    if (window.scrollY > 1) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
