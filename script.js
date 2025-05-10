// Tabs
document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.add("hidden"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.remove("hidden");
  });
});

// Slideshow
const images = [
  "https://placehold.co/300x200?text=Cake",
  "https://placehold.co/300x200?text=Cookie",
  "https://placehold.co/300x200?text=Bread",
];
let slideIndex = 0;

document.getElementById("nextSlide").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % images.length;
  document.getElementById("slide").src = images[slideIndex];
});

// Magic Button Interactions
const magicBtn = document.getElementById("magicBtn");
const magicMessage = document.getElementById("magicMessage");

magicBtn.addEventListener("click", () => {
  magicMessage.textContent = "You clicked the magical muffin button!";
});

magicBtn.addEventListener("dblclick", () => {
  magicMessage.textContent =
    "🎉 DOUBLE click! You found the secret donut portal!";
});

// Form Validation
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  feedback.textContent = "";

  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters long.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "You're signed up for sweet news!";
});

// Real-time feedback
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "green";
  }
});
