import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h1>Luis <span>|</span> Quevedo</h1>
      </nav>
      <section className="banner">
        <h2>Fullstack Web Developer</h2>
        <p>Charlotte, NC</p>
        <a className="margin-top" href={require('../assets/resume.pdf')}download><button className="redButton">Resume</button></a>
      </section>
    </header>
  );
};

export default Header;
