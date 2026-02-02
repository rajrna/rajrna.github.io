import ExperienceItem from './ExperienceItem';

const experiences = [
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
  {
    num: '2',
    role: 'Intern',
    company: 'XTen',
    location: 'Pokhara, Nepal',
    duration: 'Aug 2025 - Nov 2025',
    highlights: [],
  },
];

function WorkExperience() {
  return (
    <>
      <h3>Work Experience</h3>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.num} experience={experience} />
      ))}
    </>
  );
}
// function WorkExperience() {
//   return (
//     <>
//       <h3>Work Experience</h3>
//       <div>
//         <div>
//           <div>
//             <span>Backend Intern</span>
//             <span>XDezo &ndash; Pokhara, Nepal</span>
//           </div>
//           <div>
//             <span>Feb 2025 &ndash; Apr 2025</span>
//           </div>
//           <ul>
//             <li>
//               Developed backend features for an online auction platform using
//               Java Spring Boot and PostgreSQL.
//             </li>
//             <li>
//               Implemented RESTful APIs for product listings, bidding, and user
//               authentication.
//             </li>
//             <li>
//               Integrated database operations for real-time bid tracking and
//               order management.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

export default WorkExperience;
