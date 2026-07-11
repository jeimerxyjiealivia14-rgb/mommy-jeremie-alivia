document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggleButton = document.getElementById("memory-toggle");
  const memoryCard = document.getElementById("memory-card");

  if (toggleButton && memoryCard) {
    toggleButton.addEventListener("click", () => {
      const isHidden = memoryCard.hasAttribute("hidden");
      memoryCard.hidden = !isHidden;
      toggleButton.textContent = isHidden ? "Hide sweet memory" : "Show a sweet memory";
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
