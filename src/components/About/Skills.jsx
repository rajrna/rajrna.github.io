import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className="my-10 max-w-6xl">
      <div className="mb-4 flex items-end justify-between border-b-2 border-red-600/40 pb-1">
        <h2 className="text-3xl font-black tracking-tighter text-red-600 uppercase">
          Skills
        </h2>
        <span className="mb-1 font-mono text-[9px] text-red-900">
          AUTH_LEVEL: HIGH
        </span>
      </div>

      <ul className="flex flex-col">
        <SkillItem name="React" category="Frontend" status="ACTIVE" />
        <SkillItem name="Next.js" category="Frontend" status="ACTIVE" />

        <SkillItem name="Node.js" category="Backend" status="ENCRYPTED" />
        <SkillItem name="Springboot" category="Backend" status="ENCRYPTED" />
        <SkillItem name="Unity" category="Sim_Engine" status="INACTIVE" />
        <SkillItem name="Python" category="Logic" status="AUTHORIZED" />
        <SkillItem
          name="Git / GitHub"
          category="Version"
          status="SYCHRONIZED"
        />
      </ul>

      {/* Footer metadata */}
      <div className="mt-4 flex gap-4 font-mono text-[10px] text-red-900/60">
        <span>REF_ID: 84-2901</span>
        <span>SECTOR: 07</span>
        <span className="animate-pulse">● MONITORING_ENABLED</span>
      </div>
    </div>
  );
}
export default Skills;
