const revealTargets = document.querySelectorAll("[data-reveal]");

revealTargets.forEach((element, index) => {
  element.style.setProperty("--delay", `${Math.min(index * 80, 360)}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealTargets.forEach((element) => revealObserver.observe(element));

const heroMedia = document.querySelector("[data-parallax]");

if (heroMedia && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const updateParallax = () => {
    const offset = Math.min(window.scrollY * 0.06, 28);
    heroMedia.style.transform = `scale(1.06) translateY(${offset}px)`;
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}
