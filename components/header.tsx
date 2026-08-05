"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioProfile } from "@/lib/portfolio-data";

const menuItems = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-bold text-gradient font-grotesk"
            onClick={() => scrollToSection("intro")}
          >
            {portfolioProfile.shortName}
          </motion.button>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden py-4 border-b border-gray-800"
        >
          <nav className="container-custom flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
