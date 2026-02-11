export default function ProjectCard({ proj }) {
  const isLocked =
    proj.desc.toLowerCase().includes('construction') ||
    proj.desc.toLowerCase().includes('development');

  return (
    <div className="group relative flex min-h-70 flex-col border border-red-900/30 bg-black/40 p-6 transition-all hover:border-red-600 hover:bg-red-950/10 hover:shadow-[0_0_20px_rgba(220,38,38,0.1)]">
      <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-red-600/40 transition-colors group-hover:border-red-600"></div>
      <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-red-600/40 transition-colors group-hover:border-red-600"></div>

      {/* Stack Metadata */}
      <div className="mb-2 font-mono text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">
        MOD_DEVICES: {proj.stack.replace(/ /g, ' // ')}
      </div>

      <h3 className="mb-4 font-mono text-2xl font-black tracking-tighter text-amber-500 uppercase drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:text-amber-300">
        {proj.title}
      </h3>

      <div className="grow font-mono text-sm leading-relaxed text-amber-100 group-hover:text-slate-200">
        {isLocked ? (
          <div className="border border-red-900/30 bg-red-950/20 p-2 text-red-700 italic">
            [ ERROR ] DATA_ENCRYPTED: {proj.desc}
          </div>
        ) : (
          proj.desc
        )}
      </div>

      <div className="mt-8 flex gap-3">
        {proj.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 border py-2 text-center font-mono text-[10px] font-bold tracking-widest uppercase transition-all ${
              link.type === 'github'
                ? 'border-red-900 text-red-600 hover:bg-red-600 hover:text-black'
                : 'border-white/40 text-amber-100 hover:bg-amber-100 hover:text-black'
            }`}
          >
            {link.label} _EXEC
          </a>
        ))}
      </div>
    </div>
  );
}
