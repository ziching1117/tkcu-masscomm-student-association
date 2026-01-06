(function () {
  const toggleBtn = document.querySelector(".nav-toggle");
  const body = document.body;

  // Mobile: open/close main nav
  toggleBtn?.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Mobile: open/close dropdowns by clicking buttons
  const dropdownButtons = document.querySelectorAll(".has-sub > button");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // only apply on mobile layout
      if (window.matchMedia("(max-width: 860px)").matches) {
        const li = btn.closest(".has-sub");
        const isOpen = li.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
        e.stopPropagation();
      }
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    if (!window.matchMedia("(max-width: 860px)").matches) return;
    const nav = document.querySelector(".nav");
    const inNav = nav?.contains(e.target);
    const inBtn = toggleBtn?.contains(e.target);

    if (!inNav && !inBtn) {
      body.classList.remove("nav-open");
      toggleBtn?.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".has-sub.open").forEach((li) => li.classList.remove("open"));
      document.querySelectorAll(".has-sub > button[aria-expanded='true']").forEach((b) => b.setAttribute("aria-expanded", "false"));
    }
  });

  // On resize: reset mobile states to avoid stuck open
  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 860px)").matches) {
      body.classList.remove("nav-open");
      toggleBtn?.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".has-sub.open").forEach((li) => li.classList.remove("open"));
      document.querySelectorAll(".has-sub > button[aria-expanded='true']").forEach((b) => b.setAttribute("aria-expanded", "false"));
    }
  });
})();

