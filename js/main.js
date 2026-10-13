const button = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const label = button.querySelector(".menu-label");
const links = [...nav.querySelectorAll("a")];

function setMenu(open) {
  button.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  label.textContent = open ? "Close" : "Menu";
}

button.addEventListener("click", () => {
  setMenu(button.getAttribute("aria-expanded") !== "true");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 63.99rem)").matches) {
      setMenu(false);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    button.focus();
  }
});

const desktopNav = window.matchMedia("(min-width: 64rem)");
desktopNav.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
