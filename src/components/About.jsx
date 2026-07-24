import React from "react";
import profileImage from "../assets/images/profile-image2.png";

import personalInfo from "../data/personalInfo";
import socialLinks from "../data/socialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <section className="container-fluid p-sm-5 my-5 about-section-bg-img">

            <div className="row spacer-1"></div>
            <div className="row px-sm-5 my-5">
                <div className="section-label">
                    <span>WHO I AM</span>
                    <div className="section-label-line"></div>
                </div>
            </div>

            {/* <div className="spacer-1"></div> */}

            <div className="row align-items-center px-sm-5">

                {/* Left Side */}
                <div className="col-12 col-lg-5 px-lg-5 my-4 my-sm-0">
                    <div className="card mx-auto about-section-card p-1 rounded-5" style={{ width: "60%", height: "40%" }}>
                        <img
                            src={profileImage}
                            className="card-img-top rounded-5"
                            alt="Project"
                        />
                    </div>

                    <div className="d-none d-sm-block row mt-4">
                        <ul className="social-links justify-content-center align-items-center">

            {socialLinks.map((social) => (

                <li key={social.id}>

                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >

                        <FontAwesomeIcon icon={social.icon} />

                    </a>

                </li>

            ))}

        </ul>
                    </div>
                    {/* <img src="/path/to/your/image.jpg" alt="About Me" className="img-fluid rounded" /> */}
                </div>
                

                {/* Right Side */}
                <div className="col-12 col-lg-7 ps-4 pe-4 ps-lg-0 pe-lg-5 mb-4 mb-lg-0 ">
                    <p className="text-primary-secondary fs-5 fw-bold mb-2">
                        About Me
                    </p>
                    <h1 className="fs-1 fw-bold ">
                        Passionate Developer &
                        <span className="text-primary">
                          <br /> Problem Solver 
                        </span>
                        
                    </h1>
                    <div className="row mb-4">
                        <div className="col-md-1">
                            <div className="section-line"></div>
                        </div>
                    </div>
                    <p className="fs-5 lh-base fw-light text-secondary" style={{textAlign: "justify"}}>
                        I'm Zacharie Franklin, a dedicated Flutter & Laravel developer with 3+ years of
                        experience building mobile and web solutions. I blend clean code with beautiful
                        UI to deliver apps that users love. With a deep understanding of both front-end
                        and back-end development, I bridge the gap between design and functionality.
                    </p>

                    <div className="row g-5">

            {/* Left Column */}

            <div className="col-lg-6">

                {personalInfo.left.map((item, index) => (

                    // <div className="info-row" key={index}>
                    <div
        key={index}
        className={`info-row ${
            index === personalInfo.left.length - 1 ? "last-row" : ""
        }`}
    >

                        <div className="info-label">

                            {item.label}

                        </div>

                        <div className="info-value">

                            {item.badge ? (

                                <span className="availability">

                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className="availability-dot"
                                    />

                                    {item.value}

                                </span>

                            ) : (

                                item.value

                            )}

                        </div>

                    </div>

                ))}

            </div>

            {/* Right Column */}

            <div className="col-lg-6">

                {personalInfo.right.map((item, index) => (

                    // <div className="info-row" key={index}>
                    <div
        key={index}
        className={`info-row ${
            index === personalInfo.right.length - 1 ? "last-row" : ""
        }`}
    >

                        <div className="info-label">

                            {item.label}

                        </div>

                        <div className="info-value">

                            {item.location && (

                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="location-icon me-2"
                                />

                            )}

                            {item.email ? (

                                <a
                                    href={`mailto:${item.value}`}
                                    className="email-link"
                                >
                                    {item.value}
                                </a>

                            ) : (

                                item.value

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>

        <div className="mt-4">
                                <button className="btn btn-gradient me-3 my-2">
                                    <FontAwesomeIcon
                icon={faDownload}
                className="me-2"
            />
                                    Download CV
                                </button>
        
                                <button className=" my-2 btn btn-outline-dark btn-p text-light rounded-pill">
                                    <FontAwesomeIcon icon={faDownload}className="me-2" />
                                    Contact Me
                                </button>
                            </div>
                </div>

            </div>
            <div className="spacer-1"></div>
        </section>
    );
}

export default About;