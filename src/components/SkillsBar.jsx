import React from "react";
import skills from "../data/skills";

import "../styles/SkillsBar.css";

function SkillsBar() {
    return (
        <section className="skills-section">
            <div className="skills-scroll">

                {[...skills, ...skills].map((skill, index) => (
                    <div
                        className="skill-pill"
                        key={index}
                    >
                        {skill}
                    </div>
                ))}

            </div>
        </section>
    );
}

export default SkillsBar;