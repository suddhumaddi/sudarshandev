import "./styles/Leadership.css";

const leadershipRoles = [
    {
        org: "Codex Programming Club",
        role: "Core Member",
        desc: "Contributing to collaborative programming activities, technical initiatives, and coding events.",
    },
    {
        org: "Ignite Entrepreneurship Club",
        role: "Executive Member",
        desc: "Supporting entrepreneurship initiatives and organizing innovation-focused events.",
    },
    {
        org: "Russel Belk Center for International Relations",
        role: "Student Committee Member",
        desc: "Promoting international collaborations and supporting global academic engagement.",
    },
];

const Leadership = () => {
    return (
        <div className="leadership-section section-container" id="leadership">
            <div className="leadership-header">
                <h2>
                    Leadership <span>&amp;</span>
                    <br />
                    University Roles
                </h2>
            </div>

            <div className="leadership-grid">
                {leadershipRoles.map((item, index) => (
                    <div className="leadership-card" key={index}>
                        <div className="card-content">
                            <h3>{item.org}</h3>
                            <div className="role-badge">{item.role}</div>
                            <p>{item.desc}</p>
                        </div>
                        <div className="hover-glow"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
