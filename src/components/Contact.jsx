import React from "react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
    // faLocationDot,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import personalInfo from "../data/personalInfo";
import socialLinks from "../data/socialLinks";

import "../styles/contact.css";



function Contact(){
    console.log("Contact rendered");
    console.log(emailjs);

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
});

const [loading, 
    setLoading
] = useState(false);

// const [name, setName] = useState("");

// const handleChange = (e) => {

//     const { name, value, checked, type } = e.target;

//     setFormData(prev => ({
//         ...prev,
//         [name]: type === "checkbox"
//             ? checked
//             : value
//     }));
// };

const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    console.log("Changing:", name, value);

    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
};


const handleSubmit = async (e) => {

    

    e.preventDefault();

    console.log(formData);

    if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (!formData.agree) {
        alert("Please agree to the privacy policy.");
        return;
    }

    try {

        setLoading(true);

        await emailjs.send(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },

            "YOUR_PUBLIC_KEY"

        );

        alert("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            agree: false,
        });

    }
    catch(err){

        console.log(err);

        alert("Something went wrong.");

    }
    finally{

        setLoading(false);

    }

};
    return(
        <section id="contact" className="container-fluid my-2 p-2 p-md-5 text-center contact-section-bg-img" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>

                        <div className="spacer-1"></div>
                        <div className="row">
                            <div className="contact-divider">
                              <div className="divider-line"></div>

                              <button className="contact-btn">
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                GET IN TOUCH
                              </button>

                              <div className="divider-line"></div>
                            </div>
                        </div>
            
                        <div className="row m-3 text-light">
                            <h3 className="fs-1 fw-semibold">Let's Work <span className="gradient-text2">Together</span> </h3>
                        </div>
                        <div className="row m-3 text-secondary">
                            <div className="col-lg-4 mx-auto">
                                <p className="fs-5 fw-light">
                                Have a project in mind or want to collaborate? I'd love to hear from you.
Let's build something great.
                            </p>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col-md-11 mx-auto">
                                <div className="row my-4">

                            <div className="col-lg-5 px-5 text-start">
                                <div className="card text-light p-4 rounded-4" style={{backgroundColor:"rgba(255, 255, 255, 0.02)", border:"1px solid rgba(0, 194, 255, 0.2)"}}>
                                    {/* <div className="row"> */}
                                        {/* <div className="box rounded-4 ms-3">
                                            <FontAwesomeIcon icon={faPaperPlane} className="my-3 fs-4"/>
                                        </div> */}
                                        <div className="box d-inline-flex rounded-4 ms-3 p-3">
    <FontAwesomeIcon icon={faPaperPlane} className="fs-4" />
</div>
                                    {/* </div> */}
                                    <div className="card-body">
                                        <h5 className="card-title fs-3 fw-semibold">Have a project in mind? Let's talk!</h5>
                                        <p className="card-text text-secondary ">
                                            I'm currently available for freelance work and open to full-time
                                            opportunities. Whether you need a mobile app, web platform, or
                                            API integration — I'm here to help.
                                        </p>
                                        <p className="text-start text-green">
                                            <FontAwesomeIcon
                                                                                icon={faCircle}
                                                                                className="me-2"
                                                                            /> Available for new projects</p>
                                    </div>
                                </div>

                                {/* <div className="row"> */}
                                    {/* {personalInfo.right.map((item, index) => (
                                        <div className="card text-light my-3 p-4 rounded-4" style={{backgroundColor:"rgba(246, 243, 243, 0.1)", border:"1px solid rgba(0, 194, 255, 0.2)"}} key={index}>
                                            <div className="row">
                                                <div className="rounded-4 m-2 text-center align-items-center" style={{width:"15%", backgroundColor:"rgba(0, 194, 255, 0.1)", border:"1px solid rgba(0, 194, 255, 0.2)"}}>
                                                <FontAwesomeIcon icon={item.icon} className="my-4 fs-4 text-primary" style={{}} />
                                            </div>
                                
                                            <div className=" py-3" style={{width:"75%"}}>
                                                <small className="text-secondary">{item.label}</small>
                                                <h5 className="text-light fw-semibold fs-6">{item.value}</h5>
                                            </div>
                                            </div>
                                        </div>
                                    ))} */}

                                    {personalInfo.right.map((item, index) => (
  <div
    key={index}
    className="card text-light my-3 p-3 rounded-4"
    style={{
      backgroundColor: "rgba(246,243,243,0.1)",
      border: "1px solid rgba(0,194,255,0.2)",
    }}
  >
    <div className="row align-items-center g-3">

      {/* Icon */}
      <div className="col-auto">

        <div
          className="rounded-4 d-flex justify-content-center align-items-center p-3"
          style={{
            backgroundColor: "rgba(0,194,255,0.1)",
            border: "1px solid rgba(0,194,255,0.2)",
            width: "60px",
            height: "60px",
          }}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="fs-4 text-primary"
          />
        </div>

      </div>

      {/* Text */}
      <div className="col">

        <small className="text-secondary">
          {item.label}
        </small>

        <h5 className="text-light fw-semibold fs-6 mb-0">
          {item.value}
        </h5>

      </div>

    </div>
  </div>
))}
                                {/* </div> */}
                                <p className="mt-5 text-secondary fw-semibold">Connect with me</p>

                                {/* <div className="row mt-4 ms-1"> */}
                                                        <ul className="social-links justify-content-start align-items-center">
                                
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
                                                    {/* </div> */}

                            </div>

                            <div className="col-lg-7 mt-4 mt-lg-0 px-5 px-lg-0">
                                <div className="card text-light p-4 rounded-4 text-start" style={{backgroundColor:"rgba(255, 255, 255, 0.02)", border:"1px solid rgba(0, 194, 255, 0.2)"}}>
                                     <form onSubmit={handleSubmit}>

        <div className="row">

          {/* Full Name */}
          <div className="col-md-6 mb-4">
            <label className="form-label contact-label">
              FULL NAME
            </label>

            <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="form-control contact-input"
    placeholder="Zacharie Franklin"
/>  

{/* <input
    className="form-control"
    value={name}
    onChange={(e) => setName(e.target.value)}
/> */}
          </div>

          {/* Email */}
          <div className="col-md-6 mb-4">
            <label className="form-label contact-label">
              EMAIL ADDRESS
            </label>

            <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="form-control contact-input"
    placeholder="you@example.com"
/>
          </div>

          {/* Subject */}
          <div className="col-12 mb-4">
            <label className="form-label contact-label">
              SUBJECT
            </label>

            <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    className="form-control rounded-3 contact-input"
    placeholder="Project inquiry..."
/>
          </div>

          {/* Message */}
          <div className="col-12 mb-4">
            <label className="form-label contact-label">
              MESSAGE
            </label>

            {/* <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
/> */}  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="form-control contact-input"
    rows={6}
    placeholder="Tell me about your project..."
></textarea>


          </div>

          {/* Checkbox */}
          <div className="col-12 mb-4">

            <div className="form-check">

              <input
    className="form-check-input"
    type="checkbox"
    id="privacy"
    name="agree"
    checked={formData.agree}
    onChange={handleChange}
/>

              <label
                className="form-check-label contact-checkbox"
                htmlFor="privacy"
              >
                I agree to the privacy policy. My data will be used solely
                to respond to my inquiry.
              </label>

            </div>

          </div>

          {/* Button */}

          <div className="col-12">

            <button
    className="btn contact-btn-form w-100 py-3 rounded-4"
    type="submit"
    disabled={loading}
>
    <FontAwesomeIcon
        icon={faPaperPlane}
        className="me-2"
    />

    {loading ? "Sending..." : "Send Message"}

</button>

          </div>

        </div>

      </form>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
        </section>
    );
}


export default Contact;