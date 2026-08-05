"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import TextScrambleLoop from "@/components/ui/text-scramble-effect";
import { portfolioProfile } from "@/lib/portfolio-data";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:${portfolioProfile.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}`,
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening your email client",
      description: "Your message has been prepared. Send it from your email app.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding pb-24">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gradient"
        >
          <TextScrambleLoop text="Get In Touch" />
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${portfolioProfile.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {portfolioProfile.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">{portfolioProfile.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-3">Connect With Me</p>
                <div className="flex gap-3">
                  <a
                    href={portfolioProfile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700/60 transition-colors text-sm"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
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
            <Card className="glass-card border-gray-800/60">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="bg-gray-900/50 border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="bg-gray-900/50 border-gray-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project collaboration"
                      className="bg-gray-900/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      className="bg-gray-900/50 border-gray-700 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} {portfolioProfile.name}. Built with
            Next.js, TypeScript & Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
