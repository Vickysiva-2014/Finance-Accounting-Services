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