import React from "react";
import ProjectBanner from "./projectBanner";

const Project = props => {
  return (
    <section>
      <nav className="stickyNav" id="stickyNav">
        <h2>Projects</h2>
      </nav>
      <div>
        {props.projectList.projects.map(project => {
          return (
            <ProjectBanner
              key={project.title}
              title={project.title}
              desc={project.description}
              image={project.image}
              url={project.url}
              website={project.website}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
