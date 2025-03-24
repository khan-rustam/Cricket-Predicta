import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection, AboutSection, TeamSection, BroadcastSection, RequirementsSection, ContactSection } from "./components/sections"
import { AnimatedBackground } from "./components/AnimatedBackground"
import { GuestSection } from "./components/sections/Guest"

/**
 * Main page component for Cricket Predicta
 * Uses modular section components for better organization and maintainability
 */
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background */}
      <AnimatedBackground />

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Broadcast Section */}
        <BroadcastSection />
        
        {/* Guest Section */}
        <GuestSection />
        
        {/* Requirements Section */}
        <RequirementsSection />
        
        {/* Contact Us Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

