import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { Play } from "lucide-react";
import Button from "./ui/Button/Button";

export default function About() {
  return (
    <Section id="about">
      <Heading title="About Me" subtitle="Who I Am" />

      <div>
        <div className="mb-12">
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Hello! I’m{" "}
            <span className="text-(--primary) font-semibold">
              Nguyen Phuc Thinh
            </span>
            , a{" "}
            <span className="text-(--primary) font-semibold">
              React Native Developer
            </span>
            , focused on building high-performance mobile applications using
            JavaScript with clean, intuitive interfaces and smooth user
            experiences. In addition, I have a solid foundation in Frontend Web
            development with{" "}
            <span className="text-(--primary) font-semibold">
              React.js and Next.js
            </span>
            , allowing me to understand and contribute effectively across both
            mobile and web product workflows.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            My expertise primarily lies in{" "}
            <span className="text-(--primary) font-semibold">React Native</span>
            , with hands-on experience in developing applications from UI
            implementation and API integration to state management, performance
            optimization, and ensuring smooth experiences across a wide range of
            devices.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Additionally, I have experience working with{" "}
            <span className="text-(--primary) font-semibold">Blockchain</span>,
            including connecting applications to{" "}
            <span className="text-(--primary) font-semibold">
              Smart Contracts
            </span>
            , interacting with and writing data to the blockchain. This enables
            me to build decentralized applications (DApps) and seamlessly
            integrate blockchain functionality into both mobile and web
            products.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            I believe that good code should not only work correctly but also be
            clean, maintainable, and scalable. I continuously stay up to date
            with new technologies and apply best practices to every project I
            work on.
          </p>
        </div>

        <div className="bg-linear-to-br from-neutral-900 via-neutral-900 to-neutral-700/50 rounded-lg overflow-hidden border border-neutral-800/50 p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            What I Bring to the Table
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Play className="w-3 h-3 text-(--primary) mt-1 shrink-0 fill-current" />
              <p className="text-sm text-gray-400">
                <span className="text-sm font-medium text-white">
                  Clean Code:
                </span>{" "}
                Write clear, maintainable code that follows coding standards and
                is easy to scale.
              </p>
            </div>

            <div className="flex gap-3">
              <Play className="w-3 h-3 text-(--primary) mt-1 shrink-0 fill-current" />
              <p className="text-sm text-gray-400">
                <span className="text-sm font-medium text-white">
                  Problem Solving:
                </span>{" "}
                Analyze problems carefully and deliver optimal, practical
                solutions.
              </p>
            </div>

            <div className="flex gap-3">
              <Play className="w-3 h-3 text-(--primary) mt-1 shrink-0 fill-current" />
              <p className="text-sm text-gray-400">
                <span className="text-sm font-medium text-white">
                  Collaboration:
                </span>{" "}
                Work effectively in teams with strong communication across
                designers and backend developers.
              </p>
            </div>

            <div className="flex gap-3">
              <Play className="w-3 h-3 text-(--primary) mt-1 shrink-0 fill-current" />
              <p className="text-sm text-gray-400">
                <span className="text-sm font-medium text-white">
                  Continuous Learning:
                </span>{" "}
                Constantly explore new technologies and improve skills every
                day.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-6">
            I am seeking opportunities to contribute to impactful projects,
            collaborate with experienced teams, and continue developing my
            skills while delivering high-quality, practical solutions through
            technology.
          </p>
          <Button className="w-60">Let's Work Together</Button>
        </div>
      </div>
    </Section>
  );
}
