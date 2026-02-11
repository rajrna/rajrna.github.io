export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Raj_Rana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-start px-6 py-12">
      {/* Header Section */}
      <div className="mb-10 w-full border-b-4 border-red-600/40 pb-2">
        <h2 className="text-3xl font-black tracking-tighter text-red-600 uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          Personnel_Dossier
        </h2>
        <span className="text-[10px] tracking-[0.4em] text-red-900/60 uppercase">
          Document_ID: RR-092-ALPHA
        </span>
      </div>

      {/* The "Preview" Box */}
      <div className="relative mb-12 w-full border border-red-900/30 bg-red-950/5 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-red-900 uppercase">
                Subject_Name
              </p>
              <p className="font-mono text-2xl text-amber-500">RAJ_RANA</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-red-900 uppercase">
                Primary_Specialization
              </p>
              <p className="font-mono text-xl text-amber-100">
                FULLSTACK_OPERATIVE
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center border-l border-red-900/20 pl-8">
            <p className="mb-4 text-xs leading-relaxed text-slate-500">
              "This document contains a full history of technical deployments,
              architectural achievements, and field experience."
            </p>

            {/* THE BIG BUTTON */}
            <button
              onClick={handleDownload}
              className="group relative border-2 border-red-600 px-6 py-3 transition-all hover:bg-red-600"
            >
              <span className="text-xl font-black tracking-tighter text-amber-500 uppercase group-hover:text-black">
                &gt; EXTRACT_FULL_PDF
              </span>
              <div className="absolute -top-1 -right-1 h-2 w-2 animate-pulse bg-red-600"></div>
            </button>
          </div>
        </div>

        {/* Decorative corner markers */}
        <div className="absolute top-2 right-2 font-mono text-[10px] text-red-900/40">
          SECURE_FILE
        </div>
      </div>

      {/* Quick Summary / Teaser */}
      <div className="grid w-full grid-cols-2 gap-4 opacity-60 md:grid-cols-4">
        <div className="border border-red-900/20 p-4">
          <p className="text-[10px] text-red-800">EXP</p>
          <p className="text-lg text-amber-100">1+ YRS</p>
        </div>
        <div className="border border-red-900/20 p-4">
          <p className="text-[10px] text-red-800">PROJECTS</p>
          <p className="text-lg text-amber-100">8_ACTIVE</p>
        </div>
        {/* ... more stats ... */}
      </div>
    </div>
  );
}
