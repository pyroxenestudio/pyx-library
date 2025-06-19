import { useMemo } from "react";

const NavBarStyle = {}

interface NavbarPropsInterface {
  links: React.ReactElement[];
  logo: React.ReactNode;
}

function PyxNavbar ({links, logo}: NavbarPropsInterface) {

  const linkList = useMemo(() => {
    const list = links.map((link) => {
      return <li>{link}</li>
    });
    return <ul>{list}</ul>
  }, []);

  return (
    <header className='pyx-navbar'>
      <h1>{logo}</h1>
      <nav>
        {linkList}
      </nav>
      <button className='pyx-button menu-button'>
        Toggle
      </button>
    </header>
  )
}

export default PyxNavbar;