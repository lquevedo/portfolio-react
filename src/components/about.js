import React from "react";

const About = () => {
  return (
    <section id="aboutContainer">
      <nav className="stickyNav tertiaryNav" id="tertiary">
        <h2>About</h2>
      </nav>
      <div className="container">
        <div className="container__images" id="container__images">
          <div className="container__images--one" />
          <div className="container__images--two" />
          <div className="container__images--three" />
        </div>
        <div className="container__right">
          <ul>
            <li>Hello, I'm Luis.</li>
            <li>Passionate. Curious. Road to Hire participant.</li>
            <li>From Mexico to Charlotte, NC.</li>
            <li>Intrigued by design, video games, sports and good music.</li>
            <li>
              Seeking to become a web developer by using the skills obtained
              from the Road to Hire program.
            </li>
            <li>
              <span>Skills</span> include: HTML, CSS, SCSS, Javascript, ReactJS,
              AJAX, NodeJS, API's, MongoDB, MySQL
            </li>
          </ul>
        </div>
      </div>

      <div className="container r2h" id="rv">
        <div className="r2h__left"r2h>
          <div className="r2h__left--text">
            <h2>Road To Hire</h2>
            <p>
              Road to Hire has been the greatest experience of my life. Road to
              Hire is a non-profit organization that promotes economic mobility
              for motivated young adults, regardless of their ability to afford
              college.
            </p>
            <p>
              What the program has done for me is nothing less than life
              changing. Growing up, I've always known that I wanted to pursue a
              career in the tech field. But I also knew that it wouldn't be
              easy. College was not an option for me as is for most of the
              graduates of the program. In such a short amount of time, I've
              learned HTML, CSS, SCSS, JavaScript, React, MongoDB, MySQL, and
              Node.
            </p>
          </div>
        </div>
        <div className="r2h__images" id="rvImage">
          <div className="r2h__images--one" />
          <div className="r2h__images--two" />
          <div className="r2h__images--three" />
        </div>
      </div>
    </section>
  );
};

export default About;
