import { useState } from 'react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Designs', id: 'designs' },
  { label: 'Resume', id: 'resume' },
];
function NavButton({ onNav, active }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-amber-200 hover:bg-red-950/20"
        >
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden gap-4 md:flex">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNav(link.id)}
            className={`rounded border-t-3 border-b-2 border-transparent px-3 py-1 transition-colors duration-200 ${active === link.id ? 'text-off-red-500 border-off-red-500 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]' : 'hover:text-off-red-500 hover:border-off-red-500 text-amber-100 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]'}`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col gap-2 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNav(link.id);
                setIsOpen(false);
              }}
              className={`rounded border-t-2 border-b-2 border-transparent px-3 py-1 transition-colors duration-200 ${
                active === link.id
                  ? 'text-off-red-500 border-off-red-500'
                  : 'hover:text-off-red-500 hover:border-off-red-500 text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default NavButton;
