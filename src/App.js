import React, { Component } from "react";
import "./assets/Styles/App.scss";
import Header from "./components/header";
import Project from "./components/project";
import projectList from "./json";
import About from "./components/about";
import Contact from "./components/contact";

let projectNav, projectNavStick, aboutContainer, aboutContainerStick, aboutContainerImages, aboutNav, aboutNavStick, rvContainer, rvContainerStick, rvImages;
window.onload = () => {
  projectNav = document.getElementById("stickyNav");
  projectNavStick = projectNav.offsetTop;
  aboutContainer = document.getElementById("aboutContainer");
  aboutContainerImages = document.getElementById("container__images");
  aboutContainerStick = aboutContainer.offsetTop;
  aboutNav = document.getElementById("tertiary");
  aboutNavStick = aboutNav.offsetTop;
  rvContainer = document.getElementById("rv");
  rvContainerStick = rvContainer.offsetTop;
  rvImages = document.getElementById("rvImage");
};
window.onscroll = () => myFunction();
let myFunction = () => {
  window.pageYOffset >= projectNavStick ? projectNav.classList.add("sticky") : projectNav.classList.remove("sticky");
  window.pageYOffset >= aboutContainerStick ? aboutContainerImages.classList.add("show") : aboutContainerImages.classList.add("hide");
  window.pageYOffset >= rvContainerStick ? rvImages.classList.add("show") : rvImages.classList.add("hide");
  window.pageYOffset >= aboutNavStick ? aboutNav.classList.add("sticky2") : aboutNav.classList.remove("sticky2");
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectList
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Project projectList={this.state.projectList} />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
