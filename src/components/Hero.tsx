"use client";

import { Github, Facebook, Instagram, Music2 } from "lucide-react";

import TextType from "./TextType";
import Button from "./ui/Button/Button";
import ImageSwiperPage from "./ImageSwiper";

const SOCIALS = [
  {
    href: "https://github.com/Thinh521",
    icon: Github,
    hoverClass: "group-hover:text-white",
  },
  {
    href: "https://www.facebook.com/share/1L94WW4Qsx/",
    icon: Facebook,
    hoverClass: "group-hover:text-[#1877F2]",
  },
  {
    href: "https://www.tiktok.com/@pthjnh_25",
    icon: Music2,
    hoverClass: "group-hover:text-white",
  },
  {
    href: "https://www.instagram.com/ph.thinh_ig",
    icon: Instagram,
    hoverClass: "group-hover:text-pink-500",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-32 md:pt-0">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-5">
          {/* Left content */}
          <div className="flex max-w-2xl flex-col justify-center md:col-span-3">
            <h1 className="mb-3 text-2xl font-bold leading-tight md:text-4xl">
              Hi, I&apos;m{" "}
              <span className="text-(--primary)">Nguyen Phuc Thinh</span>
            </h1>

            <TextType
              as="h2"
              text={[
                "React Native Developer_",
                "Frontend Developer_",
                "Mobile App Engineer_",
              ]}
              className="text-xl font-semibold text-white/90 md:text-2xl"
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={1500}
              loop
            />

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              I aspire to develop my career as a React Native Developer,
              focusing on building high-performance mobile applications with
              intuitive interfaces and optimized user experiences. With a strong
              foundation in Front-End development, I continuously learn and
              enhance my skills alongside related technologies to create
              complete, modern applications that deliver real-world value.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-2">
              {SOCIALS.map(({ href, icon: Icon, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2"
                >
                  <Icon
                    className={`h-5 w-5 text-gray-400 transition-all duration-300 group-hover:scale-110 ${hoverClass}`}
                  />
                </a>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button>View Projects</Button>
              <Button>Contact Me</Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center md:col-span-2">
            <ImageSwiperPage />
          </div>
        </div>
      </div>
    </section>
  );
}
