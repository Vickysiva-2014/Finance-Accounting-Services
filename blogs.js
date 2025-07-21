const blogsHero = {
  title: "OUR BLOGS",
  desc: "Home/Blogs",
  bg: "Images/BlogsBanner.jpg"
};

const heroSection = document.getElementById("blogsHero");
const contentDiv = document.getElementById("blogsHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${blogsHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${blogsHero.title}</h1>
    <p>${blogsHero.desc}</p>
  `;
}
