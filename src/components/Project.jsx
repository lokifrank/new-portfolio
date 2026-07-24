// // import ProjectCard from "../components/ProjectCard";
// // import projectsData from "../data/projectsData";
// import projectsData from "../data/projects";
// // import "../styles/projects";
// import ProjectCard from "./ProjectCard";

// import "../styles/project.css";

// function Projects() {
//   return (
//     <section className="container py-5">

//       <div className="row g-4">

//         {projectsData.map((project) => (

//           <div className="col-lg-4 col-md-6" key={project.id}>

//             <ProjectCard {...project} />

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default Projects;

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Projeccts() {

    return (

        <section className="container-fluid p-2 p-md-5 text-center project-section-bg-img">

            <div className="row">
                                        <div className="contact-divider">
                                          <div className="divider-line"></div>
            
                                          <button className="contact-btn">
                                            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                            My Work
                                          </button>
            
                                          <div className="divider-line"></div>
                                        </div>
                                    </div>
                        
                                    <div className="row m-3 text-light">
                                        <h3 className="fs-1 fw-semibold">Featured <span className="gradient-text2">Projects</span> </h3>
                                    </div>
                                    <div className="row m-3 text-secondary">
                                        <div className="col-lg-4 mx-auto">
                                            <p className="fs-5 fw-light">
                                            A selection of my best work — from mobile apps to full-stack web
platforms, each built with precision and purpose.
                                        </p>
                                        </div>
                                        
                                    </div>

            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                {projects.map(project=>(
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>
                </div>
            </div>

            <div className="spacer-1"></div>

        </section>

    );

}

export default Projeccts;