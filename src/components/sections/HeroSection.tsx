export default function HeroSection() {
    return (
      <section className="py-32">
        <div className="space-y-6">
          <p className="text-white/50">
            Available for full-time / part-time / freelance 
          </p>
  
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Nikita Krikunov
            <br />
            AI & Fullstack Developer
          </h1>
  
          <p className="text-white/60 max-w-2xl text-lg">
            Fullstack Developer / AI Engineer with strong Python and backend engineering skills, experienced in API integrations, backend architectures.
            Currently studying machine learning and deep learning, with hands-on experimentation in AI workflows and automation tools.
          </p>
          
          {/* Skills block */}
    <div className="pt-8">
        <p className="text-white/40 text-sm mb-3">Technical Skills</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
            <div>
            <p className="text-white/90">Languages</p>
            <p>TypeScript, Python, С / С++, SQL</p>
            </div>

            <div>
            <p className="text-white/90">Frontend</p>
            <p>React, Next.js, HTML, CSS, Tailwind</p>
            </div>

            <div>
            <p className="text-white/90">Backend & APIs</p>
            <p>Node.js, REST APIs, Serverless Functions</p>
            </div>

            <div>
            <p className="text-white/90">AI / Data</p>
            <p>LLM APIs, AI workflows, pandas</p>
            </div>

            <div>
            <p className="text-white/90">Databases</p>
            <p>PostgreSQL, MySQL</p>
            </div>

            <div>
            <p className="text-white/90">Tools</p>
            <p>Git, Docker, Linux</p>
            </div>
        </div>
        </div>
  
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-5 py-3 bg-white text-black rounded-md"
            >
              Contact me
            </a>
  
            <a
              href="#projects"
              className="px-5 py-3 border border-white/20 rounded-md"
            >
              View projects
            </a>
          </div>
        </div>
      </section>
    );
  }