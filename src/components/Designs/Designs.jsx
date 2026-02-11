const designs = [
  { id: 1, title: 'Art Piece 1', imageUrl: '#', description: '' },
  { id: 2, title: 'Art Piece 2', imageUrl: '#', description: '' },
  { id: 3, title: 'Art Piece 3', imageUrl: '#', description: '' },
  { id: 4, title: 'Art Piece 4', imageUrl: '#', description: '' },
  { id: 5, title: 'Art Piece 5', imageUrl: '#', description: '' },
  { id: 6, title: 'Art Piece 6', imageUrl: '#', description: '' },
];
function ArtCard({ art }) {
  return (
    <div className="group relative flex flex-col border border-red-900/30 bg-black/40 p-4 transition-all hover:border-red-600/60 hover:bg-red-950/10">
      {/* 1. Viewfinder Frame for Image */}
      <div className="relative mb-4 h-48 w-full overflow-hidden border border-red-900/20 bg-red-950/20">
        {/* Placeholder Static/Glitch Effect */}
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 opacity-40 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
          <div className="animate-pulse font-mono text-[10px] tracking-widest text-red-600 uppercase">
            [ No_Signal ]
          </div>
          <div className="h-[1px] w-12 bg-red-600/50"></div>
          <div className="font-mono text-[8px] text-slate-500 italic">
            Visual_Data_Redacted
          </div>
        </div>

        {/* Corner Viewfinder Markers */}
        <div className="absolute top-2 left-2 h-2 w-2 border-t border-l border-red-600/50"></div>
        <div className="absolute right-2 bottom-2 h-2 w-2 border-r border-b border-red-600/50"></div>
      </div>

      {/* 2. Metadata Label */}
      <div className="mb-1 font-mono text-[9px] font-bold tracking-[0.2em] text-red-900/80 uppercase">
        FILE_TYPE: VISUAL_ASSET_{art.id}
      </div>

      <h3 className="mb-2 font-mono text-xl font-black tracking-tighter text-amber-500/90 uppercase drop-shadow-[0_0_5px_rgba(245,158,11,0.5)] group-hover:text-amber-400">
        {art.title}
      </h3>

      <p className="mb-4 flex-grow font-mono text-xs leading-relaxed text-slate-500 group-hover:text-slate-300">
        {art.description ||
          'REPORT: Subject visual data pending departmental approval. Do not distribute.'}
      </p>

      <div className="flex">
        <button
          disabled
          className="w-full cursor-not-allowed border border-red-900/40 bg-red-950/10 py-1 font-mono text-[9px] tracking-widest text-red-900 uppercase transition-all"
        >
          [ ACCESS_RESTRICTED ]
        </button>
      </div>
    </div>
  );
}

export default function Designs() {
  return (
    <div className="flex w-full flex-col">
      {/* STICKY STATUS BAR (Matching Projects structure) */}
      <div className="sticky top-0 z-40 w-full border-b border-red-900/40 bg-[#0d0d0d]/90 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-x-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-red-600 uppercase">
              Visual_Archives
            </span>
            <span className="hidden text-[10px] tracking-[0.4em] text-red-900/60 uppercase sm:inline">
              // Imagery_Log_Index
            </span>
          </div>
          <div className="font-mono text-[10px] text-red-900 uppercase">
            STATUS: MONITORING
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        {/* Art Grid */}
        <div className="grid w-full gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </div>
    </div>
  );
}
