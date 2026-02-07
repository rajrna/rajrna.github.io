import TypeWriterV1 from '../TypeWriterV1';

function Intro() {
  return (
    <div className="mt-15 text-amber-100 md:mt-20">
      <div className="text-off-red mb-4 text-xl md:text-2xl">Hey, I am</div>
      <h1 className="mb-4 text-3xl font-bold text-amber-100 md:text-5xl">
        Raj Rana<span className="text-off-red">.</span>
      </h1>
      <p className="mb-4 text-xl md:text-2xl">
        I am a software engineer specializing in <br />
        web development.
        <br />
        Currently I am{' '}
        <span className="text-off-red drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">
          <TypeWriterV1 />
        </span>
      </p>
      <p className="mb-4 text-[16px] md:text-xl">
        I'm passionate about continuous learning and rapidly adapting to new
        technologies.
        <br />
        When I'm not coding I immerse myself in design, digital art and
        story-telling.
      </p>
      <p className="mb-4 text-[16px] md:text-xl">
        I am always seeking for exciting opportunities to contribute and grow.
      </p>
    </div>
  );
}

export default Intro;
