const contactHero = {
  title: "CONTACT US",
  desc: "Home/Contact",
  bg: "Images/ContactBanner.jpg"
};

const heroSection = document.getElementById("contactHero");
const contentDiv = document.getElementById("contactHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${contactHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${contactHero.title}</h1>
    <p>${contactHero.desc}</p>
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
