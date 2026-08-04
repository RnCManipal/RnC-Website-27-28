import React, { useEffect,useState } from "react";
import "./Home.css";

import Header from "../Header/Header";
import assets from "../../assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animateFadeIn = (target, direction = 'up', offset = 80,duration=1) => {
  let fromProps = {
    opacity: 0,
  };
 switch (direction) {
    case 'up':
      fromProps = { y: 50, opacity: 0 }; 
      break;
    case 'down':
      fromProps = { y: -50, opacity: 0 };
      break;
    case 'left':
      fromProps = { x: -50, opacity: 0 }; 
      break;
    case 'right':
      fromProps = { x: 50, opacity: 0 }; 
      break;
    default:
      break;
  }

   
  gsap.fromTo(
    target,
    fromProps,
    {
      y: 0, 
      x: 0, 
      opacity: 1, 
      duration: duration,
      scrollTrigger: {
        trigger: target,
        start: `top ${offset}%`, 
        toggleActions: "play none none none",
      },
    }
  );
};
const Home = () => {
  useEffect(() => {
    const animateElement = (selector) => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'top 30%',
          toggleClass: 'active',
          once: true,
        },
      });
    };
    animateElement('.fade-up');
    animateElement('.fade-down');
    animateElement('.left-to-right');
    animateElement('.right-to-left');
  }, []);


  const Contact = () => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSuccess(true);
  };
  useEffect(() => {
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  useEffect(() => {
    animateFadeIn(".about-image img", "up",80,1.5); 
    animateFadeIn(".about-text-content", "down"); 
    animateFadeIn(".heading2", "left"); 
    animateFadeIn(".left1", "left"); 
    animateFadeIn(".right-vision", "right"); 
    animateFadeIn(".left2", "left");
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="about-heading" id="about_us">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="About-us">
          <div className="about-image">
            <img src={assets.colorlogo} alt="Color Logo" />
          </div>
          <div className="about-text">
            <div className="heading2">
              <h2>We Imagine.We Innovate.</h2>
              <h2>We are RNC.</h2>
            </div>
            <div className="about-text-content fade-up">
              <p>
                Robotics and Circuits is a student team at Manipal Institute of
                Technology founded by Anuj Mangla in the year 2010. We deal with
                the latest trends in robotics, automation, computer vision,
                embedded systems, and allied fields. Our interdisciplinary team
                works on cool projects through out the year. We imagine,
                innovate and bring ideas to life. We also participate in various
                robotics competitions across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="vision">
        <div className="heading">
          <h1>our vision</h1>
        </div>
        <div className="container">
          <div className="row"></div>
          <div className="visioncontent">
            <div  className="left1">
              <h2 className="left ">
                <img src={assets.experience} alt="experience" />
                EXPERIENCE.
              </h2>
              <div className="box1">
                <p>
                  To impart hands-on experience to students, in a manner that
                  complements their coursework.
                </p>
              </div>
            </div>

            <div className="right-vision">
              <h2>
                <img src={assets.explore} alt="explore" />
                EXPLORE.
              </h2>
              <div  className="box2">
                <p>
                  To encourage exploration of various fields for the development
                  of an interdisciplinary skillset.
                </p>
              </div>
            </div>
            <div  className="left2">
              <h2 className="left ">
                <img src={assets.innovate} alt="innovate" />
                INNOVATE.
              </h2>
              <div className="box1">
                <p>
                  To solve real-world problems and help society through
                  technology by bringing innovations to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quote">
        <div className="quote">
          <div className="quotecontent">
            <div className="quote-row">
              <p>
                <i>“Failure is an option here.</i>
                <br />
                <i>
                  If things are not failing, you are not innovating enough.”
                </i>
              </p>
              <span>- ELON MUSK</span>
            </div>
          </div>
        </div>
      </div>
      <div className="what-we-do" id="our_work">
        <div className="heading">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="box-container">
          <div className="box">
            <div className="icon">
              <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
            <h5>Projects</h5>
            <p>
              {" "}
              We work on cool projects throughout the year. We bring ideas to
              life and provide novel solutions to industrial and everyday
              problems.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-laptop" aria-hidden="true"></i>
            </div>
            <h5>Workshops</h5>
            <p>
              {" "}
              We organize internal and external workshops to share our technical
              skills with other robotics enthusiast within and outside our team.
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-trophy" aria-hidden="true"></i>
            </div>
            <h5>Competitions</h5>
            <p>
              {" "}
              We participate in robotics competiitions at technical fesivals
              around the year. They enhance techncal skills and team dynamics.
            </p>
          </div>
        </div>
      </div>
      <div className="vedanthbox">
        <div className="vedanth-content">
          <div className="vedanth-heading">
            <h1>VEDANTH</h1>
          </div>
          <div className="row">
            <div className="text">
              Vedanth is the annual <span>technical exhibition</span> organised
              by RNC during TechTatva at MIT, Manipal. It is a platform for
              young minds to showcase their innovative ideas.
            </div>
            <div className="button2">
              <a href="/vedanth">Know More!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="activity" id="ongoing">
        <div className="heading">
          <h1>Ongoing Activities</h1>
        </div>
        <div className="activity-content">
          <div className="activity-box">
            <ul>
              <li>BITS Quark 2024</li>
              <li>Technoxian - World Robotics Championship 2024 </li>
              <li>Robocup 2024</li>
              <li>Kavach 2024</li>
              <li>Smart India Hackathon 2023</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contact-des">
          <div className="heading2">
            <h1>Contact Us</h1>
          </div>

          <div className="contact-content ">
            <p className="contact-desc">
              Drop us a message! We'd Love to get in touch.
            </p>
            <span>&#9679; &#9679; &#9679;</span>
          </div>
          <div className="contact-container">
            <div className="left-contact">
              <form id="contactForm" onSubmit={handleSubmit}>
                <input
                  className="inputbox fullname"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  data-error="Name is required."
                  // value={form.name}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>

                <input
                  className="inputbox email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  data-error="Email is required."
                  // value={form.email}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>

                <input
                  className="inputbox subject"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  // value={form.subject}
                  onChange={handleChange}
                />

                <textarea
                  className="inputbox message"
                  style={{ resize: "none" }}
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  data-error="Message is required."
                  // value={form.message}
                  onChange={handleChange}
                ></textarea>
                <div className="help-block with-errors"></div>

                <button
                  className="send-button"
                  data-aos="zoom-in"
                  type="submit"
                >
                  Send <i className="fas fa-paper-plane" aria-hidden="true"></i>
                </button>

                {formSuccess && (
                  <div className="alert alert-success success-message">
                    Form submitted successfully.
                  </div>
                )}
              </form>
            </div>
            <div className="right-contact">
              <div className="contact_icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <span>
                {" "}
                Workshop No.5, MAHE Workshops,
                <p> Manipal Institute of Technology,</p>
                <p>Eshwar Nagar, Manipal,</p>
                Karnataka-576104
              </span>
              <div className="contact_icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>{" "}
              <span>Rnc.mit@manipal.edu</span>
              <div className="contact_icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span> +91-76809 69597</span>
              </div>
              <div className="contact_icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span> +91-98107 90403</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
