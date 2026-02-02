import Intro from './About/Intro';
import Skills from './About/Skills';
import WorkExperience from './About/WorkExperience';

function About() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center overflow-y-auto px-4 pl-4 md:px-0 md:pl-64">
      <Intro />
      <div>
        <button>Contact</button>
      </div>
      <Skills />
      <WorkExperience />
    </section>
  );
}

export default About;
