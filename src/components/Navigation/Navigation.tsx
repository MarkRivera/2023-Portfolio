import { useScroll } from "hooks/useScroll";
import { useRef, useState } from "react";
import cx from "classnames";
import { useWindow } from "hooks/useWindow";

const NavLogo = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span className="border-solid border-secondary border-2 px-2 py-1 hover:text-secondary hover:bg-darkLogo transition-colors duration-300 cursor-pointer" onClick={handleLogoClick}>M</span>
  )
}

const MobileNavBar = ({ navItems }: { navItems: JSX.Element[] }) => {
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
          {navItems}
        </ul>
      </div>
    </>
  )
}

const linkStyles = "flex items-center mr-4 cursor-pointer h-full hover:text-secondary transition-colors duration-300";
const Navigation = () => {
  const links = [
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]
  const windowWidth = useWindow();
  const nav = useRef<HTMLElement>(null);
  useScroll(nav);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navItems = links.map((link, index) => {
    return <li key={index} className={linkStyles} onClick={() => handleNavClick(link.id)}><span className="text-secondary mr-2">0{index + 1}. </span>{link.name}</li>
  })

  if (windowWidth < 768) {
    return <MobileNavBar navItems={navItems} />
  }

  // Collapsible nav menu for mobile
  return <nav
    className="flex fixed z-40 right-0 top-0 shadow-xl justify-between items-center h-20 w-full px-8 bg-primary"
    ref={nav}>

    <NavLogo />

    <ul className="flex h-full items-center">
      {navItems}
    </ul>
  </nav>
}

export default Navigation