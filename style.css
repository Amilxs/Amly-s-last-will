// Split each paragraph into spans
document.querySelectorAll('.reveal-text').forEach(text => {
  const letters = text.innerText.split('');
  text.innerHTML = ''; 

  letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.transitionDelay = (i * 0.02) + "s"; // adjust speed here
    text.appendChild(span);
  });
});

// Reveal letters when section is visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('span').forEach(span => {
        span.classList.add('visible');
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));
