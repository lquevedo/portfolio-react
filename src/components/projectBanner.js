import React from "react";
import InViewMonitor from "react-inview-monitor";

const ProjectBanner = props => {
  return (
    <InViewMonitor
    classNameNotInView="project"
    classNameInView="project show">
      <div className="project__image">
        <img src={props.image} alt="hello" />
      </div>
      <div className="project__text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="project__buttons">
        <a href={props.url} target="_blank" rel="noopener noreferrer"><button className="redButton">GitHub</button></a>
        <a href={props.website} target="_blank" rel="noopener noreferrer"><button className="redButton">Website</button></a>
        </div>
        
      </div>
  </InViewMonitor>

  );
};

export default ProjectBanner;
