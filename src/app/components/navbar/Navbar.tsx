"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export interface NavLinkData {
  title: string,
  path: string,
};

const navLinks: NavLinkData[] = [
  {
    title: "Skills",
    path: "#experience",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={`fixed mx-auto border-b border-b-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] ${
        navbarOpen ? "bg-opacity-100" : "bg-opacity-90"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center md:pl-10 pt-4">
            <div className="rounded-full bg-[#181818] w-12 h-12 relative">
                <Image
                src="/images/mem2.png"
                alt="profile image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                />
            </div>
            <Link
              href={"/"}
              className="text-4xl md:text-6xl text-white font-semibold py-3 pl-3"
              style={{ fontFamily: "Brush Script MT, cursive" }}
            >
                Harold
            </Link>
        </div>

        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
