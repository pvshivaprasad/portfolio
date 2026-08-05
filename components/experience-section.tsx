"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Trophy, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TextScrambleLoop from "@/components/ui/text-scramble-effect";
import { experienceItems } from "@/lib/portfolio-data";
import type { ExperienceItem } from "@/lib/portfolio-data";

const typeIcons = {
  work: <Briefcase className="w-5 h-5 text-blue-400" />,
  achievement: <Trophy className="w-5 h-5 text-yellow-400" />,
  learning: <BookOpen className="w-5 h-5 text-green-400" />,
};

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Card
        className={`glass-card border-gray-800/60 transition-all duration-300 ${
          isHovered
            ? "border-blue-500/40 shadow-lg shadow-blue-500/10 -translate-y-1"
            : ""
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              {typeIcons[item.type]}
              <div>
                <h3 className="font-semibold text-white">{item.company}</h3>
                <p className="text-sm text-blue-400">{item.role}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500 shrink-0 font-mono">
              {item.period}
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {item.description}
          </p>
          {isHovered && item.type === "achievement" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-gray-600 mt-3 italic"
            >
              Hover reveals the details — keep building.
            </motion.p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="Experience & Focus" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {experienceItems.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
