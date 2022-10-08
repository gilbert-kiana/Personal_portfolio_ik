import React from "react";
// 2:00:00
const Qualification = () => {
  return (
    <section className-="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle"></span>Dedan Kimathi
                  University of Science and Technology
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">3D animator</h3>
                  <span className="qualification__subtitle"></span>Dedan Kimathi
                  University of Science and Technology
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i> 2022 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
