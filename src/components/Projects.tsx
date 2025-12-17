import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Heading title="Projects" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="text-sm underline"
            >
              View GitHub →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
