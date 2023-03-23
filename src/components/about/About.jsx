import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import CV from "../../assets/Gilbert_Intabo_resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>7+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I specialize in creating websites for individuals and small
            businesses. You shouldn’t have to settle for cheap solutions or
            generic templates. I provide custom designs at afforable prices.
            Frequently your website is the first impression your customers will
            get, so make sure it’s a good one.Take a look at my portfolio below,
            if you think I’d be a good match send me an email.{" "}
            <p>
              If you want a more technical look at my skills, you can download
              my CV
            </p>
          </p>
          <div className="cta">
            <a href={CV} download className="btn btn-primary">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
