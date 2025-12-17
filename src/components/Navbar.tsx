"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-300
        ${scrolled ? "top-0 left-0 right-0" : "top-6 left-20 right-20"}
        backdrop-blur bg-black/60 border border-white/10
        rounded-xl
      `}
    >
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold text-lg tracking-tight">
          thjnh<span className="text-white/60">.dev</span>
        </span>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative transition
                  ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 text-sm font-medium
                     border border-white/20 rounded-lg
                     hover:bg-white hover:text-black transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
