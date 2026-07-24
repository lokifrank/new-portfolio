// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowUpRightFromSquare,
//   faCodeBranch,
// } from "@fortawesome/free-solid-svg-icons";

// const ProjectCard = ({
//   name,
//   icon,
//   description,
//   technologies,
//   type,
//   gradient,
//   demo,
//   github,
// }) => {
//   return (
//     <div className="card project-card">

//       <div className={`project-header ${gradient}`}>

//         <div className="project-icon">

//           <i className={icon}></i>

//         </div>

//         <h4>{name}</h4>

//       </div>

//       <div className="card-body">

//         <div className="d-flex justify-content-between align-items-center mb-3">

//           <h5>{name}</h5>

//           <span className="badge project-badge">

//             {type}

//           </span>

//         </div>

//         <p className="text-secondary">

//           {description}

//         </p>

//         <div className="d-flex flex-wrap gap-2 my-3">

//           {technologies.map((tech, index) => (

//             <span
//               key={index}
//               className="tag"
//               style={{
//                 color: tech.color,
//                 background: tech.bg,
//                 border: `1px solid ${tech.border}`,
//               }}
//             >
//               {tech.name}
//             </span>

//           ))}

//         </div>

//         <div className="d-flex gap-2">

//           <a href={demo} className="btn view-btn flex-fill">

//             <FontAwesomeIcon
//               icon={faArrowUpRightFromSquare}
//               className="me-2"
//             />

//             View Project

//           </a>

//           <a
//             href={github}
//             className="btn github-btn"
//           >

//             <FontAwesomeIcon icon={faCodeBranch} />

//           </a>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProjectCard;

import "../styles/project.css";

function ProjectCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div className="project-card">

        <div className={`project-header ${project.gradient}`}>

          <div className="project-icon">

            <i className={`bi ${project.icon}`}></i>

          </div>

        </div>

        <div className="project-body">

          <div className="d-flex justify-content-between align-items-center">

            <h4>{project.title}</h4>

            <span className="badge app-badge">
              {project.type}
            </span>

          </div>

          <p className="project-description">
            {project.description}
          </p>

          {/* <div className="mb-3">

            {project.technologies.map((tech) => (
              <span className="tech-badge me-2" key={tech}>
                {tech}
              </span>
            ))}

          </div> */}

          <div className="d-flex flex-wrap gap-2 mb-3">
  {project.technologies.map((tech, index) => (
    <span
      key={index}
      className="tech-badge"
      style={{
        color: tech.color,
        background: tech.background,
        border: `1px solid ${tech.border}`,
      }}
    >
      {tech.name}
    </span>
  ))}
</div>

          <div className="d-flex justify-content-between">

            <button className="btn btn-primary w-75 me-2">
              <i className="bi bi-box-arrow-up-right me-2"></i>
              View Project
            </button>

            <button className="btn btn-dark github-btn">
              <i className="bi bi-github"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;