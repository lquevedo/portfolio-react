import React from "react";
import ProjectBanner from "./projectBanner";
import ProjectChallenges from './projectChallenges';

const Project = props => {
  return (
    <section>
      <nav className="stickyNav">
        <h2>Projects</h2>
      </nav>
      <>
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
        <div className="project__challenges">
        {props.projectList.challenges.map(project => {
          return (
            <ProjectChallenges
              key={project.title}
              title={project.title}
              desc={project.description}
              url={project.url}
              website={project.website}
              requirements={project.requirements}
              images={project.images}
              showModal = {props.showModal}
              hideModal={props.hideModal}
              modal={props.modal}
            />
          );
        })}
        </div>
      </>
    </section>
  );
};

export default Project;
