function ProjectsHeading() {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-red-900/40 bg-[#0d0d0d]/90 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-x-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-red-600 uppercase">
            Global_Database
          </span>
          <span className="hidden text-[10px] tracking-[0.4em] text-red-900/60 uppercase sm:inline">
            // Unauthorized_Access_Detected
          </span>
        </div>

        <div className="animate-pulse font-mono text-[10px] text-red-900 uppercase">
          [ SCANNING_SECTOR_07 ]
        </div>
      </div>
    </div>
  );
  // <div className="z-50 w-full border-b-2 border-red-600/40 bg-[#0d0d0d]/80 px-4 py-1 backdrop-blur-md">
  //   <div className="scroll-hidden sticky mx-auto flex max-w-6xl flex-col md:flex-row md:items-end md:justify-between">
  //     <div>
  //       <span className="mt-1 text-[10px] tracking-[0.4em] text-red-600 uppercase">
  //         Global_Database
  //       </span>
  //       <span className="mt-1 text-[10px] tracking-[0.4em] text-red-900/60 uppercase">
  //         // Unauthorized_Access_Detected
  //       </span>
  //     </div>
  //     <div className="mt-4 animate-pulse font-mono text-xs text-red-900 md:mt-0">
  //       [ SCANNING_SECTOR_07 ]
  //     </div>
  //   </div>
  // </div>
  //   {
  //     /* 1. STICKY SYSTEM STATUS BAR */
  //   }
}

export default ProjectsHeading;
