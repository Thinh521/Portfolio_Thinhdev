import Section from "./ui/Section";
import Heading from "./ui/Heading";

export default function About() {
  return (
    <Section id="about">
      <Heading title="About Me" subtitle="Who I Am" />

      <div>
        {/* Main Introduction */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Xin chào! Tôi là{" "}
            <span className="text-blue-400 font-semibold">
              React Native / Frontend Developer
            </span>{" "}
            với niềm đam mê xây dựng những sản phẩm web và mobile có hiệu năng
            cao, giao diện trực quan và người dùng xuất sắc.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Chuyên môn của tôi tập trung vào{" "}
            <span className="text-gray-200 font-medium">React</span> và{" "}
            <span className="text-gray-200 font-medium">React Native</span>, với
            kinh nghiệm thực tế trong việc phát triển các ứng dụng từ giao diện
            người dùng, tích hợp API, quản lý state, đến tối ưu hóa hiệu năng và
            đảm bảo trải nghiệm mượt mà trên mọi thiết bị.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Tôi tin rằng code tốt không chỉ hoạt động đúng mà còn phải dễ đọc,
            dễ maintain và scalable. Luôn cập nhật các xu hướng công nghệ mới và
            áp dụng best practices vào từng dự án.
          </p>
        </div>

        {/* Skills & Approach */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            What I Bring to the Table
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <div>
                <p className="text-gray-300">
                  <span className="text-sm font-medium text-white">
                    Clean Code:
                  </span>{" "}
                  Viết code rõ ràng, tuân thủ coding standards và dễ dàng mở
                  rộng
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <div>
                <p className="text-gray-300">
                  <span className="text-sm font-medium text-white">
                    Problem Solving:
                  </span>{" "}
                  Phân tích vấn đề kỹ lưỡng và đưa ra giải pháp tối ưu
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <div>
                <p className="text-gray-300">
                  <span className="text-sm font-medium text-white">
                    Collaboration:
                  </span>{" "}
                  Làm việc nhóm hiệu quả, communication tốt với designers và
                  backend developers
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <div>
                <p className="text-gray-300">
                  <span className="text-sm font-medium text-white">
                    Continuous Learning:
                  </span>{" "}
                  Luôn học hỏi công nghệ mới và cải thiện kỹ năng mỗi ngày
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-6">
            Tôi đang tìm kiếm cơ hội để đóng góp vào các dự án thú vị và học hỏi
            từ đội ngũ tài năng.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </Section>
  );
}
