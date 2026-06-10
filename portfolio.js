/* Scroll-reveals, tellende cijfers, subtiele parallax en licht/donker
   schakelaar. Respecteert prefers-reduced-motion. */
(function () {
  var root = document.documentElement;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- licht/donker thema ---------- */
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- tellende cijfers ---------- */
  function formatValue(value, decimals) {
    return value.toFixed(decimals).replace(".", ",");
  }

  function renderCount(el, progress) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    el.textContent = prefix + formatValue(target * progress, decimals) + suffix;
  }

  function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    if (reducedMotion.matches) { renderCount(el, 1); return; }
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      renderCount(el, eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* zet meteen eindwaarden neer zodat er nooit lege cijfers staan */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    renderCount(el, 1);
    el.dataset.counted = "";
  });

  /* ---------- reveals + count-trigger ---------- */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      entry.target.querySelectorAll("[data-count]").forEach(function (el) {
        if (!el.dataset.counted) animateCount(el);
      });
      if (entry.target.hasAttribute("data-count") && !entry.target.dataset.counted) {
        animateCount(entry.target);
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll(".reveal, [data-count]").forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- subtiele parallax ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var ticking = false;

  function applyParallax() {
    ticking = false;
    if (reducedMotion.matches) {
      parallaxEls.forEach(function (el) { el.style.transform = ""; });
      return;
    }
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      var offset = (center - vh / 2) / vh;
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      el.style.transform = "translateY(" + (offset * speed * -100).toFixed(1) + "px)";
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyParallax);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  applyParallax();
})();
