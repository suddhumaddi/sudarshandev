import { useState, useEffect } from "react";
import "./styles/ScrollProgress.css";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (docHeight > 0) {
                setScrollProgress((scrollY / docHeight) * 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Init

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgress;
