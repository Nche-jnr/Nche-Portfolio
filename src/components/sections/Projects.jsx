import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-900 bg-clip-text text-transparent text-center">
            {" "}
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AgentGPT</h3>
              <p className="text-black mb-4">
                AI agent capable of autonomously interpreting high-level user goals, breaking them into actionable subtask, and using
                -external tools to complete task. The agent follows a ReAct (Reasoning + Acting) pattern, providing step-by-step execution.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Typescript ", "TailwindCSS", "Node.js / Next.js", "Wikipedia", "OpenweatherAPI", "Frankfurter Api", "OpenRouter (LLM)", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://agent-ai-m49w.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">React Weather App</h3>
              <p className="text-black mb-4">
              Developed a weather application using React.js that fetches real-time weather data from an external API. Implemented dynamic UI updates, responsive design, and location-based search functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS3", "Node.js", "OpenWeather API", "Vite", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://react-weather-app-two-green.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Mindscribe</h3>
              <p className="text-black mb-4">
             a MERN stack platform featuring AI content assistance, rich-text editing, and secure JWT authentication
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Router", "Tailwind CSS", "JavaScript", "Express", "Mongoose", "JWT Authentication", "AI Integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://mindscribe-fcfk.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="text-black mb-4">
              Built a data-heavy dashboard with light/dark modes, featuring 11 pages of interactive charts, data grids, and scheduling tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Router", "tailwindCSS", "Node.js", "Material UI", "Emotion Styling", "vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://admin-db-red.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-black mb-4">
              Built a responsive e-commerce bakery website, featuring product listing, interactive shopping cart, a clean and modern UI. Focused on smooth user experience and mobile-first design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "tailwindCSS", "Node.js", "Vite", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://react-e-commerce-app-chi.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Crypto Dashboard</h3>
              <p className="text-black mb-4">
              A Crypto dashboard built with React that tracks live crypto currency prices, market trends, and trading data. It offers
              sleek, responsive interface with dynamic updates, allowing user to monitor their favorite coins and market performance efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "tailwindCSS", "google-charts", "Coingecko API", "Node.js", "Vite", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://coin-monitor.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Yoga Landing Page</h3>
              <p className="text-black mb-4">
              A visually calming and responsive web page, designed to promote yoga classes, programs, or retreats. It features sections for class schedule, instructors, testimonials and all styled to reflect wellness and balance. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "tailwindCSS", "Node.js", "Vite", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://fit-flow-red.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black/100 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Glass Games</h3>
              <p className="text-black mb-4">
                Built a dynamic gaming website, showcasing game collection, interactive features, smooth user
                navigation and responsiveness. Implemented custom styling and animations to enhance user experience and engagements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript (ES6)", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="text-blue-700 hover:text-blue-900 transition-colors my-4 cursor-pointer">
                  <a
                    href="https://glass-games.vercel.app"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
