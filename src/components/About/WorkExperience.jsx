import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    num: '3',
    role: 'Next.js Developer',
    company: 'Brand Builder',
    location: 'Pokhara, Nepal',
    duration: 'Feb 2026 - Present',
    highlights: [
      'Built Agentic AI and AI chatbots for e-commerce platforms, driving smarter user interactions.',
      'Designed and integrated frontend components to interact with agentic AI workflows.',
      'Optimized AI prompts and response handling to reduce latency and token usage.',
      'Implemented robust safety measures to ensure reliable and secure AI behavior.',
    ],
  },

  {
    num: '2',
    role: 'Intern',
    company: 'XTen',
    location: 'Pokhara, Nepal',
    duration: 'Aug 2025 - Nov 2025',
    highlights: [
      'Built Agentic AI and AI chatbots for e-commerce platforms, driving smarter user interactions.',
      'Designed and integrated frontend components to interact with agentic AI workflows.',
      'Optimized AI prompts and response handling to reduce latency and token usage.',
      'Implemented robust safety measures to ensure reliable and secure AI behavior.',
    ],
  },
  {
    num: '1',
    role: 'Backend Intern',
    company: 'XDezo',
    location: 'Pokhara, Nepal',
    duration: 'Feb 2025 - Apr 2025 ',
    highlights: [
      'Developed backend features for an online auction platform using Java Spring Boot and PostgreSQL.',
      'Implemented RESTful APIs for product listings, bidding, and user authentication.',
      'Integrated database operations for real-time bid tracking and order management.',
    ],
  },
];

// function WorkExperience() {
//   return (
//     <>
//       <h3>Work Experience</h3>
//       {experiences.map((experience) => (
//         <ExperienceItem key={experience.num} experience={experience} />
//       ))}
//     </>
//   );
// }
function WorkExperience() {
  return (
    <div className="my-16 w-full max-w-5xl">
      {/* Section Header matching 'Subject_Capabilities' */}
      <div className="mb-10 flex items-end justify-between border-b-4 border-red-600/40 pb-2">
        <h3 className="text-4xl font-black tracking-tighter text-red-600 uppercase md:text-5xl">
          Employment_History
        </h3>
        <span className="mb-2 font-mono text-xs text-red-900 uppercase">
          Ver: 2026.02
        </span>
      </div>

      <div className="flex flex-col">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.num} experience={experience} />
        ))}
      </div>

      {/* Section Footer */}
      <div className="mt-8 border-t border-red-900/20 pt-4 font-mono text-[10px] tracking-[0.4em] text-red-900/40 uppercase">
        End of Dossier // User_ID: Rana_R
      </div>
    </div>
  );
}
export default WorkExperience;
