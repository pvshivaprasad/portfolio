"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "intro", name: "intro" },
  { id: "about", name: "about me" },
  { id: "skills", name: "skills" },
  { id: "projects", name: "projects" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "contact" },
];

export default function CodeProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const checkSections = () => {
      const allSections = document.querySelectorAll("section[id], div[id]");
      return Array.from(allSections)
        .filter((element) =>
          sections.some((section) => section.id === element.id),
        )
        .map((element) => ({
          id: element.id,
          top: element.getBoundingClientRect().top + window.scrollY,
        }));
    };

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);

      const shouldBeVisible = window.scrollY > 100;
      setIsVisible(shouldBeVisible);

      const header = document.querySelector("header");
      if (header) {
        if (shouldBeVisible) {
          header.classList.add("opacity-0", "pointer-events-none");
          header.classList.remove("opacity-100");
        } else {
          header.classList.add("opacity-100");
          header.classList.remove("opacity-0", "pointer-events-none");
        }
      }

      const sectionElements = checkSections();
      if (sectionElements.length === 0) return;

      sectionElements.sort((a, b) => a.top - b.top);

      let currentlyInView = "";
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (sectionElements[i].top <= scrollPosition) {
          currentlyInView = sectionElements[i].id;
          break;
        }
      }

      if (currentlyInView && currentSection !== currentlyInView) {
        setCurrentSection(currentlyInView);
        const currentIndex = sectionElements.findIndex(
          (section) => section.id === currentlyInView,
        );
        setVisibleSections(
          sectionElements.slice(0, currentIndex + 1).map((s) => s.id),
        );
      }

      if (progress > 0.95) {
        const allSectionIds = sectionElements.map((section) => section.id);
        setVisibleSections(allSectionIds);
        setCurrentSection(allSectionIds[allSectionIds.length - 1]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("[data-dropdown]")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const progressPercent = Math.round(scrollProgress * 100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const generateCodeContent = () => {
    if (visibleSections.length === 0) return "_";

    return visibleSections.map((sectionId, index) => {
      const section = sections.find((s) => s.id === sectionId);
      const isCurrentSection = currentSection === sectionId;
      const isLastSection = index === visibleSections.length - 1;

      return (
        <span key={sectionId}>
          {"{"}
          {section && (
            <button
              type="button"
              onClick={() => scrollToSection(sectionId)}
              className="hover:text-white hover:underline transition-all cursor-pointer"
              aria-label={`Scroll to ${section.name}`}
            >
              {section.name}
            </button>
          )}
          {(!isCurrentSection ||
            (isLastSection && progressPercent >= 100)) &&
            "}"}
          {isLastSection && isCurrentSection && progressPercent < 100 && (
            <span className="cursor-blink text-blue-400">_</span>
          )}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[60] px-2 sm:px-4 py-2 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-blue-400 shrink-0">
          <span>➜</span>
          <span>{progressPercent}%</span>
        </div>

        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="font-mono text-xs sm:text-sm text-gray-400 truncate">
            {generateCodeContent()}
          </div>
        </div>

        <div className="hidden md:block font-mono text-xs text-gray-500 shrink-0">
          {progressPercent < 100
            ? `${100 - progressPercent}% remaining`
            : "complete"}
        </div>

        <div className="md:hidden font-mono text-xs text-gray-500 shrink-0">
          {progressPercent < 100 ? `${100 - progressPercent}%` : "✓"}
        </div>

        <div className="relative shrink-0" data-dropdown>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md p-1 sm:p-1.5 transition-colors touch-manipulation"
            aria-label="Navigation menu"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-gray-900 border border-gray-800 rounded-md shadow-xl overflow-hidden z-50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 sm:px-4 py-2 text-sm transition-colors touch-manipulation ${
                    currentSection === section.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 active:bg-gray-600"
                  }`}
                >
                  {section.name}
                  {currentSection === section.id && (
                    <span className="ml-1 text-blue-200">•</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
