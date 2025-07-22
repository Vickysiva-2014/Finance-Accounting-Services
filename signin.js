const signinHero = {
  title: "SIGN IN / SIGN UP",
  desc: "Home/Sign In/Up"
};

const heroSection = document.getElementById("signinHero");
const contentDiv = document.getElementById("signinHeroContent");

if (heroSection && contentDiv) {
  heroSection.style.backgroundImage = `url(${signinHero.bg})`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundColor = "linear-gradient(rgba(4, 31, 59, 0.75), rgba(4, 33, 61, 0.75))";
  heroSection.style.backgroundPosition = "center";

  contentDiv.innerHTML = `
    <h1>${signinHero.title}</h1>
    <p>${signinHero.desc}</p>
  `;
}


const container = document.getElementById('container2');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const forgotPass = document.querySelector('.forgot-pass');
const backToSignIn = document.getElementById('backToSignIn');

// Switching panels logic
signUpBtn.addEventListener('click', () => {
  container.classList.remove("forgot-active");
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener('click', () => {
  container.classList.remove("forgot-active");
  container.classList.remove("right-panel-active");
});

forgotPass.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove("right-panel-active");
  container.classList.add("forgot-active");
});

backToSignIn?.addEventListener('click', () => {
  container.classList.remove("forgot-active");
});

// Handle Sign Up
document.getElementById('signUpForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.target.elements['signupName'].value;
  const email = e.target.elements['signupEmail'].value;
  const password = e.target.elements['signupPassword'].value;

  // Save data to localStorage (simulating registration)
  localStorage.setItem('user', JSON.stringify({ name, email, password }));

  // Show success message
  const message = document.getElementById('signUpMessage');
  message.textContent = "✅ Registered successfully!";
  
  // Reset the form
  e.target.reset();

   setTimeout(() => {
      message.textContent = '';
    }, 10000);
});



// Handle Sign In
document.getElementById('signInForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = e.target.elements['signinEmail'].value.trim();
  const password = e.target.elements['signinPassword'].value.trim();
  const message = document.getElementById('signInMessage');

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser) {
    if (storedUser.email === email) {
      if (storedUser.password === password) {
        message.textContent = `✅ Login successful. Welcome, ${storedUser.name}!`;
        message.style.color = 'green';
      } else {
        message.textContent = '❌ Incorrect password.';
        message.style.color = 'red';
      }
    } else {
      message.textContent = '❌ Email not registered.';
      message.style.color = 'red';
    }
  } else {
    message.textContent = '❌ No user registered.';
    message.style.color = 'red';
  }

  e.target.reset(); // Clear inputs

  setTimeout(() => {
      message.textContent = '';
    }, 10000);
});


// Handle Forgot Password

document.addEventListener('DOMContentLoaded', () => {
  const forgotForm = document.getElementById('forgotForm');
  const resetMessage = document.getElementById('resetMessage');

  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = forgotForm.elements['resetEmail'].value.trim();
    const newPassword = forgotForm.elements['newPassword'].value.trim();
    const confirmPassword = forgotForm.elements['confirmPassword'].value.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check email match
    if (!storedUser || storedUser.email !== email) {
      resetMessage.textContent = '❌ Email is not registered.';
      resetMessage.style.color = 'red';
      return;
    }

    // Check password match
    if (newPassword !== confirmPassword) {
      resetMessage.textContent = '❌ Passwords do not match.';
      resetMessage.style.color = 'red';
      return;
    }

    // Update password
    storedUser.password = newPassword;
    localStorage.setItem('user', JSON.stringify(storedUser));
    resetMessage.textContent = '✅ Password updated successfully!';
    resetMessage.style.color = 'green';
    forgotForm.reset();
    setTimeout(() => {
      resetMessage.textContent = '';
    }, 10000);

  });
});








