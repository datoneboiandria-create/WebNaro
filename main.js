
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const whatsappNumber = "995533333916";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const projectType = document.getElementById("projectType").value;
  const details = document.getElementById("projectDetails").value.trim();

  if (!name || !phone || !projectType || !details) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  const message = [
    "Hello WebNaro! I would like to order a website.",
    "",
    "Name: " + name,
    "My phone: " + phone,
    "Website type: " + projectType,
    "",
    "Project details:",
    details
  ].join("\n");

  const whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  formStatus.textContent =
    "Opening WhatsApp. Please press Send to deliver your inquiry.";

  window.open(whatsappLink, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  if (
    !agencyEmail ||
    agencyEmail === "YOUR_EMAIL@example.com" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(agencyEmail)
  ) {
    formStatus.textContent =
      "The contact form needs your business email. Replace YOUR_EMAIL@example.com in script.js with your real email address.";

    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const projectType = document.getElementById("projectType").value;
  const details = document.getElementById("projectDetails").value.trim();

  if (!name || !email || !projectType || !details) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  const subject = "New WebNaro project inquiry";

  const message = [
    "Hello WebNaro!",
    "",
    "I would like to discuss a website project.",
    "",
    "Name: " + name,
    "Customer email: " + email,
    "Project type: " + projectType,
    "",
    "Project details:",
    details,
    "",
    "Sent through the WebNaro website."
  ].join("\n");

  const mailtoLink =
    "mailto:" + agencyEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message);

  formStatus.textContent =
    "Your email app should open with your inquiry ready to send. Please review it and press Send.";

  window.location.href = mailtoLink;
});
