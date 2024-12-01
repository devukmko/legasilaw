'use client';

import { useEffect, useState } from "react";
import Container from "@/components/core/container";
import Logo from "@/components/core/logo";
import { MenuButton, Menu, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from 'react'

const Header = () => {
  const [activeHash, setActiveHash] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleSmoothScroll = (hash: string) => {
    const element = hash ? document.querySelector(hash) : document.documentElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar bg-base-100 sticky top-0 z-50 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="lg:flex flex-1">
            {/* Logo for Desktop */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("");
                setActiveHash("");
              }}
            >
              <Logo src="/logo.svg" alt="Logo" width={80} height={40} />
            </a>
        </div>
        
        <div className="flex-none md:hidden">
            <Menu>
                <MenuButton as={Fragment}>
                   <div className="cursor-pointer btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                   </div>
                </MenuButton>
                <MenuItems 
                   anchor="bottom"
                   transition
                   className="origin-top w-40 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-50 bg-white"
                >
                  {[
                    { href: "#about-us", label: "About Us" },
                    { href: "#services", label: "Services" },
                    { href: "#our-people", label: "Our People" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <MenuItem key={item.href}>
                      
                      {({ focus }) => (
                    <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSmoothScroll(item.href);
                          setActiveHash(item.href);
                        }}
                        className={`block px-4 py-2 text-sm ${activeHash === item.href || focus ? "font-bold text-secondary" : "text-black"}`}
                      >
                        {item.label}
                      </Link>
                      )}
                       
                    </MenuItem>
                  ))}
                </MenuItems>
          </Menu>
        </div>


        <div className="fixed top-24 w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
      
        <div className="flex-none hidden lg:flex">
          {/* Navigation Links */}
          <ul className="menu menu-horizontal px-1">
            {[
              { href: "#about-us", label: "About Us" },
              { href: "#services", label: "Services" },
              { href: "#our-people", label: "Our People" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item.href);
                    setActiveHash(item.href);
                  }}
                  className={`${
                    activeHash === item.href
                      ? "font-bold text-secondary"
                      : "font-bold text-black hover:text-secondary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
