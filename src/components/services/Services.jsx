import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design + Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Converting users to customers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Clean</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modern designs - optimized for perfomance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Authentication.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Api writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Api integration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Databases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web hosting</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Extra Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Analytics - get insights into who is browsing your site so that
                you can make smarter decisions.{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Website audits - improve your page perfomance,SEO or user
                experience.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
