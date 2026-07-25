import React from "react";
import SkillCard from "../components/SkillCard";
import Journey from "../components/Journey";
import skillsData from "../data/skillsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/skills.css";
import "../styles/journey.css";

function Skill() {
    return (
        <section id="skill" className="container-fluid my-4 text-center">

            <div className="row m-3">
                <div className="col-10 col-md-4 col-lg-2 mx-auto py-1 border border-info border-opacity-25 rounded-pill">
                    <div className="text-primary">
                        <FontAwesomeIcon icon={faCircle} className=" me-1" />
                        <span className="ms-1">My Expertise</span>
                    </div>
                </div>
            </div>

            <div className="row m-3 text-light">
                <h3 className="fs-1 fw-semibold">Tech Stack & <span className="text-primary-secondary">Skills</span> </h3>
            </div>
            <div className="row m-3 text-secondary">
                <div className="col-10 col-lg-4 mx-auto">
                    <p className="fs-5 fw-light">
                    A curated collection of tools, frameworks, and technologies I use to build
exceptional digital products.
                </p>
                </div>
                
            </div>

            <div className="row g-4 px-5 my-5">
             {skillsData.map((skill) => (
               <div className="col-lg-4 col-md-6" key={skill.id}>
                 <SkillCard {...skill} />
               </div>
             ))}
           </div>

           <div className="spacer-1"></div>

           <div className=" d-none d-md-block row m-3">
                <div className="col-md-3 col-lg-1 mx-auto py-1 rounded-pill" style={{border: "1px solid rgba(168,85,247,.35)"}}>
                    <div className="text-primary-secondary">
                        <FontAwesomeIcon icon={faCircle} className=" me-1" />
                        <span className="ms-1">My Journey</span>
                    </div>
                </div>
            </div>

            <div className=" d-none d-md-block row m-3 text-light">
                <h3 className="fs-1 fw-semibold">Experience <span className="gradient-text">Timeline</span> </h3>
            </div>
            <div className=" d-none d-md-block row m-3 text-secondary">
                <div className="col-lg-4 mx-auto">
                    <p className="fs-5 fw-light">
                    Key milestones that have shaped my growth as a developer and problem
solver.
                </p>
                </div>
                
            </div>

            <Journey/>

            <div className="spacer-1"></div>


        </section>
    );
}
export default Skill;
