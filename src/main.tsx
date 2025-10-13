import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

// Initialize reveal-on-scroll and keep it working across route changes
const mount = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  const selector = ".reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-fade, .reveal-slow";
  const observeEl = (el: Element) => {
    if (!(el instanceof HTMLElement)) return;
    if (!el.classList.contains("revealed")) observer.observe(el);
  };
  const scan = () => document.querySelectorAll(selector).forEach(observeEl);

  // Initial scan
  scan();

  // Observe DOM changes (for SPA route changes)
  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          if (node.matches(selector)) observeEl(node);
          node.querySelectorAll?.(selector).forEach(observeEl);
        }
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
};

createRoot(rootEl).render(<App />);

// Run after current event loop to ensure DOM ready
setTimeout(mount, 0);
