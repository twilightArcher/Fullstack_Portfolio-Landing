export default function Footer() {
    return (
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left */}
          <div className="space-y-1">
            <p className="text-white/40 text-sm">
              Nikita Krikunov
            </p>
            <p className="text-white/40 text-sm">
              AI & Fullstack Developer
            </p>
          </div>
  
          {/* Center / Links */}
          <div className="flex gap-6 text-sm text-white/60">
            <a
              href="https://github.com/twilightArcher"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
  
            <a
              href="mailto:nikita.krikunov.dev@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
  
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
  
          {/* Right */}
          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} All rights reserved
          </div>
  
        </div>
      </footer>
    );
  }