const trigger = document.querySelectorAll(".faq-accordion__title");
const content = document.querySelectorAll(".faq-accordion__content");

window.addEventListener("load", (event) => {
  content.forEach((el, index) => {
    const height = el.scrollHeight;
    el.style.setProperty("--max-height", height + "px");
  });
});

trigger.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    event.target.classList.toggle("is-open");
    event.target.nextElementSibling.classList.toggle("is-open");
  });
});
