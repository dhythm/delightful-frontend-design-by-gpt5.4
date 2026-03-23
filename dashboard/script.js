const metricPanels = document.querySelectorAll(".metric-panel");

metricPanels.forEach((panel, index) => {
  panel.animate(
    [
      { opacity: 0, transform: "translateY(20px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 520,
      delay: index * 70,
      fill: "both",
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    }
  );
});

const panels = document.querySelectorAll(".panel, .hero-strip");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 580,
            fill: "both",
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          }
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

panels.forEach((panel) => observer.observe(panel));
