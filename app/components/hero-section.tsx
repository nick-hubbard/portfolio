"use client";

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code2, Terminal, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const codeSnippets = [
  'const buildAmazingThings = () => {',
  '  return innovation + creativity;',
  '};',
  '\n',
  'function solveProblem() {',
  '  while (challenge.exists) {',
  '    code.optimize();',
  '  }',
  '}',
];

function renderCodeLine(line: string) {
  const parts = line.match(/^(\s*)(const|function|return|while)(.*)$/);

  if (!parts) {
    return line;
  }

  const [, indentation, keyword, restOfLine] = parts;

  return (
    <>
      {indentation}
      <span style={{ color: '#bd0f0f' }}>{keyword}</span>
      {restOfLine}
    </>
  );
}

export function HeroSection() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeSnippets.length) {
      // Reset after a delay
      const timeout = setTimeout(() => {
        setDisplayedCode([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const line = codeSnippets[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Move to next line
      const timeout = setTimeout(() => {
        setDisplayedCode([...displayedCode, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, displayedCode]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              backgroundColor: i % 2 === 0 ? '#bd0f0f' : '#07bdfa',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full shadow-sm border border-white/10"
              >
                <Sparkles className="w-4 h-4" style={{ color: '#07bdfa' }} />
                <span className="text-sm text-gray-300">Available for new opportunities</span>
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl mb-4"
                >
                  Hi, I'm{' '}
                  <span
                    className="bg-gradient-to-r from-[#bd0f0f] to-[#07bdfa] bg-clip-text text-transparent"
                  >
                    Nick Hubbard
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-400"
                >
                  Software Engineer & Problem Solver
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Crafting elegant solutions to complex problems. Passionate about clean code,
                user experience, and building products that make a difference.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-[#bd0f0f] hover:bg-[#9a0c0c] text-white hover:cursor-pointer"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#07bdfa] text-[#07bdfa] hover:bg-[#07bdfa] hover:text-white hover:cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Animated code display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">
                {/* Terminal header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 text-gray-400 text-sm">
                    <Terminal className="w-4 h-4" />
                    <span>code.js</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm min-h-[300px]">
                  {displayedCode.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-300 whitespace-pre"
                    >
                      {renderCodeLine(line)}
                    </motion.div>
                  ))}
                  {currentLine < codeSnippets.length && (
                    <motion.div className="text-gray-300 whitespace-pre">
                      {codeSnippets[currentLine].slice(0, currentChar)}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        style={{ color: '#07bdfa' }}
                      >
                        |
                      </motion.span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg"
              >
                <Code2 className="w-6 h-6" style={{ color: '#bd0f0f' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
