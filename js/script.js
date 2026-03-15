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


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {

    const targetId = this.getAttribute("href");

    if(targetId === "#") return;

    const target = document.querySelector(targetId);

    if(!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });

  });
});
