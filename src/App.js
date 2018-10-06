import React, { Component } from "react";
import "./assets/Styles/App.scss";
import Header from "./components/header";
import Project from "./components/project";
import projectList from "./json";
import About from "./components/about";
import Contact from "./components/contact";

let navbarOne, navbarStick, container1, containerStick, containerImages, navbarTwo, navbarTwoStick, rv, rvShow, rvHello;
window.onload = () => {
  navbarOne = document.getElementById("stickyNav");
  navbarStick = navbarOne.offsetTop;
  container1 = document.getElementById("container");
  containerImages = document.getElementById("container__images");
  containerStick = container1.offsetTop;
  navbarTwo = document.getElementById("tertiary");
  navbarTwoStick = navbarTwo.offsetTop;
  rv = document.getElementById("rv");
  rvShow = rv.offsetTop;
  rvHello = document.getElementById("rvImage");
};
window.onscroll = () => myFunction();
let myFunction = () => {
  window.pageYOffset >= navbarStick ? navbarOne.classList.add("sticky") : navbarOne.classList.remove("sticky");
  window.pageYOffset >= containerStick ? containerImages.classList.add("show") : containerImages.classList.add("hide");
  window.pageYOffset >= rvShow ? rvHello.classList.add("show") : rvHello.classList.add("hide");
  window.pageYOffset >= navbarTwoStick ? navbarTwo.classList.add("sticky2") : navbarTwo.classList.remove("sticky2");
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
