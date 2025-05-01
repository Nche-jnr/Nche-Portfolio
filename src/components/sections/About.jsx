import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML", "JavaScript", "React", "TailwindCSS", "TypeScript", "Figma",
  ];

  const backendSkills = ["Node.js", "Firebase", "MongoDB", "Git", "Postman", "API keys"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-900 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-black/100 border hover:-translate-y-1 transition-all">
            <p className="text-black mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/100 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  <strong> CERTIFIED </strong> - New Horizons
                  (2024-2025)
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures, Web Development,
                  API Integration
                </li>
                <li>
                  <strong>Version Control with Git:</strong> Practiced tracking changes and collaborating on code using Git and GitHub.
                </li>
                <li>
                  <strong>Basic UI/UX Principles:</strong> Covered user-centered design, and useability for best practices
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/100 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-black">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern Software Engineer at New Horizon (2024 - 2025){" "}
                  </h4>
                  <p>
                    Developed and maintained high-performance web applications using React and other frameworks
                  </p>
                </div>

                <div>
                  <ul className="list-disc list-inside text-black space-y-2">
                    <li>
                      Collaborated with UX/UI designers and backend developers to implement UI components and API integrations.
                    </li>
                    <li>
                      Integrated third-party tools such as Payment gateways, Firebase and Charts to enhance app functionality and analytics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
