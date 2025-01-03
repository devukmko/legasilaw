"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/core/container";
import Logo from "@/components/core/logo";
import { MenuButton, Menu, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [activeHash, setActiveHash] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const [isAtTop, setIsAtTop] = useState<boolean>(false);
  const buttonARef = useRef<HTMLButtonElement | null>(null);

  const handleSmoothScroll = (hash: string) => {
    const element = hash.startsWith("#")
      ? document.querySelector(hash)
      : document.documentElement;

    if (!element) {
      console.warn(`No element found for selector: ${hash}`);
      return;
    }

    element.scrollIntoView({ behavior: "smooth" });
    // Update URL without causing navigation
    if (hash.startsWith("#")) {
      window.history.replaceState(null, "", hash);
    }
  };

  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let foundActiveHash = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundActiveHash = `#${section.id}`;
        }
      });

      if (foundActiveHash !== activeHash) {
        setActiveHash(foundActiveHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    console.log(pathname);
    if (pathname !== "/") {
      setIsAtTop(false);
    }
  }, [pathname]);

  return (
    <div
      // className={`navbar bg-base-100 ${pathname === '/' ? 'fixed' : 'sticky'} top-0 z-20 transition-transform ${
      className={`navbar bg-base-100 ${
        pathname === "/" ? "fixed" : "sticky"
      } top-0 z-20 transition-transform ${
        isAtTop ? "-translate-y-full" : "translate-y-0 shadow-md"
      }`}
    >
      <Container>
        <div className="lg:flex flex-1">
          <Link
            href="/#"
            onClick={(e) => {
              router.push("/#");
              e.preventDefault();
              handleSmoothScroll("");
              setActiveHash("");
            }}
          >
            <Logo src="/logo.svg" alt="Logo" width={80} height={40} />
          </Link>
        </div>

        <div className="flex-none md:hidden">
          <Menu>
            <MenuButton as={Fragment} ref={buttonARef}>
              <div className="cursor-pointer btn btn-ghost btn-circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom"
              transition
              className="origin-top w-40 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-50 bg-white shadow-lg"
            >
              {[
                { href: "about-us", label: "Tentang Kami" },
                { href: "#services", label: "Layanan" },
                { href: "#our-people", label: "Tim Kami" },
                { href: "#contact", label: "Kontak" },
              ].map((item) => (
                <MenuItem key={item.href}>
                  {({ focus }) => (
                    <Link
                      href={`/${item.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/${item.href}`);
                        handleSmoothScroll(item.href);
                        setActiveHash(item.href);
                        if (buttonARef.current) {
                          buttonARef.current.click();
                        }
                      }}
                      className={`block px-4 py-2 text-sm ${
                        activeHash === item.href || focus
                          ? "font-bold text-primary"
                          : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              { href: "about-us", label: "Tentang Kami" },
              { href: "#services", label: "Layanan" },
              { href: "#our-people", label: "Tim Kami" },
              { href: "#contact", label: "Kontak" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/${item.href}`);
                    handleSmoothScroll(item.href);
                    setActiveHash(item.href);
                  }}
                  className={`btn-primary ${
                    activeHash === item.href
                      ? "font-bold text-primary"
                      : "font-bold text-black hover:text-primary focus:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
