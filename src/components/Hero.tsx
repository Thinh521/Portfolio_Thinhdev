"use client";

import Galaxy from "@/components/Galaxy";
import Image from "next/image";
import TextType from "./TextType";
import Button from "./ui/Button/Button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Galaxy background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          density={0.4}
          starSpeed={0.12}
          glowIntensity={0.15}
          rotationSpeed={0.015}
          twinkleIntensity={0.08}
          mouseRepulsion={false}
          mouseInteraction={false}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center pt-40 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 w-full">
          {/* Left content */}
          <div className="md:col-span-3 flex flex-col justify-center max-w-2xl">
            <h1 className="text-xl md:text-4xl font-bold leading-tight mb-3">
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
              className="text-2xl md:text-3xl font-semibold text-white/90"
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={1500}
              loop
            />

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              I aspire to develop my career as a React Native Developer,
              focusing on building high-performance mobile applications with
              intuitive interfaces and optimized user experiences. With a strong
              foundation in Front-End development, I continuously learn and
              enhance my skills alongside related technologies to create
              complete, modern applications that deliver real-world value.
            </p>

            <div className="mt-8 flex gap-4">
              <Button type="submit">View Projects</Button>
              <Button type="submit">Contact Me</Button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden
                    border border-white/20 backdrop-blur"
            >
              <Image
                src="/images/avatar.png"
                alt="Thịnh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
