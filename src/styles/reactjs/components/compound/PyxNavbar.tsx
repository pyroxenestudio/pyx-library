import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
import { useMemo, useState } from "react";

interface NavbarPropsInterface {
  links: React.ReactElement<{onClick: () => void}>[];
  logo: React.ReactNode;
  callback?: () => void;
}

export function PyxNavbar ({links, logo, callback}: NavbarPropsInterface) {

  const [open, setOpen] = useState(false);

  const linkList = useMemo(() => {
    const list = links.map((link, index) => {
      return <li key={index}>{React.cloneElement(link, {onClick: () => {setOpen(!open)}})}</li>
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
      <button className='pyx-button menu-button' onClick={(e) => {
        e.stopPropagation();
        console.log('PULSADO');
        setOpen(!open);
        if (callback) callback();
      }}>
        {open ? <XMarkIcon className='size-6' /> : <Bars3Icon className='size-6'/>}
      </button>
    </header>
  )
}