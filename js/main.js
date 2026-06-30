/* =========================================================================
   Chastity Concierge Nursing — Navigation interactions
   - Mobile menu toggle
   - Accessible dropdown menus (hover on desktop, click/keyboard everywhere)
   ========================================================================= */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  /* ---- Mobile menu open/close ---- */
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---- Dropdowns ---- */
  var dropdownButtons = document.querySelectorAll(".nav-link[aria-haspopup='true']");

  function closeAll(except) {
    dropdownButtons.forEach(function (btn) {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      var dd = btn.nextElementSibling;
      if (dd) dd.classList.remove("is-open");
    });
  }

  dropdownButtons.forEach(function (btn) {
    var dd = btn.nextElementSibling;
    if (!dd) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      closeAll(btn);
      btn.setAttribute("aria-expanded", String(!isOpen));
      dd.classList.toggle("is-open", !isOpen);
    });

    /* Close dropdown when focus leaves the whole item */
    var parentLi = btn.parentElement;
    parentLi.addEventListener("focusout", function (e) {
      if (!parentLi.contains(e.relatedTarget)) {
        btn.setAttribute("aria-expanded", "false");
        dd.classList.remove("is-open");
      }
    });
  });

  /* ---- Close on outside click ---- */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-menu")) {
      closeAll(null);
    }
  });

  /* ---- Close on Escape ---- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll(null);
      if (menu && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  /* ---- Current-year stamp in footer ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
