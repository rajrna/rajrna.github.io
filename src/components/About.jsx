import TypeWriterV1 from './TypeWriterV1';

function About() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pl-4 md:px-0 md:pl-64">
      <div className="mt-10 md:mt-15">
        <div className="text-off-red text-xl md:text-2xl">Hey, I am</div>
        <h1>
          Raj Rana <span className="text-off-red">.</span>
        </h1>
        <p>
          I am a software engineer specializing in <br />
          web development.
          <br />
          Currently I am{' '}
          <span className="text-off-red">
            <TypeWriterV1 />
          </span>
        </p>
        <p>
          I'm passionate about continuous learning and rapidly adapting to new
          technologies.
          <br />
          When I'm not coding I immerse myself in design, digital art and
          story-telling.
        </p>
        <p>
          I am always seeking for exciting opportunities to contribute and grow.
        </p>
      </div>

      <div>
        <button>Contact</button>
      </div>

      <div>
        <h2>Skills & Technologies</h2>
        <ul>
          <li>JavaScript /</li>
          <li>Node.js / REST APIs</li>
          <li>Unity / Game Development</li>
          <li>Python / </li>
          <li>Version Control (Git, GitHub)</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
