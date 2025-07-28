document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-dropdown');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;

     
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) {
          menu.classList.remove('show');
        }
      });

    
      dropdown.classList.toggle('show');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.classList.remove('show');
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
    <a href="service.html" class="btn">${slide.btn}</a>
  `;
  content.classList.add("fade-in");

  index = (index + 1) % slides.length;
}

updateHero();
setInterval(updateHero, 5000);

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    dots[i].classList.remove("active");
  });
  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}


setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 6000);


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    showTestimonial(current);
  });
});

const revealCards = document.querySelectorAll('.card.reveal');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealCards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        setTimeout(() => {
          card.classList.add('active');
        }, i * 200); 
      }
    });
  }

    window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.innerWidth > 768) {
    if (window.scrollY > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  } else {
    header.classList.remove("fixed");
  }
});


const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.classList.add("dark");
    }
  });

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.classList.toggle("dark");

    // Save the preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });


