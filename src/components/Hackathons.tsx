import { useState, useEffect, useRef } from "react";
import "./styles/Hackathons.css";

const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasCounted) {
                    setHasCounted(true);
                    let start = 0;
                    const stepTime = Math.abs(Math.floor(duration / (end || 1)));
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= end) clearInterval(timer);
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration, hasCounted]);

    return { count, ref };
};

const achievementData = [
    {
        id: 1,
        type: "hackathon",
        title: "Airothon 2025",
        subtitle: "4th Place — Prize Winner",
        highlight: "AiroClaim — AI Claim Verification System",
        desc: "Built an AI-powered system that accelerates insurance claim verification workflows using intelligent automation.",
    },
    {
        id: 2,
        type: "hackathon",
        title: "Swafinix Hackathon",
        subtitle: "Top 10",
        highlight: "AI Appointment Scheduler",
        desc: "Developed an automated appointment scheduling system powered by AI workflow automation.",
    },
    {
        id: 3,
        type: "hackathon",
        title: "Swasthathon",
        subtitle: "Top 7 Finalist",
        highlight: "Camera-Based Skin Disease Detection using AI.",
        desc: "",
    },
    {
        id: 4,
        type: "hackathon",
        title: "Next Gen Hackathon — Soft Computing Research Society",
        subtitle: "Top 10",
        highlight: "EV Smartcharge Optimizer",
        desc: "Built an EV-based classification and smart charging optimization system.",
    },
    {
        id: 5,
        type: "certification",
        title: "ReadyTensor Agentic AI Certification — Module 1",
        subtitle: "ReadyTensor",
        highlight: "Retrieval Augmented Generation Systems",
        desc: "",
    },
    {
        id: 6,
        type: "certification",
        title: "ReadyTensor Agentic AI Certification — Module 2",
        subtitle: "ReadyTensor",
        highlight: "Multi-Agent AI Systems",
        desc: "",
    },
    {
        id: 7,
        type: "certification",
        title: "ReadyTensor Agentic AI Certification — Module 3",
        subtitle: "ReadyTensor",
        highlight: "Production-Level Agentic AI Systems",
        desc: "",
    },
    {
        id: 8,
        type: "certification",
        title: "Oracle Certified Foundations Associate",
        subtitle: "Oracle",
        highlight: "Cloud and enterprise infrastructure fundamentals.",
        desc: "",
    },
];

const Hackathons = () => {
    const [activeNode, setActiveNode] = useState(achievementData[0]);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance timeline
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setActiveNode((prev) => {
                const currentIndex = achievementData.findIndex(item => item.id === prev.id);
                const nextIndex = (currentIndex + 1) % achievementData.length;
                return achievementData[nextIndex];
            });
        }, 4000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const counter1 = useCountUp(34, 1500);
    const counter2 = useCountUp(4, 1500);
    const counter3 = useCountUp(3, 1500);

    return (
        <div className="hackathons-section section-container" id="hackathons">
            <div className="hackathons-container">
                <div className="hackathons-header">
                    <h2>
                        Hackathons <span>&amp;</span>
                        <br />
                        Achievements
                    </h2>

                    <div className="achievement-counters">
                        <div className="counter-box" ref={counter1.ref}>
                            <div className="counter-number">{counter1.count}</div>
                            <div className="counter-label">Hackathons<br />Participated</div>
                        </div>
                        <div className="counter-box" ref={counter2.ref}>
                            <div className="counter-number">{counter2.count}</div>
                            <div className="counter-label">Professional<br />Certifications</div>
                        </div>
                        <div className="counter-box" ref={counter3.ref}>
                            <div className="counter-number">{counter3.count}</div>
                            <div className="counter-label">Leadership<br />Roles</div>
                        </div>
                    </div>
                </div>

                <div
                    className="timeline-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="spotlight-panel-wrapper">
                        <div className="spotlight-panel" key={activeNode.id}>
                            <div className="spotlight-type">
                                {activeNode.type === "hackathon" ? "🏆 Hackathon" : "📜 Certification"}
                            </div>
                            <h3 className="spotlight-title">{activeNode.title}</h3>
                            <div className="spotlight-subtitle">{activeNode.subtitle}</div>
                            <div className="spotlight-highlight">{activeNode.highlight}</div>
                            {activeNode.desc && <p className="spotlight-desc">{activeNode.desc}</p>}
                        </div>
                    </div>

                    <div className="timeline-path-wrapper">
                        <div className="timeline-path">
                            <div className="timeline-glow-line"></div>
                            <div
                                className="timeline-glow-progress"
                                style={{ width: `${(achievementData.findIndex(item => item.id === activeNode.id) / (achievementData.length - 1)) * 100}%` }}
                            ></div>
                            {achievementData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`timeline-node ${activeNode.id === item.id ? "active" : ""}`}
                                    onClick={() => setActiveNode(item)}
                                >
                                    <div className="node-dot"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hackathons;
