"use client";

import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

export default function IntroAnimation({
  onAnimationComplete,
}: IntroAnimationProps) {
  const text = "STATUS 200: Conventional developer not found.";
  const words = text.split(" ");

  const [isReady, setIsReady] = useState(false);
  const [visibleWordsCount, setVisibleWordsCount] = useState(0);
  const [startGlitch, setStartGlitch] = useState(false);

  const wordRevealInterval = 400;
  const revealDuration = words.length * wordRevealInterval;

  useEffect(() => {
    const readyTimer = setTimeout(() => setIsReady(true), 10);

    const revealInterval = setInterval(() => {
      setVisibleWordsCount((prevCount) => {
        const nextCount = prevCount + 1;
        if (nextCount > words.length) {
          clearInterval(revealInterval);
          return prevCount;
        }
        return nextCount;
      });
    }, wordRevealInterval);

    const glitchTimer = setTimeout(() => {
      setStartGlitch(true);
      onAnimationComplete();
    }, revealDuration + 1000);

    return () => {
      clearTimeout(readyTimer);
      clearInterval(revealInterval);
      clearTimeout(glitchTimer);
    };
  }, [onAnimationComplete, words.length, revealDuration]);

  return (
    <>
      <div
        className={`intro-container ${isReady ? "ready" : ""} ${startGlitch ? "fading-out" : ""}`}
      >
        <div className={`intro-text-box ${startGlitch ? "glitching" : ""}`}>
          <div className="words-container">
            {isReady &&
              words.map((word, index) => (
                <span
                  key={index}
                  className={`word ${index < visibleWordsCount ? "visible" : ""}`}
                >
                  {word}
                </span>
              ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .intro-container {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, #000000 0%, #0f172a 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.5s ease-out 1s;
          z-index: 9999;
        }

        .intro-container.ready {
          opacity: 1;
          transition: opacity 0.2s ease-in;
        }

        .intro-container.fading-out {
          opacity: 0;
          transform: scale(0.99);
          transition:
            opacity 2s ease-out,
            transform 2s ease-out;
        }

        .intro-text-box {
          position: relative;
          color: white;
          font-family: var(--font-space-mono), ui-monospace, monospace;
          font-weight: 800;
          font-size: clamp(1.5rem, 6vw, 4.5rem);
          letter-spacing: 0.05em;
          text-align: center;
          padding: 2rem;
        }

        .words-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.25em;
        }

        .word {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.5s ease-out,
            transform 0.5s ease-out;
        }

        .word.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-text-box.glitching::before,
        .intro-text-box.glitching::after {
          content: "${text}";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: inherit;
          color: white;
          background-color: #000;
          overflow: hidden;
          opacity: 0;
        }

        .intro-text-box.glitching::before {
          animation: glitch-left 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            infinite;
          text-shadow: -2px 0 #ff00ff;
          z-index: 10;
        }

        .intro-text-box.glitching::after {
          animation: glitch-right 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            infinite;
          text-shadow: 2px 0 #00ffff;
          z-index: 10;
        }

        .intro-text-box.glitching {
          animation: final-dissolve 4s ease-out forwards;
        }

        @keyframes final-dissolve {
          0% {
            opacity: 1;
            filter: blur(0px);
          }
          70% {
            opacity: 1;
            filter: blur(0px);
          }
          90% {
            opacity: 0.7;
            filter: blur(2px);
          }
          100% {
            opacity: 0;
            filter: blur(10px);
            transform: scale(0.9);
          }
        }

        @keyframes glitch-left {
          0%,
          2%,
          64%,
          66%,
          100% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          3% {
            clip-path: inset(20% 0 70% 0);
            opacity: 0.8;
          }
          5% {
            clip-path: inset(80% 0 5% 0);
            opacity: 0.7;
          }
          65% {
            clip-path: inset(40% 0 40% 0);
            opacity: 0.9;
          }
        }

        @keyframes glitch-right {
          0%,
          2%,
          64%,
          66%,
          100% {
            clip-path: inset(0 0 0 100%);
            opacity: 0;
          }
          4% {
            clip-path: inset(70% 0 20% 0);
            opacity: 0.6;
          }
          6% {
            clip-path: inset(5% 0 80% 0);
            opacity: 0.8;
          }
          65% {
            clip-path: inset(30% 0 55% 0);
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
}
