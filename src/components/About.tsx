import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { Play, Send } from "lucide-react";
import Button from "./ui/Button/Button";

const paragraphs = [
  <>
    Hello! I’m{" "}
    <span className="text-(--primary) font-semibold">Nguyen Phuc Thinh</span>, a{" "}
    <span className="text-(--primary) font-semibold">
      React Native Developer
    </span>
    , focused on building high-performance mobile applications using JavaScript
    with clean, intuitive interfaces and smooth user experiences. In addition, I
    have a solid foundation in Frontend Web development with{" "}
    <span className="text-(--primary) font-semibold">React.js and Next.js</span>
    , allowing me to understand and contribute effectively across both mobile
    and web product workflows.
  </>,
  <>
    My expertise primarily lies in{" "}
    <span className="text-(--primary) font-semibold">React Native</span>, with
    hands-on experience in developing applications from UI implementation and
    API integration to state management, performance optimization, and ensuring
    smooth experiences across a wide range of devices.
  </>,
  <>
    Additionally, I have experience working with{" "}
    <span className="text-(--primary) font-semibold">Blockchain</span>,
    including connecting applications to{" "}
    <span className="text-(--primary) font-semibold">Smart Contracts</span>,
    interacting with and writing data to the blockchain. This enables me to
    build decentralized applications (DApps) and seamlessly integrate blockchain
    functionality into both mobile and web products.
  </>,
  <>
    I believe that good code should not only work correctly but also be clean,
    maintainable, and scalable. I continuously stay up to date with new
    technologies and apply best practices to every project I work on.
  </>,
];

const highlights = [
  {
    title: "Clean Code",
    desc: "Write clear, maintainable code that follows coding standards and is easy to scale.",
  },
  {
    title: "Problem Solving",
    desc: "Analyze problems carefully and deliver optimal, practical solutions.",
  },
  {
    title: "Collaboration",
    desc: "Work effectively in teams with strong communication across designers and backend developers.",
  },
  {
    title: "Continuous Learning",
    desc: "Constantly explore new technologies and improve skills every day.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Heading title="About Me" subtitle="Who I Am" />

      <div className="mb-12 space-y-6">
        {paragraphs.map((content, i) => (
          <p key={i} className="text-sm text-gray-400 leading-relaxed">
            {content}
          </p>
        ))}
      </div>

      <div className="bg-neutral-900 rounded-lg border border-neutral-700/40 p-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          What I Bring to the Table
        </h3>

        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item.title} className="flex gap-2">
              <Play className="w-2 h-2 mt-1 shrink-0 fill-current text-(--primary)" />
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">{item.title}:</span>{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400 mb-6">
          I am seeking opportunities to contribute to impactful projects,
          collaborate with experienced teams, and continue developing my skills
          while delivering high-quality, practical solutions through technology.
        </p>

        <Button leftIcon={<Send size={16} />} href="#contact" className="w-60">
          Let's Work Together
        </Button>
      </div>
    </Section>
  );
}
