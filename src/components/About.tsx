import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">

        <h3 className="title">About Me</h3>

        <p className="para">
          I'm <strong>Sudarshan Maddi</strong>, a Data Science undergraduate and Applied AI Engineer, focused on building intelligent systems that combine machine learning, agentic AI architectures, and real-world automation.
          <br /><br />
          My work revolves around designing AI-powered applications using multi-agent systems, retrieval-augmented generation (RAG), and intelligent workflow automation — transforming complex problems into scalable AI solutions.
        </p>

        {/* Signature Quote */}
        <div className="signature-quote">
          ⚡ I build <span className="ai-highlight">AI</span> systems. They build interesting bugs.
        </div>

      </div>
    </div>
  );
};

export default About;