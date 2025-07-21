const notFoundHero = {
  title: "PAGE NOT FOUND",
  bg: "Images/404Banner.jpg" // Make sure this image exists
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
