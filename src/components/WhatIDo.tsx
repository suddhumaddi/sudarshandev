import { useState } from "react";
import "./styles/WhatIDo.css";

const whatData = [
  {
    title: "SYSTEM ARCHITECTURE",
    subtitle: "Agentic AI Systems",
    preview: "Designing multi-agent AI architectures that collaborate through orchestrated workflows.",
    focusAreas: [
      "Multi-agent orchestration using LangGraph",
      "Retrieval-Augmented Generation pipelines",
      "autonomous reasoning agents",
      "knowledge retrieval systems"
    ],
    goal: "Building AI systems where multiple agents collaborate to solve complex problems."
  },
  {
    title: "INTELLIGENT AUTOMATION",
    subtitle: "AI Workflow Systems",
    preview: "Building AI-powered automation pipelines that transform real-world processes.",
    focusAreas: [
      "AI automation workflows using n8n",
      "enterprise automation systems",
      "human-in-the-loop decision pipelines",
      "intelligent scheduling systems"
    ],
    goal: "Automating complex workflows using AI-driven systems."
  },
  {
    title: "AI APPLICATION ENGINEERING",
    subtitle: "AI Products",
    preview: "Developing AI-driven applications powered by machine learning and LLM systems.",
    focusAreas: [
      "LLM-based assistants",
      "AI dashboards",
      "analytics systems",
      "decision-support tools"
    ],
    goal: "Turning AI models into real-world usable applications."
  },
  {
    title: "DATA INTELLIGENCE",
    subtitle: "Machine Learning Systems",
    preview: "Applying machine learning techniques to extract insights from structured data.",
    focusAreas: [
      "predictive modeling",
      "feature engineering",
      "data pipelines",
      "analytical systems"
    ],
    goal: "Transforming raw data into actionable intelligence."
  }
];

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="whatIDO" id="whatido">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in" style={{ display: "flex" }}>
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {whatData.map((data, idx) => {
            const isActive = activeCard === idx;
            const isSibling = activeCard !== null && activeCard !== idx;
            const cardClass = `what-content ${isActive ? "what-content-active" : ""} ${isSibling ? "what-sibling" : ""}`;

            return (
              <div
                key={idx}
                className={cardClass}
                onClick={() => handleCardClick(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="what-border1">
                  <svg height="100%">
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                    {idx === whatData.length - 1 && (
                      <line
                        x1="0"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                      />
                    )}
                  </svg>
                </div>
                <div className="what-corner"></div>

                <div className="what-content-in">
                  <h3>{data.title}</h3>
                  <h4>{data.subtitle}</h4>
                  <p>{data.preview}</p>

                  <div className={`what-expanded-content ${isActive ? "expanded" : ""}`}>
                    <h5>Focus Areas</h5>
                    <ul>
                      {data.focusAreas.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <h5 className="goal-h5">Goal</h5>
                    <p className="goal-p">{data.goal}</p>
                  </div>

                  <div className={`what-arrow ${isActive ? "active" : ""}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
