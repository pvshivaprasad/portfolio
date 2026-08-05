"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/ui/typewriter";
import {
  portfolioProfile,
  typewriterRoles,
} from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center section-padding pt-28 md:pt-32"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-500 font-medium"
            >
              Hey, I&apos;m {portfolioProfile.shortName}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk min-h-[1.2em]"
            >
              <Typewriter words={typewriterRoles} />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-gradient font-semibold font-grotesk"
            >
              {portfolioProfile.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 max-w-lg text-balance leading-relaxed"
            >
              {portfolioProfile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href={portfolioProfile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-2"
            >
              <motion.a
                href={portfolioProfile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              {portfolioProfile.socialLinks.email && (
                <motion.a
                  href={portfolioProfile.socialLinks.email}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 rounded-full blur-2xl scale-110" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-gray-700/50 ring-4 ring-blue-500/20">
                <Image
                  src={portfolioProfile.avatarUrl}
                  alt={`${portfolioProfile.name} profile`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex justify-center mt-12 md:mt-16"
      >
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-gray-500 hover:text-blue-400 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  );
}
