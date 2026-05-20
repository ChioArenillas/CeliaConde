import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // 🔥 clave
}