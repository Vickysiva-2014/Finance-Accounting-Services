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
