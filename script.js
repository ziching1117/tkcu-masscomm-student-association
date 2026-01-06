(function () {
  const body = document.body;
  const toggleBtn = document.querySelector(".nav-toggle");

  // Mobile: open/close main nav
  toggleBtn?.addEventListener("click", (e) => {
    const isOpen = body.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    e.stopPropagation();
  });

  // Click-to-toggle dropdowns (desktop + mobile)
  const dropdownButtons = document.querySelectorAll(".has-sub > button");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const li = btn.closest(".has-sub");
      if (!li) return;

      // Same level: only one open
      const parentList = li.parentElement;
      if (parentList) {
        parentList.querySelectorAll(":scope > .has-sub.open").forEach((sib) => {
          if (sib !== li) {
            sib.classList.remove("open");
            const sibBtn = sib.querySelector(":scope > button");
            sibBtn?.setAttribute("aria-expanded", "false");
          }
        });
      }

      // Toggle current
      const willOpen = !li.classList.contains("open");
      li.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));

      e.stopPropagation();
    });
  });

  // Click outside: close everything
  document.addEventListener("click", (e) => {
    const nav = document.querySelector(".nav");
    const inNav = nav?.contains(e.target);
    const inToggle = toggleBtn?.contains(e.target);

    if (!inNav && !inToggle) {
      body.classList.remove("nav-open");
      toggleBtn?.setAttribute("aria-expanded", "false");

      document.querySelectorAll(".has-sub.open").forEach((li) => {
        li.classList.remove("open");
        const b = li.querySelector(":scope > button");
        b?.setAttribute("aria-expanded", "false");
      });
    }
  });

  // On resize: close menus to avoid stuck states
  window.addEventListener("resize", () => {
    body.classList.remove("nav-open");
    toggleBtn?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".has-sub.open").forEach((li) => {
      li.classList.remove("open");
      const b = li.querySelector(":scope > button");
      b?.setAttribute("aria-expanded", "false");
    });
  });
})();

