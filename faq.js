const faqHero = {
  title: "FAQ",
  desc: "Home/Pages/FAQ",
  bg: "Images/FAQBanner.jpg"
};

const heroSection = document.getElementById("faqHero");
const contentDiv = document.getElementById("faqHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${faqHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${faqHero.title}</h1>
    <p>${faqHero.desc}</p>
  `;
}
const acc = document.querySelectorAll(".accordion");

acc.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
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
