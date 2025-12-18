import Section from "./ui/Section";
import Heading from "./ui/Heading";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiGit,
  SiFigma,
  SiPostman,
  SiAndroid,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const techLogos = [
  {
    node: <SiReact className="text-[#61DAFB]" />,
    href: "https://reactnative.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    href: "https://nextjs.org",
  },
  {
    node: <SiJavascript className="text-[#F7DF1E]" />,
    href: "https://javascript.info",
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiRedux className="text-[#764ABC]" />,
    href: "https://redux.js.org",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    href: "https://tailwindcss.com",
  },
  {
    node: <SiFirebase className="text-[#FFCA28]" />,
    href: "https://firebase.google.com",
  },
  {
    node: <SiAndroid className="text-[#3DDC84]" />,
    href: "https://developer.android.com",
  },
  {
    node: <SiGit className="text-[#F05032]" />,
    href: "https://git-scm.com",
  },
  {
    node: <SiFigma className="text-[#F24E1E]" />,
    href: "https://figma.com",
  },
  {
    node: <SiPostman className="text-[#FF6C37]" />,
    href: "https://postman.com",
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Heading
        title="Professional skills"
        subtitle="The technologies and tools I use to bring my ideas to life"
      />

      <div className="mt-12">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
          ariaLabel="Technical Skills Portfolio"
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm italic">
          "Always stay updated and learn about the latest technology trends to
          create optimal products."
        </p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-[10px] text-gray-300">
            Clean Code
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-[10px] text-gray-300">
            Performance Optimization
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-[10px] text-gray-300">
            UI/UX Mindset
          </span>
        </div>
      </div>
    </Section>
  );
}
