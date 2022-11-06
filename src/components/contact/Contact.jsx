import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gilbertintabo@gmail.com</h5>
            <a href="mailto:gilbertintabo@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiTwitterLine className="contact__option-icon" />

            <h4>Twitter</h4>
            <h5>Twitter</h5>
            <a href="https://facebook.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123-456-7890</h5>
            <a href="https://www.whatsapp.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
