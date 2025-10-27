document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll('a[href^="#"]');
  btns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(btn.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
});