import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { QuoteSection } from "./components/sections/QuoteSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { JourneySection } from "./components/sections/JourneySection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";
import { ContactSection } from "./components/sections/ContactSection";
import { StoryArticlePage } from "./components/sections/StoryArticlePage";
import { ProjectCaseStudyPage } from "./components/sections/ProjectCaseStudyPage";

export function App() {
  const [activeStoryId, setActiveStoryId] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Sync with URL Hash for seamless back/forward navigation and shareable links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#/cerita/")) {
        const id = hash.replace("#/cerita/", "");
        setActiveStoryId(id);
        setActiveProjectId(null);
      } else if (hash.startsWith("#/proyek/")) {
        const id = hash.replace("#/proyek/", "");
        setActiveProjectId(id);
        setActiveStoryId(null);
      } else {
        // Return to home view
        setActiveStoryId(null);
        setActiveProjectId(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectStory = (id) => {
    window.location.hash = `#/cerita/${id}`;
    setActiveStoryId(id);
    setActiveProjectId(null);
  };

  const handleSelectProject = (id) => {
    window.location.hash = `#/proyek/${id}`;
    setActiveProjectId(id);
    setActiveStoryId(null);
  };

  const handleBackToJourney = () => {
    window.location.hash = "#journey";
    setActiveStoryId(null);
  };

  const handleBackToProjects = () => {
    window.location.hash = "#projects";
    setActiveProjectId(null);
  };

  // 1. If a story is active, show the News/Blog Editorial Article Page
  if (activeStoryId) {
    return (
      <StoryArticlePage
        key={activeStoryId}
        storyId={activeStoryId}
        onBack={handleBackToJourney}
        onSelectStory={handleSelectStory}
      />
    );
  }

  // 2. If a project is active, show the Full Dedicated Case Study Page
  if (activeProjectId) {
    return (
      <ProjectCaseStudyPage
        key={activeProjectId}
        projectId={activeProjectId}
        onBack={handleBackToProjects}
        onSelectProject={handleSelectProject}
      />
    );
  }

  // 3. Otherwise, show the main portfolio
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuoteSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <JourneySection onSelectStory={handleSelectStory} />
        <SkillsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
