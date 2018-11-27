import React from "react";
import Slider from "react-slick";

const ProjectChallenge = props => {
  let showModal = () => {
    let modal = document.getElementById(`id-${props.title}`);
    modal.classList.add("display-flex", "animated", "slideInLeft");
  };

  let closeModal = () => {
    let modal = document.getElementById(`id-${props.title}`);
    modal.classList.remove("display-flex", "slideInLeft");
  };

  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="overlay" id={`id-${props.title}`}>
        <div className="overlay__nav">
          <h2>{props.title}</h2>
          <div onClick={closeModal} className="overlay__nav--exit" />
        </div>
        <div className="overlay__main">
          <div className="overlay__main__slider">
            <Slider {...settings}>
              <div>
                <img src={props.images[0]} alt="screenshot1" />
              </div>
              <div>
                <img src={props.images[1]} alt="screenshot2" />
              </div>
              <div>
                <img src={props.images[2]} alt="screenshot3" />
              </div>
            </Slider>
          </div>
          <div className="overlay__right">
            <div className="overlay__main__text">
              <h3>Tasks:</h3>
              <ul>
                {props.requirements.map((list,index) => {
                  return <li key={list[index].title}>{list}</li>;
                })}
              </ul>
            </div>
            <div className="project__buttons margin-top">
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                <button className="redButton">GitHub</button>
              </a>
              <a href={props.website} target="_blank" rel="noopener noreferrer">
                <button className="redButton">Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project__challenges--card">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button onClick={showModal} className="redButton">
          More Info
        </button>
      </div>
    </>
  );
};

export default ProjectChallenge;
