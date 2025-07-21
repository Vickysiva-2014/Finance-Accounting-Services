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
