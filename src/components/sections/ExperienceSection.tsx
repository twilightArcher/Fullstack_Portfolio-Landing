export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-white/10">
      <h2 className="text-2xl font-semibold tracking-tight mb-10">
        Professional Experience
      </h2>

      <div className="space-y-12 text-white/70 leading-relaxed">
        {/* Alfa Bank */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-white text-lg font-medium">
                Alfa-Bank
              </p>
              <p className="text-white/50 text-sm">
                Backend Developer
              </p>
            </div>

            <p className="text-white/40 text-sm">
              Moscow, Russia · Mar 2025 – 2026
            </p>
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              Developed backend logic for a gamified banking platform designed to teach children financial literacy.
            </li>
            <li>
              Implemented server-side gameplay mechanics using YAML/JSON configuration systems.
            </li>
            <li>
              Developed and integrated plugins supporting gameplay logic.
            </li>
            <li>
              Contributed to production deployment and backend service integration.
            </li>
          </ul>
        </div>

        {/* Foxford */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-white text-lg font-medium">
                Foxford
              </p>
              <p className="text-white/50 text-sm">
                Educational IT Engineer / Developer
              </p>
            </div>

            <p className="text-white/40 text-sm">
              Moscow, Russia · 2021 – 2025
            </p>
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              Developed backend systems and designed educational programs combining programming and interactive environments.
            </li>
            <li>
              Built backend systems for high-traffic educational platforms.
            </li>
            <li>
              Created technical content related to programming and game development (Python, Lua, C#/Unity).
            </li>
            <li>
              Designed interactive systems supported by backend server infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}