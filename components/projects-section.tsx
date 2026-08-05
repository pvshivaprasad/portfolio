"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TextScrambleLoop from "@/components/ui/text-scramble-effect";
import { featuredProjects, allProjects } from "@/lib/portfolio-data";
import type { Project } from "@/lib/portfolio-data";

function ProjectCard({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card border-gray-800/60 overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-blue-950/80 via-gray-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="relative text-center px-6">
          <p className="text-blue-400/60 font-mono text-xs mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white font-grotesk">
            {project.title}
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <ul className="space-y-2 mb-5">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li
              key={highlight}
              className="text-xs text-gray-500 flex items-start gap-2"
            >
              <span className="text-blue-400 mt-0.5">▸</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techstack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-gray-800/80 text-gray-400"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" asChild className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              Check out
            </a>
          </Button>
          {project.projectUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? allProjects : featuredProjects;

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="Stuff I Built" />
        </motion.h2>

        <div className="relative mb-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-mono text-gray-600 mx-4 tracking-widest uppercase"
              >
                VIEW DETAILS • VIEW DETAILS • VIEW •
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block">
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${showAll}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={projects[currentIndex]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-500 w-6"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex md:hidden justify-center gap-4 mt-4">
              <Button variant="outline" size="sm" onClick={prev}>
                <ChevronLeft size={16} />
                Prev
              </Button>
              <Button variant="outline" size="sm" onClick={next}>
                Next
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setShowAll(true);
                setCurrentIndex(0);
              }}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
