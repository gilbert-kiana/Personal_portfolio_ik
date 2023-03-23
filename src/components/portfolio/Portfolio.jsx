import React from "react";
import "./portfolio.css";

import Img3 from "../../assets/faiyol.jpg";
import Img4 from "../../assets/grants_getaways.png";
import Img5 from "../../assets/daida.png";
import Img6 from "../../assets/fitness.png";
import Img7 from "../../assets/link.png";
import Img8 from "../../assets/github.png";

const Portfolio = () => {
  const data = [
    {
      id: 3,
      image: Img3,
      title: "Faiyol Academy",
      demo: "http://faiyol.com/",
    },
    {
      id: 4,
      image: Img4,
      title: "Grants Getaways Teambuiding",
      demo: "http://grantsgetaways.co.ke/",
    },
    {
      id: 6,
      image: Img6,
      title: "Grind Lean fitness website",
      demo: "https://grindleanfit.com/",
    },
    {
      id: 5,
      image: Img5,
      title: "Daida's Library",
      demo: "http://daidalibrary.com/",
    },

    {
      id: 7,
      image: Img7,
      title: "Link Empower Connect Site",
      demo: "https://linkempowerconnect.co.ke/",
    },

    {
      id: 8,
      image: Img8,
      title: "Github Porfolio",
      demo: "https://github.com/gilbert-kiana",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Projects Done</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target="_blank">
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
