import Intro from './About/Intro';
import Skills from './About/Skills';
import WorkExperience from './About/WorkExperience';

function About() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col overflow-y-auto px-4 pl-4 md:px-0 md:pl-64">
      <Intro />
      <div className="border-off-red-500 hover:bg-off-red-500 hover:text-platinum-100 my-6 border-2 px-6 py-2 text-2xl text-amber-100">
        <button>&gt; Contact</button>
      </div>
      <Skills />
      <WorkExperience />
    </section>
  );
}

export default About;
