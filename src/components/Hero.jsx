import React from "react";
import profileImage from "../assets/images/hero_section2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <section id="home" className="container-fluid px-5 py-5 ">
            <div className="row align-items-center hero min-vh-100">
                 {/* Right Side */}
                <div className=" d-block d-lg-none col-sm-10 mx-auto text-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="img-fluid"
                        style={{ Width: "576px" }}
                    />
                    {/* <div className="d-none row spacer-2"></div> */}
                </div>

                {/* Left Side */}
                <div className="col-12 col-sm-10 col-lg-5 mx-auto px-5 py-5 ">
                    {/* <h5 className="text-primary">Hello, I'm</h5> */}
                    

                    <div className="row-cols-4 justify-content-center align-items-center g-2">
                        <div className=" col-12 col-sm-8 col-md-5 px-3 py-1 border border-info border-opacity-25 rounded-pill">
                            
                            {/* <div className="text-primary justify-content-center align-items-center mx-auto">
                                <FontAwesomeIcon icon={faCircle} className="me-2" />
                                Available for Freelance
                            </div> */}

                            <div className="text-primary text-center">
                                                    <FontAwesomeIcon icon={faCircle} className=" me-1" />
                                                    <span className="ms-1">Available for Freelance</span>
                                                </div>
                            
                        </div>
                    </div>
                    

                    <h1 className="text-center text-lg-start display-2 fw-bold">
                        Hi, I'm Zacharie Franklin
                    </h1>

                    <h2 className="text-center text-lg-start mb-4 display-4 fw-bold gradient-text">
                        Flutter & Laravel Developer
                    </h2>

                    <p className="fs-3 fw-light text-secondary text-center text-lg-start">
                        I build high-performance mobile apps and scalable web
                        platforms. Specializing in Flutter, Laravel, React.js, and Django
                        — turning ideas into polished digital products.
                    </p>

                    <div className="mt-4">
                        <button className="btn btn-gradient my-2 ms-4 me-3 my-sm-0 ms-sm-0">
                            View Projects
                        </button>

                        <button className="btn btn-outline-dark btn-p text-light rounded-pill my-2 ms-2 my-sm-0 ms-sm-0">
                            {/* <FontAwesomeIcon icon={download} className="me-2" /> */}
                            <FontAwesomeIcon
        icon={faDownload}
        className="me-2"
    />
                            Download CV
                        </button>
                    </div>
                    <div className="row spacer-2"></div>
                </div>

                {/* Right Side */}
                <div className="d-none d-lg-block col-lg-5 text-center me-auto">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="img-fluid"
                        style={{ Width: "576px" }}
                    />
                    <div className="d-none d-sm-block row spacer-2"></div>
                </div>

            </div>
            {/* <div className="row spacer-1">

            </div> */}
        </section>
    );
}

export default Hero;