import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "../data/socialLinks";

// function Footer() {
//   return (
//     <footer className="footer">

//       <div className="container">

//         <div className="row gy-5">

//           {/* About */}
//           <div className="col-lg-4">

//             <div className="d-flex align-items-center mb-4">

//               <div className="logo-box">
//                 ZF
//               </div>

//               <h3 className="ms-3 mb-0">
//                 Zacharie Franklin
//               </h3>

//             </div>

//             <p className="footer-text">
//               Building Digital Experiences — one line of code at a time.
//               Flutter, Laravel & React developer based in Paris.
//             </p>

//             <div className="social-links">

//               <a href="#">
//                 <i className="bi bi-github"></i>
//               </a>

//               <a href="#">
//                 <i className="bi bi-linkedin"></i>
//               </a>

//               <a href="#">
//                 <i className="bi bi-twitter-x"></i>
//               </a>

//               <a href="#">
//                 <i className="bi bi-dribbble"></i>
//               </a>

//             </div>

//           </div>

//           {/* Navigation */}

//           <div className="col-lg-2">

//             <h6 className="footer-title">
//               Navigation
//             </h6>

//             <ul className="footer-links">

//               <li><a href="#home">Home</a></li>

//               <li><a href="#about">About</a></li>

//               <li><a href="#skills">Skills</a></li>

//               <li><a href="#projects">Projects</a></li>

//               <li><a href="#contact">Contact</a></li>

//             </ul>

//           </div>

//           {/* Services */}

//           <div className="col-lg-3">

//             <h6 className="footer-title">
//               Services
//             </h6>

//             <ul className="footer-links">

//               <li>Flutter Development</li>

//               <li>Laravel Development</li>

//               <li>React.js Development</li>

//               <li>Django & Python</li>

//               <li>UI/UX Implementation</li>

//             </ul>

//           </div>

//           {/* CTA */}

//           <div className="col-lg-3">

//             <div className="footer-card">

//               <small>
//                 READY TO START?
//               </small>

//               <h5>
//                 Let's build something amazing together.
//               </h5>

//               <button className="btn hire-btn w-100">

//                 <i className="bi bi-rocket-fill me-2"></i>

//                 Hire Me Now

//               </button>

//             </div>

//           </div>

//         </div>

//         <hr />

//         <div className="footer-bottom">

//           <p>
//             © 2026 Zacharie Franklin. All rights reserved.
//           </p>

//           <p>
//             Made with ❤️ using Flutter, React & Laravel
//           </p>

//           <p>
//             Douala, Cameroon 🇨🇲
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <footer className=" text-light pt-5 pb-3" style={{ background:"black"}}>

      <div className="container px-5 px-sm-0">

        <div className="row gy-5">

          {/* About */}
          <div className="col-lg-4">

            <div className="d-flex align-items-center mb-4">

              <div className="logo-box">
                ZF
              </div>

              <h3 className="fw-bold ms-3 mb-0">
                Zacharie Franklin
              </h3>

            </div>

            <p className="text-secondary lh-lg">
              Building Digital Experiences — one line of code at a time.
              Flutter, Laravel & React developer based in Douala.
            </p>

            {/* <div className="d-flex gap-3">

              <a href="#" className="social-icon">
                <i className="bi bi-github"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="bi bi-dribbble"></i>
              </a>

            </div> */}

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

          </div>

          {/* Navigation */}

          <div className="col-md-6 col-lg-2">

            <h6 className="text-uppercase text-secondary fw-bold mb-4">
              Navigation
            </h6>

            <ul className="list-unstyled">

              <li className="mb-3"><a href="#home" className="footer-link">Home</a></li>
              <li className="mb-3"><a href="#about" className="footer-link">About</a></li>
              <li className="mb-3"><a href="#skill" className="footer-link">Skills</a></li>
              <li className="mb-3"><a href="#work" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div className="col-md-6 col-lg-3">

            <h6 className="text-uppercase text-secondary fw-bold mb-4">
              Services
            </h6>

            <ul className="list-unstyled text-secondary">

              <li className="mb-3">Flutter Development</li>
              <li className="mb-3">Laravel Development</li>
              <li className="mb-3">React.js Development</li>
              <li className="mb-3">Django & Python</li>
              <li>UI/UX Implementation</li>

            </ul>

          </div>

          {/* CTA */}

          <div className="col-lg-3">

            <div className="cta-card p-4 rounded-4 h-100">

              <p className="small text-uppercase text-secondary fw-bold">
                Ready to Start?
              </p>

              <h5 className="fw-semibold mb-4">
                Let's build something amazing together.
              </h5>

              <button className="btn btn-gradient w-100 rounded-3 py-2">

                <i className="bi bi-rocket-fill me-2"></i>

                Hire Me Now

              </button>

            </div>

          </div>

        </div>

        <hr className="border-secondary my-5"/>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-secondary small gap-3">

          <span>
            © 2026 Zacharie Franklin. All rights reserved.
          </span>

          <span>
            Made with ❤️ using Flutter, React & Laravel
          </span>

          <span>
            Douala, Cameroon 🇨🇲
          </span>

        </div>

        <div className="my-4"></div>

      </div>

    </footer>
  );
}

export default Footer;