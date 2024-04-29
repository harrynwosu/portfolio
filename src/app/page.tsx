import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/IntroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EmailSection from "./components/sections/EmailSection";
import Footer from "./components/sections/Footer";
import ExperienceSection from "./components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        {/* <AboutSection /> */}
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
