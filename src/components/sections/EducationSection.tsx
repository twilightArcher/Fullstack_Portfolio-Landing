export default function EducationSection() {
    return (
      <section id="education" className="py-20 border-b border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">
          Education
        </h2>
  
        <div className="space-y-12 text-white/70 leading-relaxed">
  
          {/* 42 Lyon */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="text-white text-lg font-medium">
                  École 42
                </p>
                <p className="text-white/50 text-sm">
                  Specialization: Digital Technology Architecture – Artificial Intelligence
                </p>
              </div>
  
              <p className="text-white/40 text-sm">
                Lyon, France · 2024 – Present
              </p>
            </div>
  
            <p className="text-sm text-white/60">
              Equivalent level: Master’s Degree (Bac +5)
            </p>
          </div>
  
          {/* MIREA */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="text-white text-lg font-medium">
                  MIREA – Russian Technological University
                </p>
                <p className="text-white/50 text-sm">
                  Information Systems and Technologies
                </p>
              </div>
  
              <p className="text-white/40 text-sm">
                Moscow, Russia · 2018 – 2023
              </p>
            </div>
  
            <p className="text-sm text-white/60">
              Equivalent level: Bachelor’s Degree (Bac +4)
            </p>
          </div>
  
        </div>
      </section>
    );
  }