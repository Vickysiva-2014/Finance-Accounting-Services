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
