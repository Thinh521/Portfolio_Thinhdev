import { Briefcase, GraduationCap, Award, Play } from "lucide-react";
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
    degree: "Ho Chi Minh City College of Information Technology",
    major: "Web Design & Development",
    period: "2023 – 2025",
    achievement: "Graduated with Distinction – GPA: 3.35 / 4.0",
  };

  const competitions = [
    {
      name: "Pionedream Hackathon – AI & Blockchain",
      period: "08/2025 – 12/2025",
      organizer: "Pione Group",
    },
    {
      name: "Vietnam Coding Competition",
      period: "11/2024",
      organizer: "Ho Chi Minh City College of IT",
      topics: "HTML, CSS, Databases, Networking, Java",
    },
  ];

  return (
    <Section id="experience">
      <Heading
        title="Experience & Education"
        subtitle="Professional experience, education, and achievements"
      />

      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN – EXPERIENCE */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-(--primary)" />
            Work Experience
          </h3>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700/40 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
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
                    <Play className="w-3 h-3 text-(--primary) mt-1 shrink-0 fill-current" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN – EDUCATION + COMPETITIONS */}
        <div className="space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-(--primary)" />
              Education
            </h3>

            <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700/40 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {education.degree}
                  </h4>
                  <p className="text-(--primary)">{education.major}</p>
                </div>
                <span className="text-gray-400 text-xs mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  {education.period}
                </span>
              </div>

              <div className="mt-4 bg-white/10 rounded-lg p-3">
                <p className="text-white font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-(--primary)" />
                  {education.achievement}
                </p>
              </div>
            </div>
          </div>

          {/* Competitions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-(--primary)" />
              Competitions & Awards
            </h3>

            <div className="space-y-4">
              {competitions.map((comp, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700/40 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {comp.name}
                    </h4>
                    <span className="text-gray-400 text-xs mt-2 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                      {comp.period}
                    </span>
                  </div>
                  <p className="text-(--primary) text-sm mb-2">
                    {comp.organizer}
                  </p>
                  {comp.topics && (
                    <p className="text-gray-400 text-sm">
                      Topics: {comp.topics}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
