"use client";

import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import LoadingScreen from "@/components/loading-screen";
import Header from "@/components/header";
import CodeProgressBar from "@/components/code-progress-bar";
import IntroAnimation from "@/components/intro-screen";
import { useIntroAnimation } from "@/hooks/use-intro-animation";
import { allProjects, portfolioProfile } from "@/lib/portfolio-data";
import { getSiteUrl } from "@/lib/site-config";

export default function Home() {
  const { showIntro, handleAnimationComplete } = useIntroAnimation();
  const siteUrl = getSiteUrl();

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation
            key="intro"
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Header />
            <CodeProgressBar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </main>
          </Suspense>

          {/* SEO: machine-readable content for crawlers */}
          <div className="sr-only" aria-hidden="true">
            <h1>{portfolioProfile.name}</h1>
            <p>{portfolioProfile.headline}</p>
            <p>{portfolioProfile.summary}</p>
            <p>Location: {portfolioProfile.location}</p>
            <p>Email: {portfolioProfile.email}</p>
            <p>GitHub: {portfolioProfile.socialLinks.github}</p>
            <ul>
              {allProjects.map((project) => (
                <li key={project.id}>
                  {project.title} | {project.description} | Tech Stack:{" "}
                  {project.techstack.join(", ")} | URL: {project.githubUrl}
                </li>
              ))}
            </ul>
            <p>Site URL: {siteUrl}</p>
          </div>
        </motion.div>
      )}
    </>
  );
}
