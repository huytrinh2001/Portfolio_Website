(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (reduce) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
  );

  reveals.forEach(function (el) {
    io.observe(el);
  });
})();
