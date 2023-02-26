import { useScroll } from "hooks/useScroll";
import { useRef } from "react";

const NavLogo = () => {
  return (
    <span className="border-solid border-secondary border-2 px-2 py-1 hover:text-secondary hover:bg-darkLogo transition-colors duration-300 cursor-pointer">M</span>
  )
}

const Navigation = () => {
  const nav = useRef<HTMLElement>(null);
  useScroll(nav);
  const linkStyles = "flex items-center mr-4 cursor-pointer h-full hover:text-secondary transition-colors duration-300";


  return (
    <nav className="flex justify-between items-center h-20 shadow-xl fixed w-full top-0 px-8 bg-primary" ref={nav}>
      <NavLogo />
      <ul className="flex h-full items-center">
        <li className={linkStyles}><span className="text-secondary mr-2">01. </span> Home</li>
        <li className={linkStyles}><span className="text-secondary mr-2">02. </span>About</li>
        <li className={linkStyles}><span className="text-secondary mr-2">03. </span>Resume</li>
        <li className={linkStyles}><span className="text-secondary mr-2">04. </span>Projects</li>
        <li className={linkStyles}><span className="text-secondary mr-2">05. </span>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation