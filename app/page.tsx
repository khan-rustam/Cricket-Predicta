import dynamic from "next/dynamic";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { GuestSection } from "./components/sections/Guest";
import Head from "next/head";
import {
  AboutSection,
  BroadcastSection,
  ContactSection,
  GallerySection,
  HeroSection,
  LegendaryCricketersSection,
  OutcomeDeliveredSection,
} from "./components/sections";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

/**
 * Main page component for Cricket Predicta
 * Uses modular section components for better organization and maintainability
 */
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <link
          rel="preload"
          href="/Home.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
      </Head>
      {/* Animated background */}
      <AnimatedBackground />

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Team Section */}
        {/* <TeamSection /> */}

        {/* Legendary Cricketers Section */}
        <LegendaryCricketersSection />

        {/* Outcome Delivered Section */}
        <OutcomeDeliveredSection />

        {/* Clients & Partners Section */}
        {/* <ClientsPartnersSection /> */}

        {/* Broadcast Section */}
        <BroadcastSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Guest Section */}
        <GuestSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
