import React from "react";
import InViewMonitor from "react-inview-monitor";

const ProjectBanner = (props, index) => {
  return (
    <>
    <InViewMonitor classNameNotInView="project" classNameInView="project show animated zoomIn slow">
      <div className="project__image">
      <picture>
        <source type="image/webp" srcset={props.image[0]}/>
        <img src={props.image[1]} alt="project screenshot"/>
      </picture>
      </div>
      <div className="project__text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="project__buttons margin-top">
        <a href={props.url} target="_blank" rel="noopener noreferrer"><button className="redButton">GitHub</button></a>
        <a href={props.website} target="_blank" rel="noopener noreferrer"><button className="redButton">Website</button></a>
        </div>
        
      </div>
      
  </InViewMonitor>

</>

  );
};

export default ProjectBanner;
