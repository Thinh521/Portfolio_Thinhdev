import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { skills } from "@/data/skills";

export default function Skills() {
  // Icon mapping cho từng skill category
  const categoryIcons: Record<string, string> = {
    "kỹ năng": "💻",
    "công cụ": "🛠️",
    "ngôn ngữ": "🌐",
    skills: "💻",
    tools: "🛠️",
    languages: "🌐",
  };

  return (
    <Section id="skills">
      <Heading title="Skills" subtitle="Technologies & Tools I Work With" />

      <div className="max-w-6xl mx-auto">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category.toLowerCase()] || "📌"}
                </span>
                <h3 className="font-bold text-xl text-white capitalize">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-700/30 hover:bg-blue-600/20 border border-gray-600/30 hover:border-blue-500/50 rounded-lg text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 cursor-default hover:scale-105"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Constantly learning and expanding my skill set to stay current with
            industry trends
          </p>
        </div>
      </div>
    </Section>
  );
}
