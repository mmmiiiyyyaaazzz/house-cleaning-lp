document.addEventListener("DOMContentLoaded", () => {

  const targets = document.querySelectorAll(".js-fade");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }

    });

  }, {
    threshold: 0.15
  });

  targets.forEach(target => {
    observer.observe(target);
  });

});