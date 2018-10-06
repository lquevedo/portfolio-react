import React from "react";

const ProjectBanner = props => {
  return (
    <div className="project">
      <img src={props.image} alt="hello" />
      <div className="project__text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer"><button className="redButton">GitHub</button></a>
      </div>
    </div>
  );
};

export default ProjectBanner;
