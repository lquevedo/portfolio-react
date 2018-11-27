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
      projectList,
      showModal: false
    };
  }

  componentDidMount() {
    let elevator = new Elevator({
      element: document.querySelector(".elevator-button"),
      duration: 1000
    });
    elevator.elevate();
  }

  hideModal = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <>
        <Header />
        <Project projectList={this.state.projectList} showModal={this.showModal} hideModal={this.hideModal} modal={this.state.showModal}/>
        <About />
        <Contact />
      </>
    );
  }
}

export default App;
