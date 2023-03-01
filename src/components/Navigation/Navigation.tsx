import { useScroll } from "hooks/useScroll";
import { useRef, useState } from "react";
import cx from "classnames";
import { useWindow } from "hooks/useWindow";

const NavLogo = () => {
  return (
    <span className="border-solid border-secondary border-2 px-2 py-1 hover:text-secondary hover:bg-darkLogo transition-colors duration-300 cursor-pointer">M</span>
  )
}

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="flex fixed top-0 h-20 z-40 w-full justify-between items-center px-8 bg-primary transition-transform duration-700">
        <NavLogo />

        <button className="bg-primary shadow-2xl" onClick={toggleIsOpen}>
          <div className="w-10 h-1 bg-secondary mb-2"></div>
          <div className="w-10 h-1 bg-secondary mb-2"></div>
          <div className="w-10 h-1 bg-secondary"></div>
        </button>
      </nav>

      <div
        className={
          cx("flex flex-col fixed right-0 top-0 h-full w-2/3 shadow-xl z-30 bg-primary transition-transform duration-700",
            {
              "translate-x-full ": !isOpen,
              "translate-x-0": isOpen,
            })
        }>

        <ul className="mt-20 ml-10">
          <li className={linkStyles}><span className="text-secondary mr-2">01. </span> Home</li>
          <li className={linkStyles}><span className="text-secondary mr-2">02. </span>About</li>
          <li className={linkStyles}><span className="text-secondary mr-2">03. </span>Resume</li>
          <li className={linkStyles}><span className="text-secondary mr-2">04. </span>Projects</li>
          <li className={linkStyles}><span className="text-secondary mr-2">05. </span>Contact</li>
        </ul>
      </div>
    </>
  )
}

const linkStyles = "flex items-center mr-4 cursor-pointer h-full hover:text-secondary transition-colors duration-300";
const Navigation = () => {
  const windowWidth = useWindow();
  const nav = useRef<HTMLElement>(null);
  useScroll(nav);

  if (windowWidth < 768) {
    return <MobileNavBar />
  }

  // Collapsible nav menu for mobile
  return <nav
    className="flex fixed z-40 right-0 top-0 shadow-xl justify-between items-center h-20 w-full px-8 bg-primary"
    ref={nav}>

    <NavLogo />

    <ul className="flex h-full items-center">
      <li className={linkStyles}><span className="text-secondary mr-2">01. </span> Home</li>
      <li className={linkStyles}><span className="text-secondary mr-2">02. </span>About</li>
      <li className={linkStyles}><span className="text-secondary mr-2">03. </span>Resume</li>
      <li className={linkStyles}><span className="text-secondary mr-2">04. </span>Projects</li>
      <li className={linkStyles}><span className="text-secondary mr-2">05. </span>Contact</li>
    </ul>
  </nav>
}

export default Navigation