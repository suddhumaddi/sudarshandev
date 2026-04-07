import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Infryntrek Systemes</h5>
              </div>
              <h3>Sep 2025 - Dec 2025</h3>
            </div>
            <p>
              Designed analytical dashboards and pipelines, extracting actionable insights from complex datasets to support business decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>Dec 2025 - Jan 2026</h3>
            </div>
            <p>
              Built financial technology features and data processing systems in a fast-paced fintech product environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer Intern</h4>
                <h5>Cognifyz Technologies</h5>
              </div>
              <h3>Jan 2026 - Feb 2026</h3>
            </div>
            <p>
              Engineered and deployed machine learning pipelines, trained models for real-world classification and regression tasks, and optimized model performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
