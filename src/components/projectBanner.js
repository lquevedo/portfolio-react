import React from "react";

const ProjectBanner = props => {
  return (
    <div className="project">
      <img src={props.image} alt="hello" />
      <div className="project__text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button className="redButton">GitHub</button>
      </div>
    </div>
  );
};

export default ProjectBanner;
