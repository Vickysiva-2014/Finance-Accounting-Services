const serviceHero = {
  title: "OUR SERVICES",
  desc: "Home/Services",
  bg: "Images/ServicesBanner.jpg"
};

const heroSection = document.getElementById("serviceHero");
const contentDiv = document.getElementById("serviceHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${serviceHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${serviceHero.title}</h1>
    <p>${serviceHero.desc}</p>
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
