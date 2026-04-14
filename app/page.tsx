import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { StatsDashboard } from "@/components/portfolio/stats-dashboard"
import { ProfileSection } from "@/components/portfolio/profile-section"
import { TechStack } from "@/components/portfolio/tech-stack"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="stats">
        <StatsDashboard />
      </div>
      
      <div id="profile">
        <ProfileSection />
      </div>
      
      <div id="tech">
        <TechStack />
      </div>
      
      <div id="experience">
        <ExperienceSection />
      </div>
      
      <div id="education">
        <EducationSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
