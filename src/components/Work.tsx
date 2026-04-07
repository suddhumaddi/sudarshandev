import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

import { useState } from "react";
import { createPortal } from "react-dom";

const projects = [
  {
    id: "01",
    name: "Production GitHub Multi-Agent RAG System",
    category: "AI ENGINEERING",
    tools: "Python, LangGraph, LangChain, FAISS, HuggingFace Embeddings, NLTK, OpenRouter API, Streamlit, GitPython",
    description: "A production-grade multi-agent Retrieval-Augmented Generation (RAG) system designed to analyze large-scale GitHub repositories by performing automated code ingestion, semantic indexing, and agent-based reasoning. The system clones repositories using GitPython, parses and chunks source code files, generates dense vector embeddings using HuggingFace models, and stores them in a FAISS vector database for efficient similarity search. A LangGraph-orchestrated multi-agent pipeline coordinates specialized agents responsible for repository analysis, metadata extraction, and content improvement. The final output consists of structured recommendations for improving documentation, repository organization, and developer onboarding.",
    problem: "Modern software repositories are often poorly documented and difficult to navigate, making it challenging for developers to understand codebases, onboard quickly, and maintain consistency across projects.",
    impact: "Demonstrates a complete end-to-end AI system combining RAG architecture, multi-agent orchestration, and production-level enhancements such as retry logic, input validation, structured outputs, and modular pipeline design. Highlights the ability to build scalable AI-powered developer tools for real-world code intelligence tasks.",
    github: "https://github.com/",
    image: "/images/githubb.png"
  },
  {
    id: "02",
    name: "Academia AI — Multi-Agent Research Assistant",
    category: "AI ENGINEERING",
    tools: "Python, LangGraph, LangChain, FAISS, PyPDF, NLTK, OpenRouter API, Text Processing Pipelines",
    description: "A multi-agent AI system that processes academic research papers using a Retrieval-Augmented Generation pipeline enhanced with agent-based orchestration. The system ingests PDF or text documents, extracts content using PyPDF, and performs semantic chunking followed by embedding generation for storage in a FAISS vector database. A LangGraph-controlled workflow coordinates multiple agents, including a Document Ingestor for preprocessing, a Thesis Extractor for identifying key hypotheses and contributions using NLP techniques, and an Insight Synthesizer that retrieves relevant context and generates structured summaries using LLMs. The system enforces output validation through schema constraints and includes retry mechanisms for robustness.",
    problem: "Academic papers are dense, unstructured, and time-consuming to analyze, requiring significant manual effort to extract meaningful insights such as hypotheses, methodologies, and conclusions.",
    impact: "Showcases advanced agent-based AI system design for knowledge extraction, combining semantic retrieval, structured summarization, and fault-tolerant LLM pipelines. Demonstrates the ability to build scalable AI systems for research automation and knowledge synthesis.",
    github: "https://github.com/",
    image: "/images/academia.png"
  },
  {
    id: "03",
    name: "AiroClaim — AI Claim Verification System",
    category: "INTELLIGENT AUTOMATION",
    tools: "Python, EasyOCR, PyMuPDF, Pandas, Streamlit, Regex Parsing, Rule-based Decision Systems",
    description: "An AI-driven document processing and verification system that automates insurance claim analysis by extracting structured data from unstructured documents. The system supports both native and scanned PDFs using PyMuPDF and EasyOCR, converting documents into machine-readable text. It applies regex-based information extraction to identify key fields such as policy numbers, claim amounts, and incident dates. A rule-based validation engine compares extracted data with user-provided inputs and detects inconsistencies, generating a fraud probability score. The system also includes a Streamlit interface for user interaction and a CSV-based persistence layer for claim tracking.",
    problem: "Insurance claim verification is heavily manual, involving unstructured document analysis, making it slow, inconsistent, and prone to fraud or human error.",
    impact: "Implements an end-to-end intelligent automation pipeline combining OCR, data extraction, and rule-based analytics to significantly reduce manual effort in claim processing while improving accuracy and transparency.",
    github: "https://github.com/",
    image: "/images/airoclaimm.png"
  },
  {
    id: "04",
    name: "GestureOS — Computer Vision Interaction System",
    category: "COMPUTER VISION",
    tools: "Python, OpenCV, MediaPipe, PyAutoGUI, PyCaw, Real-time Processing Pipelines",
    description: "A real-time computer vision-based human-computer interaction system that enables users to control operating system functions through hand gestures captured via a webcam. The system uses MediaPipe to detect hand landmarks and extract 21 keypoints per frame, which are processed to classify static and dynamic gestures. A modular mode-based architecture allows switching between interaction modes such as cursor control, media control, and system shortcuts. The system incorporates smoothing algorithms (Exponential Moving Average) to reduce jitter and implements gesture hold thresholds and cooldown mechanisms to ensure reliable action triggering.",
    problem: "Traditional input devices such as keyboards and mice are not suitable for touchless environments or accessibility-driven interaction scenarios.",
    impact: "Demonstrates real-time computer vision pipeline design, gesture recognition, and system-level integration, highlighting expertise in building responsive, interactive AI systems with practical usability.",
    github: "https://github.com/",
    image: "/images/gesture.png"
  },
  {
    id: "05",
    name: "AstroRisk — Solar Flare Prediction System",
    category: "MACHINE LEARNING",
    tools: "Python, Data Analysis, Feature Engineering, Time-Series Processing, API Integration, Visualization",
    description: "A data-driven analytics platform that processes space weather data to model solar activity patterns and estimate risk levels for critical infrastructure such as satellites, aviation systems, and power grids. The system integrates external space weather APIs to collect real-time and historical solar data, performs preprocessing and feature engineering to derive meaningful indicators, and computes risk scores based on solar intensity and event characteristics. The results are visualized through an interactive dashboard for monitoring and analysis.",
    problem: "Space weather events like solar flares can disrupt critical infrastructure, but raw scientific data is difficult to interpret and lacks actionable risk insights.",
    impact: "Transforms complex scientific datasets into interpretable risk metrics through data processing and feature engineering pipelines, demonstrating the ability to apply data science techniques to real-world environmental risk modeling problems.",
    github: "https://github.com/",
    image: "/images/astrorisk.png"
  },
  {
    id: "06",
    name: "Netflix Wrapped Analyzer",
    category: "DATA INTELLIGENCE",
    tools: "Python, Pandas, Scikit-learn, Plotly, Streamlit, Feature Engineering, Statistical Modeling",
    description: "A behavioral data analytics system that processes Netflix viewing history to generate personalized user insights using advanced feature engineering and machine learning techniques. The system constructs a multi-dimensional feature vector capturing viewing patterns such as binge behavior, session consistency, content diversity (using Shannon entropy), and temporal viewing habits. It applies clustering algorithms (KMeans) to segment users into behavioral archetypes and uses Plotly to create interactive visualizations, including time-series trends, distribution charts, and radar plots. The platform also includes narrative generation components for insight storytelling.",
    problem: "Streaming platforms provide raw user activity data but lack interpretable analytics that help users understand their viewing behavior and preferences.",
    impact: "Demonstrates strong data science capabilities by combining feature engineering, clustering, statistical metrics, and visualization to convert raw behavioral data into actionable insights and user intelligence.",
    github: "https://github.com/",
    image: "/images/netflix.png"
  }
];

type Project = typeof projects[0];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="project-modal-header">
          <span>{project.id}</span>
          <h2>{project.name}</h2>
          <p className="project-modal-category">{project.category}</p>
        </div>
        <div className="project-modal-body">
          <div className="project-modal-section">
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-modal-section">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="project-modal-section">
            <h3>Impact</h3>
            <p>{project.impact}</p>
          </div>
          <div className="project-modal-section">
            <h3>Technologies Used</h3>
            <p>{project.tools}</p>
          </div>
        </div>
        <div className="project-modal-footer">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Work = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
        </div>
      </div>

      <div className="work-slider-wrapper">
        <button onClick={scrollLeft} className="work-arrow-btn left-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={scrollRight} className="work-arrow-btn right-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        <div className="work-flex" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index} onClick={() => setSelectedProject(project)} style={{ cursor: "pointer" }}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Work;
