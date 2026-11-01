// Vogue District interactions
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", navigation.classList.contains("open"));
  });
}

document.querySelectorAll(".newsletter-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.parentElement.querySelector(".form-message");
    if (message) message.textContent = "You're on the list. Thanks for joining the District.";
    form.reset();
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = contactForm.querySelector(".form-message");
    if (message) message.textContent = "Thank you! This demo form is ready to connect to an email service.";
    contactForm.reset();
  });
}

// Subtle reveal animation as sections enter the viewport
const revealItems = document.querySelectorAll(".journal-card, .collection-item, .trend-row, .feature-card");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}
