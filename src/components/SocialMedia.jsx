// import { useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// export default function SocialMediaMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed left-8 bottom-8 md:left-10 md:bottom-10 z-30 w-4">
//       {/* Hamburger button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex flex-col justify-center items-center w-4 h-4 space-y-1.5 md:hidden"
//         aria-label="Toggle social media menu"
//       >
//         {/* Hamburger icon lines */}
//         <span
//           className={`block h-1 w-7 bg-white rounded transition-transform duration-300 origin-left ${
//             isOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         />
//         <span
//           className={`block h-1 w-7 bg-white rounded transition-opacity duration-300 ${
//             isOpen ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <span
//           className={`block h-1 w-7 bg-white rounded transition-transform duration-300 origin-left ${
//             isOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         />
//       </button>

//       {/* Menu links */}
//       <div
//         className={`${
//           isOpen ? "flex" : "hidden"
//         } md:flex md:flex-col md:space-y-6 md:space-x-0 text-white text-3xl mt-2 md:mt-0`}
//       >
//         <a
//           href="https://github.com/rajrna"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-off-red-500 transition"
//           aria-label="GitHub"
//           onClick={() => setIsOpen(false)}
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/raj-rana-6b551932b"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-off-red-500 transition"
//           aria-label="LinkedIn"
//           onClick={() => setIsOpen(false)}
//         >
//           <FaLinkedin />
//         </a>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Using FaLinkedinIn for a sharper look

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-6 z-[60] flex flex-col items-center">
      {/* Vertical Connection Line - Enhances the "Hardware" look */}
      <div className="mb-6 hidden h-20 w-[1px] bg-gradient-to-t from-red-600/50 to-transparent md:block"></div>

      {/* Mobile Toggle (Hamburger) - Styled like a system switch */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group mb-4 flex flex-col items-center space-y-1 md:hidden"
        aria-label="Toggle uplinks"
      >
        <span
          className={`h-[2px] w-5 bg-red-600 transition-all ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}
        />
        <span
          className={`h-[2px] w-5 bg-red-600 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`h-[2px] w-5 bg-red-600 transition-all ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
        />
      </button>

      {/* Menu links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col space-y-6 text-2xl text-slate-400 md:flex`}
      >
        <a
          href="https://github.com/rajrna"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center border border-transparent p-2 transition-all hover:border-red-900/50 hover:text-amber-500"
          aria-label="GitHub Uplink"
        >
          {/* Subtle glow box behind icon */}
          <div className="absolute inset-0 bg-amber-500/0 blur-md transition-all group-hover:bg-amber-500/5"></div>
          <FaGithub className="drop-shadow-[0_0_8px_rgba(245,158,11,0)] group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

          {/* Tooltip Label */}
          <span className="pointer-events-none absolute left-12 font-mono text-[10px] tracking-[0.3em] whitespace-nowrap text-red-600 uppercase opacity-0 transition-all group-hover:opacity-100">
            // EXT_SRC_REPO
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/raj-rana-6b551932b"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center border border-transparent p-2 transition-all hover:border-red-900/50 hover:text-amber-500"
          aria-label="LinkedIn Uplink"
        >
          <div className="absolute inset-0 bg-amber-500/0 blur-md transition-all group-hover:bg-amber-500/5"></div>
          <FaLinkedinIn className="drop-shadow-[0_0_8px_rgba(245,158,11,0)] group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

          <span className="pointer-events-none absolute left-12 font-mono text-[10px] tracking-[0.3em] whitespace-nowrap text-red-600 uppercase opacity-0 transition-all group-hover:opacity-100">
            // PERS_DCS_LINK
          </span>
        </a>
      </div>
    </div>
  );
}
