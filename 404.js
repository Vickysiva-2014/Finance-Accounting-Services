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

