import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Binary } from 'lucide-react';

interface CodeTransitionOverlayProps {
  isTransitioning: boolean;
  targetPageName: string;
}

const CHARACTERS = '01010101<>/{}[];:=+-_#@0123456789ABCDEF$λπ~&*';
const CODE_SNIPPETS = [
  'const route = await resolve(TARGET_ROUTE);',
  'import { motion } from "motion/react";',
  '0x7F4A 0x8891 0x22B0 0xFA99 0xC001 0x4D33',
  'fn render_view() -> Result<DOMNode, Glitch>',
  'const [state, dispatch] = useReducer(compiler);',
  '01001101 01100101 01110011 01110010 01101111',
  'GPU_BUFFER::allocate(0x992B) -> [SUCCESS]',
  'export default async function Page() { ... }',
  'SHADERS.compile(FRAGMENT_PASS) -> 60fps',
  '0xDEADBEEF >> 4 | 0xCAFEBABE'
];

export const CodeTransitionOverlay: React.FC<CodeTransitionOverlayProps> = ({
  isTransitioning,
  targetPageName
}) => {
  // Generate randomized matrix columns
  const [columnsData, setColumnsData] = useState<string[][]>([]);
  const [randomHex, setRandomHex] = useState<string>('0x7F41A9');
  const [activeSnippetIndex, setActiveSnippetIndex] = useState<number>(0);

  // Pick 12-16 columns across the screen width
  const columnCount = 14;

  useEffect(() => {
    if (!isTransitioning) return;

    // Generate random character column blocks
    const cols: string[][] = [];
    for (let c = 0; c < columnCount; c++) {
      const colLength = Math.floor(Math.random() * 8) + 10;
      const chars: string[] = [];
      for (let r = 0; r < colLength; r++) {
        chars.push(CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]);
      }
      cols.push(chars);
    }
    setColumnsData(cols);

    // Fast character scramble interval while transitioning
    const interval = setInterval(() => {
      setColumnsData((prev) =>
        prev.map((col) =>
          col.map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)])
        )
      );
      setRandomHex(
        '0x' + Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, '0')
      );
      setActiveSnippetIndex((i) => (i + 1) % CODE_SNIPPETS.length);
    }, 45);

    return () => clearInterval(interval);
  }, [isTransitioning, columnCount]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          className="fixed inset-0 z-[120] pointer-events-none overflow-hidden bg-[#150B0A]/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none font-mono"
        >
          {/* Cyber Scanning Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#381B1915_1px,transparent_1px),linear-gradient(to_bottom,#381B1915_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

          {/* Sweeping Laser Scanline */}
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 0.45, ease: 'linear', repeat: Infinity }}
            className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D68379] to-transparent shadow-[0_0_20px_#D68379] z-20 pointer-events-none opacity-90"
          />

          {/* Background Matrix Rain Streaming Columns */}
          <div className="absolute inset-0 flex justify-between px-2 sm:px-6 pointer-events-none opacity-40 overflow-hidden">
            {columnsData.map((col, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ y: -50 }}
                animate={{ y: 50 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                  delay: (cIdx % 5) * 0.04
                }}
                className="flex flex-col text-[11px] sm:text-xs tracking-widest leading-none font-mono"
              >
                {col.map((char, rIdx) => (
                  <span
                    key={rIdx}
                    className={`my-1 transition-colors duration-75 ${
                      rIdx === 0
                        ? 'text-[#fff8f0] font-bold shadow-[0_0_8px_#ffffff]'
                        : rIdx < 3
                        ? 'text-[#D68379] font-semibold'
                        : rIdx % 2 === 0
                        ? 'text-[#B85C52]/70'
                        : 'text-[#572A26]/80'
                    }`}
                  >
                    {char}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Top HUD Status Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#D68379] border-b border-[#572A26]/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D68379] animate-ping" />
              <span className="font-bold tracking-wider uppercase text-rose-200">
                SYSTEM://ROUTE_EXECUTION
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-rose-300/80">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-[#D68379]" />
                MEMORY_BUFFER: {randomHex}
              </span>
              <span className="flex items-center gap-1">
                <Binary className="w-3.5 h-3.5 text-[#D68379]" />
                60 FPS GL_RENDER
              </span>
            </div>
          </div>

          {/* Center Matrix Code Terminal HUD */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-md w-full rounded-2xl bg-[#220E0D]/95 border-2 border-[#572A26] shadow-[0_0_40px_rgba(214,131,121,0.25)] p-5 sm:p-6 space-y-3"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#381B19] pb-2 text-[11px] text-rose-300/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#D68379]" />
                  <span className="font-bold text-[#fff8f0]">COMPILER_PIPELINE</span>
                </div>
                <span className="text-[#D68379] font-mono">{randomHex}</span>
              </div>

              {/* Destination Tag */}
              <div className="text-left space-y-1">
                <div className="text-[10px] text-rose-300/60 uppercase tracking-widest">
                  Transitioning To
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#fff8f0] tracking-wider flex items-center gap-2">
                  <span className="text-[#D68379]">&gt;</span>
                  <span>{targetPageName.toUpperCase()}</span>
                  <span className="w-2 h-5 bg-[#D68379] animate-pulse inline-block" />
                </div>
              </div>

              {/* Dynamic Rapid Code Stream */}
              <div className="bg-[#150B0A] rounded-xl p-3 border border-[#381B19] text-left text-[11px] sm:text-xs text-rose-200/90 font-mono space-y-1 overflow-hidden">
                <div className="text-[#D68379] truncate">
                  &gt; {CODE_SNIPPETS[activeSnippetIndex]}
                </div>
                <div className="text-rose-300/50 text-[10px] truncate">
                  &gt; {CODE_SNIPPETS[(activeSnippetIndex + 1) % CODE_SNIPPETS.length]}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom HUD Stream */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-rose-300/60 border-t border-[#572A26]/80 pt-2">
            <span className="font-mono">
              [COMPILE_PASS]: <span className="text-[#D68379]">READY</span>
            </span>
            <span className="font-mono text-[#fff8f0]">
              MESROUR_SALAH_EDDINE://V2.5.0
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
