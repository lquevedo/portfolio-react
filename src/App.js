import React, { Component } from "react";
import "./assets/Styles/App.scss";
import Header from "./components/header";
import Project from "./components/project";
import projectList from "./json";
import About from "./components/about";
import Contact from "./components/contact";
import Elevator from "elevator.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectList
    };
  }

  componentDidMount() {
    let elevator = new Elevator({
      element: document.querySelector(".elevator-button"),
      duration: 1000
    });
    elevator.elevate();
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
