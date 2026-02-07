// function ExperienceItem({ experience }) {
//   return (
//     <>
//       <div>
//         <span>{experience.role}</span>
//         <span>
//           {experience.company} - {experience.location}
//         </span>
//       </div>
//       <div>
//         <span>{experience.duration}</span>
//       </div>
//       <ul>
//         {experience.highlights.map((highlight, i) => (
//           <li key={i}>{highlight}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
function ExperienceItem({ experience }) {
  return (
    <div className="group relative mb-12 border-l-2 border-red-900/30 pl-6 transition-all hover:border-red-600">
      {/* 1. Header: Role and Company */}
      <div className="mb-4 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <h4 className="text-2xl font-black tracking-tight text-amber-500 uppercase drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:text-amber-300">
            {experience.role}
          </h4>
          <div className="text-sm font-bold tracking-widest text-red-600 uppercase">
            {experience.company}{' '}
            <span className="mx-2 text-red-900/40">//</span>
            <span className="text-[10px] text-slate-500">
              LOC: {experience.location}
            </span>
          </div>
        </div>

        {/* 2. Duration as a System Timestamp */}
        <div className="mt-2 border border-red-900/30 bg-red-950/10 px-2 py-1 font-mono text-xs text-red-900/80 group-hover:bg-red-950/20 group-hover:text-amber-500 md:mt-0">
          PERIOD: {experience.duration}
        </div>
      </div>

      {/* 3. Highlights as Log Data */}
      <ul className="space-y-3">
        {experience.highlights.map((highlight, i) => (
          <li
            key={i}
            className="flex items-start text-sm leading-relaxed text-slate-300/90 md:text-base"
          >
            <span className="mt-2.5 mr-3 h-1 w-4 shrink-0 bg-red-600/60 shadow-[0_0_5px_rgba(220,38,38,0.5)]"></span>
            <span className="transition-colors group-hover:text-white">
              {highlight}
            </span>
          </li>
        ))}
        {experience.highlights.length === 0 && (
          <li className="text-xs tracking-widest text-slate-600 uppercase italic">
            [ DATA_RESTRICTED // NO_LOG_ENTRIES_FOUND ]
          </li>
        )}
      </ul>

      {/* Decorative Entry Number */}
      <div className="absolute top-0 -left-2.25 flex h-4 w-4 items-center justify-center rounded-full border-2 border-red-600 bg-black text-[8px] font-bold text-red-600">
        {experience.num}
      </div>
    </div>
  );
}

export default ExperienceItem;
