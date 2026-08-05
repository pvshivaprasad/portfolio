"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, currentText.length + 1);
          setCurrentText(nextText);

          if (nextText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const nextText = currentWord.slice(0, currentText.length - 1);
          setCurrentText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="cursor-blink text-blue-400">|</span>
    </span>
  );
}
