import { useState } from 'react';

const useScrambler = (originalText) => {
  const [displayText, setDisplayText] = useState(originalText);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return { displayText, scramble };
};

export default function SkillItem({ name, category, status }) {
  const { displayText, scramble } = useScrambler(name);

  return (
    <li
      onMouseEnter={scramble}
      className="group grid cursor-crosshair grid-cols-12 gap-2 border-b border-red-900/20 py-2 transition-colors hover:bg-red-950/20"
    >
      {/* 1. Scrambling Name */}
      <div className="col-span-6 flex items-center">
        <span className="mr-2 font-bold text-red-600">/&gt;</span>
        <span className="font-mono text-xl tracking-tight text-amber-500/90 drop-shadow-[0_0_2px_rgba(245,158,11,0.5)] group-hover:text-amber-400">
          {displayText}
        </span>
      </div>

      {/* 2. Metadata: Category */}
      <div className="col-span-3 self-center text-[10px] tracking-widest text-amber-100 uppercase">
        {category}
      </div>

      {/* 3. Status Replacement for Progress Bar */}
      <div className="col-span-3 self-center text-right font-mono text-[10px]">
        <span className="mr-1 text-red-600/80">[</span>
        <span className="text-slate-400 group-hover:text-red-500">
          {status}
        </span>
        <span className="ml-1 text-red-600/80">]</span>
      </div>
    </li>
  );
}
