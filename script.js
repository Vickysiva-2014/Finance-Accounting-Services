
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.toggle-dropdown');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();

        
        document.querySelectorAll('.dropdown-content').forEach(drop => {
          if (drop !== this.nextElementSibling) {
            drop.classList.remove('show');
          }
        });

  
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('show');
      });
    });

   
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(drop => {
          drop.classList.remove('show');
        });
      }
    });
  });
const slides = [
  {
    title: "FINANCIAL SERVICES",
    desc: "Carefully manage financial markets using ready-to-use financial systems. Actively work with customers after their investments earn profits. Clearly understand and show how customer needs are shaping financial services.",
    btn: "LEARN MORE",
    bg: "Images/Finance.jpg"
  },
  {
    title: "ACCOUNTING SERVICES",
    desc: "Share information across different platforms, even if it doesn’t add extra value. Deliver results quickly and on time for live systems. Strongly support both online and offline business solutions.",
    btn: "LEARN MORE",
    bg: "Images/Accounting.jpg"
  },
  {
    title: "YOU CAN FOCUS ON WHAT YOU DO BEST",
    desc: "Work together effectively in specialized markets where resources are limited. Provide personalized customer service with strong, creative ideas. Continuously improve how resources are managed and balanced.",
    btn: "GET STARTED",
    bg: "Images/Focus.jpg"
  }
];

let index = 0;
const hero = document.getElementById("hero");
const content = document.getElementById("heroContent");

function updateHero() {
  const slide = slides[index];


  hero.style.background = `linear-gradient(rgba(4, 31, 59, 0.75), rgba(4, 33, 61, 0.75)), url('${slide.bg}') no-repeat center center / cover`;


  content.classList.remove("fade-in");
  void content.offsetWidth;
  content.innerHTML = `
    <h1>${slide.title}</h1>
    <p>${slide.desc}</p>
    <a href="#" class="btn">${slide.btn}</a>
  `;
  content.classList.add("fade-in");

  index = (index + 1) % slides.length;
}

updateHero();
setInterval(updateHero, 5000);
