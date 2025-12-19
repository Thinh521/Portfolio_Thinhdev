import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "./ui/Border";

export default function Projects() {
  return (
    <Section id="projects">
      <Heading
        title="Projects"
        subtitle="Selected projects showcasing real-world applications and technical expertise"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg
                         border border-neutral-700/40
                         bg-neutral-900 p-6 transition-colors duration-300"
          >
            <div
              className="absolute inset-0 
               translate-x-full group-hover:translate-x-0
               transition-transform duration-500 ease-out
               z-0
               bg-[linear-gradient(-300deg,#ff6525,#ff9601)]"
            />
            <div
              className="absolute inset-0
                           -translate-x-full group-hover:translate-x-0
                           transition-transform duration-700 ease-out
                           z-10 pointer-events-none"
            >
              <Image
                src="/images/shape_1.png"
                alt="Shape"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-20">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-4 line-clamp-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white/10 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm
                             text-white hover:underline"
              >
                <span>View GitHub</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
