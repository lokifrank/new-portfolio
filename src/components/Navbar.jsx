// import React from "react";
// import icon from "../assets/images/icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//     return (
//         <section className="container-fluid">
//             <div className="row align-items-center border border-opacity-25">
//                 <div className="col-10 mx-auto px-5">
//                     <nav className="navbar navbar-expand-lg bg-none py-3">
//             <div className="container-fluid">
//                 <a className="navbar-brand text-light" href="#">
//                     <img
//                                             src={icon}
//                                             alt="Profile"
//                                             // className="img-fluid"
//                                             style={{
//             width: "40%",
//             height: "40%"
//         }}
//                                         />
//                 </a>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//                     <ul className="navbar-nav gap-4">
//                         <li className="nav-item">
//                             <a
//                                 className="nav-link active text-light"
//                                 aria-current="page"
//                                 href="#"
//                             >
//                                 Home
//                             </a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link text-light" href="#">
//                                 About
//                             </a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link text-light" href="#">
//                                 Skills
//                             </a>
//                         </li>

//                         <li className="nav-item">
//                             <a
//                                 className="nav-link text-light"
//                                 // aria-disabled="true"
//                                 href="#"
//                             >
//                                 Projects
//                             </a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link text-light" href="#">
//                                 Contact
//                             </a>
//                         </li>

//                     </ul>
//                 </div>
//                 <button className="btn btn-gradient me-3">
//                     Hire Me 
//                      <FontAwesomeIcon
//         icon={faArrowRight}
//         className="ms-2"
//     />
    
//                 </button>
//             </div>
//         </nav>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default Navbar;

import icon from "../assets/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header className="border-bottom border-secondary border-opacity-25">

      <div className="container">

        <nav className="navbar navbar-expand-lg py-3">

          {/* Logo */}

          <a className="navbar-brand" href="#">

            <img
              src={icon}
              alt="Logo"
              style={{
                width: "55px",
                height: "55px",
                objectFit: "contain",
              }}
            />

          </a>

          {/* Toggle */}

          <button
            className="navbar-toggler border-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >

            <ul className="navbar-nav mx-auto gap-lg-4 text-center">

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>

            </ul>

            {/* Button */}

            <div className="text-center mt-3 mt-lg-0">

              <button className="btn btn-gradient">

                Hire Me

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ms-2"
                />

              </button>

            </div>

          </div>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;