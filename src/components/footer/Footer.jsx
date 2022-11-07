import React from "react";
import "./footer.css";
import { FaLinkedin, FaArtstation } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kaiser
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gilbert-intabo-332ba81a9/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/gilbert-kiana">
          <FiGithub />
        </a>
        <a href="https://twitter.com/gilbert_intabo">
          <IoLogoTwitter />
        </a>
        <a href="https://www.artstation.com/kiana_kaiser">
          <FaArtstation />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gilbert Intabo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
