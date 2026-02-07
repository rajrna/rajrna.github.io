import ProjectsHeading from './ProjectsHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    stack: 'React JS CSS',
    title: 'My Portfolio',
    desc: 'Personal portfolio site showcasing my work, built with React and custom CSS.',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/yourname/portfolio',
        type: 'github',
      },
    ],
  },
  {
    stack: 'Unity C#',
    title: 'The Mercenary',
    desc: 'A story focused rpg built in Unity. In early development stages.',
    links: [{ label: 'Demo', href: '', type: 'live' }],
  },
  {
    stack: 'HTML CSS JavaScript PHP',
    title: 'TaskMate',
    desc: 'A simple task management web app to organize and track daily tasks.',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/rajrna/TaskMate',
        type: 'github',
      },
    ],
  },
  {
    stack: 'React Node.js MongoDB',
    title: 'MerchVault',
    desc: 'A e-commerce web app with product listings, user auth, and shopping cart.',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/rajrna/MerchVault',
        type: 'github',
      },
    ],
  },
  {
    stack: 'React Spring Boot Python PostgreSQL',
    title: 'VisuoFind',
    desc: 'A visual search engine using image and text embeddings for accurate results.',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/rajrna/AI-Search-Recommendation',
        type: 'github',
      },
    ],
  },
  {
    stack: 'Python',
    title: 'Relay',
    desc: 'An AI agent for automating tasks using natural language commands. Under Construction.',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/yourname/api-boilerplate',
        type: 'github',
      },
    ],
  },
  {
    stack: 'Python Streamlit',
    title: 'KuraKaniAI',
    desc: 'An AI Chatbot for ecommerce website',
    links: [
      {
        label: 'Github',
        href: 'https://github.com/yourname/api-boilerplate',
        type: 'github',
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex w-full flex-col">
      <ProjectsHeading />
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="grid w-full gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <ProjectCard key={proj.title} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
}
