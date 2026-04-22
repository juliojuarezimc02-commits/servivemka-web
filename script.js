const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");
const faqItems = document.querySelectorAll(".faq-item");
const faqButtons = document.querySelectorAll(".faq-question");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;
    const currentSign = button.querySelector(".faq-sign");

    faqItems.forEach((item) => {
      const sign = item.querySelector(".faq-sign");
      if (item !== currentItem) {
        item.classList.remove("active");
        if (sign) sign.textContent = "+";
      }
    });

    const isActive = currentItem.classList.toggle("active");
    currentSign.textContent = isActive ? "−" : "+";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Mensaje enviado de prueba. Luego puedes conectarlo a WhatsApp, correo o Formspree.";
  contactForm.reset();
});
