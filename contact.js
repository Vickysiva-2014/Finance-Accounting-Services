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
