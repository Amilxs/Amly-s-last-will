function animateText(element) {
  const text = element.getAttribute("data-text");
  element.textContent = ""; 
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i === text.length) {
      clearInterval(interval);
    }
  }, 60); // speed of typing
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("done")) {
      entry.target.style.opacity = 1;
      animateText(entry.target);
      entry.target.classList.add("done");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".animated-text").forEach(el => {
  observer.observe(el);
});
