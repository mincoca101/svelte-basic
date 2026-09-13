export function initNavbar() {
  const toggler = document.querySelector(".navbar-toggler");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.querySelector(".mobile-menu-close");

  const panels = mobileMenu?.querySelectorAll(".mobile-panel");

  function goToPanel(id: string) {
    if (!panels) return;

    const current = mobileMenu?.querySelector(".mobile-panel.is-active");
    const next = mobileMenu?.querySelector(`[data-panel="${id}"]`);

    if (!next || next === current) return;

    // Mark current as previous (slides left a bit)
    current?.classList.remove("is-active");
    current?.classList.add("is-prev");

    // Show next panel
    next.classList.remove("is-prev");
    next.classList.add("is-active");

    // Clean up old prev after transition
    setTimeout(() => {
      current?.classList.remove("is-prev");
    }, 300);
  }

  function openMobileMenu() {
    mobileMenu?.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Reset to root panel
    panels?.forEach((p) => {
      p.classList.remove("is-active", "is-prev");
    });
    mobileMenu
      ?.querySelector('[data-panel="root"]')
      ?.classList.add("is-active");
  }

  function closeMobileMenu() {
    mobileMenu?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  // Open
  toggler?.addEventListener("click", openMobileMenu);

  // Close
  closeBtn?.addEventListener("click", closeMobileMenu);

  // Next panel
  mobileMenu?.querySelectorAll(".mobile-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = (btn as HTMLElement).dataset.target;
      if (target) goToPanel(target);
    });
  });

  // Back
  mobileMenu?.querySelectorAll(".mobile-back").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = (btn as HTMLElement).dataset.target;
      if (target) goToPanel(target);
    });
  });

  // Desktop dropdown click (optional)
  document.querySelectorAll(".desktop-only .dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = toggle.closest(".has-dropdown");
      parent?.classList.toggle("open");
    });
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
}