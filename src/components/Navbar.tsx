"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button/Button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  /* ===== Scroll spy ===== */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 120;

      links.forEach((link) => {
        const sec = document.querySelector(link.href);
        if (!sec) return;

        const top = sec.getBoundingClientRect().top + window.scrollY;
        const height = sec.clientHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== Underline slide (desktop) ===== */
  useEffect(() => {
    if (!listRef.current || !indicatorRef.current) return;

    const index = links.findIndex((l) => l.href === active);
    const item = listRef.current.children[index] as HTMLElement;

    if (!item) return;

    indicatorRef.current.style.width = `${item.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${item.offsetLeft}px)`;
  }, [active]);

  return (
    <>
      <nav
        className={`
                    fixed z-50 transition-all duration-300
                    ${
                      scrolled
                        ? "top-0 left-0 right-0 rounded-none"
                        : "top-6 left-4 right-4 md:left-20 md:right-20 rounded-xl"
                    }
                    backdrop-blur bg-black/60 border border-white/10
                  `}
      >
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <span className="font-bold text-lg tracking-tight">
            thjnh<span className="text-(--primary)">.dev</span>
          </span>

          {/* Desktop menu */}
          <div className="relative hidden md:block">
            <ul ref={listRef} className="flex gap-6 text-sm relative">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`transition px-2 py-4 ${
                      active === link.href
                        ? "text-(--primary)"
                        : "text-white hover:text-(--primary)"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <span
                ref={indicatorRef}
                className="absolute -bottom-2 left-0 h-0.5
                           bg-(--primary) rounded-full
                           transition-all duration-300"
              />
            </ul>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block">
            <Button>Resume</Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ===== Mobile menu overlay ===== */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur
                    transition-opacity duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* ===== Mobile menu panel ===== */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-black
                    border-l border-white/10
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex items-center justify-between">
          <span className="font-bold text-lg">
            thjnh<span className="text-(--primary)">.dev</span>
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-8">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`
            group relative flex items-center
            text-lg
            transition-all duration-300 ease-out
            will-change-transform
            ${
              isActive
                ? "text-(--primary) translate-x-3"
                : "text-white hover:text-(--primary) hover:translate-x-3"
            }
          `}
                >
                  {/* Indicator */}
                  <span
                    className={`
              absolute left-0
              w-2.5 h-2.5 bg-(--primary)
              rotate-45
              transition-all duration-300 ease-out
              ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
              }
            `}
                  />

                  {/* Text */}
                  <span
                    className={`
              relative
              transition-all duration-300 ease-out
              ${isActive ? "ml-6" : "ml-0 group-hover:ml-6"}
            `}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="px-6 mt-10">
          <Button className="w-full">Resume</Button>
        </div>
      </div>
    </>
  );
}
