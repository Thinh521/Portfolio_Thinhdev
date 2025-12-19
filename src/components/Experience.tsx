import {
  Briefcase,
  GraduationCap,
  Award,
  Play,
  Github,
  ArrowRight,
} from "lucide-react";
import Heading from "./ui/Heading";
import Section from "./ui/Section";

export default function Experience() {
  const experiences = [
    {
      role: "Mobile Developer Intern – React Native",
      company: "Pione Group",
      period: "06/2025 – 12/2025",
      responsibilities: [
        "Developed mobile applications using React Native (JavaScript)",
        "Implemented UI based on Figma designs with strong UX focus",
        "Integrated RESTful APIs and handled JSON data",
        "Worked with Firebase (Firestore, FCM) for real-time features",
        "Integrated Smart Contracts for transaction signing and on-chain data",
        "Built Android APKs and tested on Android Emulator",
        "Collaborated in a team environment using GitHub for version control",
      ],
    },
  ];

  const education = {
    degree: "HCMC College of Information Technology",
    major: "Web Design & Development",
    period: "2023 – 2025",
    achievement: "Graduated with Distinction – GPA: 3.35 / 4.0",
  };

  const competitions = [
    {
      name: "Pionedream Hackathon – AI & Blockchain",
      period: "08/2025 – 12/2025",
      organizer: "Pione Group",
      description:
        "DApps trace agricultural products on a blockchain platform, ensuring transparency and preventing data tampering.",
      responsibilities: [
        "Developed mobile UI using React Native, optimized user experience",
        "Built authentication and account management features",
        "Integrated RESTful API and smart contracts for on-chain data storage",
        "Implemented QR Code scanning to trace product lifecycle",
        "Ensured data immutability and transparency using blockchain",
      ],
      technologies:
        "React Native (JavaScript), RESTful API, Smart Contract Integration, Blockchain (Pione Zero Chain), QR Code",
      github: "https://github.com/Thinh521/Blockchain_Farm",
    },
    {
      name: "Vietnam Coding Competition",
      period: "11/2024",
      organizer: "Ho Chi Minh City College of IT",
      description:
        "Academic programming competition covering foundational and advanced IT knowledge.",
      technologies: "HTML, CSS, Databases, Networking, Java",
    },
  ];

  return (
    <Section id="experience">
      <Heading
        title="Experience & Education"
        subtitle="Professional experience, education, and achievements"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* EXPERIENCE */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-(--primary)" />
            Work Experience
          </h3>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl border border-neutral-700/40 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h4>
                  <p className="text-(--primary) font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-xs mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <Play className="w-2 h-2 text-(--primary) mt-1 shrink-0 fill-current" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-(--primary)" />
            Education
          </h3>

          <div className="bg-neutral-900 rounded-xl border border-neutral-700/40 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {education.degree}
                </h4>
                <p className="text-(--primary)">{education.major}</p>
              </div>
              <span className="text-gray-400 text-xs mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                {education.period}
              </span>
            </div>

            <div className="mt-4 bg-white/10 rounded-lg p-3">
              <p className="text-white text-sm font-medium flex items-center gap-2">
                <Award className="w-4 h-4 text-(--primary)" />
                {education.achievement}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-2">
          <Award className="w-6 h-6 text-(--primary)" />
          Competitions & Projects
        </h3>

        <div className="relative border-l-2 border-neutral-700/40 pl-8 space-y-14">
          {competitions.map((comp, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-2.75 top-2 w-5 h-5 rounded-full bg-(--primary) shadow-[0_0_16px_var(--primary)]" />
              <div className="bg-neutral-900 rounded-xl border border-neutral-700/40 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {comp.name}
                  </h4>
                  <span className="text-gray-400 text-xs mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {comp.period}
                  </span>
                </div>
                <p className="text-(--primary) text-sm font-medium mb-2">
                  {comp.organizer}
                </p>
                {comp.description && (
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {comp.description}
                  </p>
                )}
                {comp.responsibilities && (
                  <div className="mb-4">
                    <p className="text-white text-sm font-medium mb-2">
                      Role & Responsibilities:
                    </p>
                    <ul className="space-y-2">
                      {comp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <Play className="w-2 h-2 text-(--primary) mt-1 shrink-0 fill-current" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {comp.technologies && (
                  <p className="text-gray-400 text-sm mb-3">
                    <span className="text-white font-medium">
                      Technologies:
                    </span>{" "}
                    {comp.technologies}
                  </p>
                )}
                {comp.github && (
                  <a
                    href={comp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                                group inline-flex items-center gap-2
                                text-sm text-white
                                transition-colors duration-300
                                hover:text-(--primary)
                              "
                  >
                    <Github
                      size={14}
                      className="transition-colors duration-300"
                    />
                    <span className="transition-colors duration-300">
                      Github Repository
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-all duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
