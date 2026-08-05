"use client";

import { useEffect, useState } from "react";

interface TextScrambleLoopProps {
  text: string;
  className?: string;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScrambleLoop({
  text,
  className = "",
}: TextScrambleLoopProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    const maxIterations = 8;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      frame++;
      if (frame % 3 === 0) {
        iteration++;
      }

      if (iteration >= text.length + maxIterations) {
        iteration = 0;
        frame = 0;
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
