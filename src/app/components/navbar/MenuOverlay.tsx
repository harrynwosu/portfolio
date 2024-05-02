import React from "react";
import NavLink from "./NavLink";
import { NavLinkData } from "./Navbar";

type MenuOverlayProps = {
  links: NavLinkData[]
};

const MenuOverlay = ({ links } : MenuOverlayProps) => {
  return (
    <ul className="flex flex-col md:hidden py-4 items-center">
      {links.map((link: NavLinkData, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
