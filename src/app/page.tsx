import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AISection from "@/components/sections/AISection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AISection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
