"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Server, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextScrambleLoop from "@/components/ui/text-scramble-effect";
import { skillCategories } from "@/lib/portfolio-data";

const categoryIcons: Record<string, ReactNode> = {
  languages: <Code className="w-4 h-4" />,
  "ai-ml": <Brain className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  tools: <Wrench className="w-4 h-4" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="Skills & Tools" />
        </motion.h2>

        <Tabs defaultValue={skillCategories[0].id} className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-gray-900/60 p-1.5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm flex-1 sm:flex-none"
              >
                {categoryIcons[category.id]}
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="glass-card border-gray-800/60">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    {categoryIcons[category.id]}
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-center p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/40 hover:bg-gray-800/80 transition-all text-sm text-gray-300 text-center">
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="glass-card border-gray-800/60">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Currently Building
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Backend REST APIs",
                  "AI / Machine Learning Apps",
                  "Python Automation",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 bg-blue-500/10"
                    >
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
