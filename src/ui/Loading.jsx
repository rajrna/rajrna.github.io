import { useEffect, useState } from 'react';

const messages = [
  'CHECKING_HARDWARE_INTEGRITY...',
  'ESTABLISHING_ENCRYPTED_UPLINK...',
  'UPLINK_STABLE // SYNCING_LOCAL_LOGS...',
  'SCANNING_SUBJECT_DOSSIER...',
  'AUTHORIZING_USER_LEVEL_4...',
  'DECRYPTING_MAINFRAME_ACCESS...',
  'SYSTEM_READY.',
];

export default function Loading({ onComplete }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let typingTimeout;
    let messageTimeout;

    if (typing) {
      const nextChar = messages[messageIndex].slice(
        0,
        currentMessage.length + 1
      );
      typingTimeout = setTimeout(() => {
        setCurrentMessage(nextChar);
        if (nextChar.length === messages[messageIndex].length) {
          setTyping(false);
        }
      }, 40); // Faster typing for a "computer" feel
    } else {
      messageTimeout = setTimeout(() => {
        if (messageIndex === messages.length - 1) {
          // Final message reached, trigger exit after a pause
          setTimeout(() => onComplete?.(), 1000);
        } else {
          setTyping(true);
          setMessageIndex(messageIndex + 1);
          setCurrentMessage('');
          setProgress(((messageIndex + 1) / messages.length) * 100);
        }
      }, 800);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(messageTimeout);
    };
  }, [currentMessage, typing, messageIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono select-none">
      {/* Background Grid/CRT effect strictly for loader */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      <div className="relative w-full max-w-md px-10">
        {/* Top Meta Info */}
        <div className="mb-2 flex justify-between text-[10px] tracking-widest text-red-900 uppercase">
          <span>Boot_Sequence_v4.0</span>
          <span>{progress.toFixed(0)}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="mb-8 h-2 w-full border border-red-900/40 bg-red-950/10 p-[2px]">
          <div
            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Typing Message */}
        <div className="h-20">
          {' '}
          {/* Fixed height to prevent layout jump */}
          <div className="flex gap-2 text-lg font-black tracking-tighter text-red-600 uppercase drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] md:text-xl">
            <span>&gt; {currentMessage}</span>
            <span className="animate-blink inline-block h-6 w-2 bg-red-600"></span>
          </div>
        </div>
      </div>

      <div className="mt-20 font-mono text-[10px] tracking-[0.5em] text-red-900/60 uppercase">
        © RAJ_RANA // UNIFIED_SYSTEMS_2026
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-start infinite;
        }
      `}</style>
    </div>
  );
}
