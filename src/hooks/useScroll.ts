import { useEffect, useRef } from "react";

export function useScroll(nav: { current: HTMLElement | null }) {
  const prevScrollPos = useRef(window.scrollY);
  const hiddenStyles = "transform: translateY(-100%); transition: transform 0.3s ease-in-out;"
  const showStyles = "transform: translateY(0); transition: transform 0.3s ease-in-out;"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; // Grab current scroll position

      if (nav && nav.current) { // Check if Nav exists
        const current = nav.current;

        if (currentScrollPos > prevScrollPos.current) { // If current scroll position is greater than previous scroll position
          current.setAttribute("style", hiddenStyles);
          prevScrollPos.current = currentScrollPos;
        } else {
          current.setAttribute("style", showStyles);
          prevScrollPos.current = currentScrollPos;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return prevScrollPos;
}