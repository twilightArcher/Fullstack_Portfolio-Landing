export default function ProjectsSection() {
    return (
      <section id="projects" className="py-20 border-b border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">
          Projects
        </h2>
  
        <div className="space-y-12 text-white/70 leading-relaxed">
  
          {/* ft_transcendance */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="text-white text-lg font-medium">
                  ft_transcendance – Full-stack Web Application
                </p>
                <p className="text-white/50 text-sm">
                  42 Lyon
                </p>
              </div>
  
              <p className="text-white/40 text-sm">
                NestJS · APIs · PostgreSQL · Docker · CSS
              </p>
            </div>
  
            <ul className="space-y-2 text-sm">
              <li>
                Developed backend services using NestJS (Node.js) and implemented REST APIs.
              </li>
              <li>
                Managed user authentication, sessions, and profile systems.
              </li>
              <li>
                Integrated PostgreSQL database infrastructure.
              </li>
              <li>
                Containerized the application using Docker.
              </li>
            </ul>
          </div>
  
          {/* Python project */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="text-white text-lg font-medium">
                  Python – Data Processing & OOP
                </p>
                <p className="text-white/50 text-sm">
                  42 Lyon
                </p>
              </div>
  
              <p className="text-white/40 text-sm">
                Python · OOP · DOD · Data · AI
              </p>
            </div>
  
            <ul className="space-y-2 text-sm">
              <li>
                Processed and analyzed datasets using Python and pandas.
              </li>
              <li>
                Implemented object-oriented programming concepts (classes, inheritance).
              </li>
              <li>
                Designed efficient data structures and applied data-oriented design.
              </li>
              <li>
                Worked with image processing and matrix manipulation.
              </li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }