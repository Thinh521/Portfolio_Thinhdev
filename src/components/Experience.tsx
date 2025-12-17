import Heading from "./ui/Heading";
import Section from "./ui/Section";

export default function Experience() {
  const experiences = [
    {
      role: "Mobile Developer Intern – React Native",
      company: "Pione Group",
      period: "06/2025 – 12/2025",
      responsibilities: [
        "Phát triển ứng dụng mobile bằng React Native (JavaScript)",
        "Xây dựng giao diện theo thiết kế Figma, đảm bảo đúng UI/UX",
        "Kết nối RESTful API với backend, xử lý dữ liệu JSON",
        "Tích hợp Firebase (Firestore, FCM) và các tính năng mobile",
        "Tích hợp Smart Contract để ký giao dịch và lưu dữ liệu on-chain",
        "Build ứng dụng Android (APK) và test trên Android Emulator",
        "Làm việc nhóm, quản lý source code bằng GitHub",
      ],
    },
  ];

  const education = {
    degree: "Cao Đẳng Công Nghệ Thông Tin TP.HCM",
    major: "Chuyên ngành thiết kế trang web",
    period: "2023 - 2025",
    achievement: "Tốt nghiệp Loại Giỏi – GPA: 3.35 / 4.0",
  };

  const competitions = [
    {
      name: "Pionedream Hackathon AI & Blockchain",
      period: "08/2025 - 12/2025",
      organizer: "Pione Group",
    },
    {
      name: "Cuộc thi Code Việt",
      period: "11/2024",
      organizer: "Trường Cao Đẳng Công Nghệ Thông Tin TP.HCM",
      topics: "HTML, CSS, CSDL, Hệ quản trị CSDL, Mạng máy tính, JAVA",
    },
  ];

  return (
    <Section id="experience">
      <Heading
        title="Experience & Education"
        subtitle="Career & Education Journey"
      />

      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">💼</span> Work Experience
          </h3>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-700/50 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">🎓</span> Education
          </h3>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {education.degree}
                </h4>
                <p className="text-blue-400">{education.major}</p>
              </div>
              <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-700/50 px-3 py-1 rounded-full w-fit">
                {education.period}
              </span>
            </div>
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-300 font-medium">
                🏆 {education.achievement}
              </p>
            </div>
          </div>
        </div>

        {/* Competitions Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">🏅</span> Competitions & Awards
          </h3>

          <div className="space-y-4">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-5 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {comp.name}
                  </h4>
                  <span className="text-gray-400 text-sm mt-1 md:mt-0 bg-gray-700/50 px-3 py-1 rounded-full w-fit">
                    {comp.period}
                  </span>
                </div>
                <p className="text-blue-400 text-sm mb-2">{comp.organizer}</p>
                {comp.topics && (
                  <p className="text-gray-400 text-sm">
                    📚 Topics: {comp.topics}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
