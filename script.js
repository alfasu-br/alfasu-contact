const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 150}ms`;
  requestAnimationFrame(() => item.classList.add("is-visible"));
});

document.querySelectorAll(".quick-link, .link-row, .feature-card, .map-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
