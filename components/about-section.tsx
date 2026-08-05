"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TextScrambleLoop from "@/components/ui/text-scramble-effect";
import { portfolioProfile } from "@/lib/portfolio-data";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="About Me" />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  {portfolioProfile.about}
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="glass-card border-gray-800/60">
                <CardContent className="p-4 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href={`mailto:${portfolioProfile.email}`}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors break-all"
                    >
                      {portfolioProfile.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-gray-800/60">
                <CardContent className="p-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-sm text-gray-300">
                      {portfolioProfile.location}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-gray-800/60 sm:col-span-2">
                <CardContent className="p-4 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Education</p>
                    <p className="text-sm text-gray-300">
                      {portfolioProfile.education[0].degree}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-white">Core Areas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioProfile.coreAreas.map((area) => (
                    <Badge
                      key={area}
                      variant="secondary"
                      className="bg-gray-800/80 text-gray-300 hover:bg-gray-700/80"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 font-grotesk">
              Education
            </h3>
            <div className="space-y-4">
              {portfolioProfile.education.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-gray-800/60 hover:border-blue-500/30 transition-colors">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                        <span>{edu.period}</span>
                        {edu.grade && (
                          <span className="text-blue-400">{edu.grade}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
