import clsx from "clsx";
import { useMemo } from "react";

interface NavbarPropsInterface {
  links: React.ReactElement[];
  logo: React.ReactNode;
  open: boolean;
  toggle: (open: boolean) => void;
}

export function PyxNavbar ({links, logo, toggle ,open = false}: NavbarPropsInterface) {

  const linkList = useMemo(() => {
    const list = links.map((link, index) => {
      return <li key={index}>{link}</li>
    });
    return <ul>{list}</ul>
  }, []);

  const headerClassName = clsx('pyx-navbar', {open});

  return (
    <header className={headerClassName}>
      <h1>{logo}</h1>
      <nav>
        {linkList}
      </nav>
      <button className='pyx-button menu-button' onClick={() => {toggle(!open)}}>
        Toggle
      </button>
    </header>
  )
}