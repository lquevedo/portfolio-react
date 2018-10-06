import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <h1>Luis <span>|</span> Quevedo</h1>
            </nav>
            <section className="banner">
                    <h2>Aspiring Web Developer</h2>
                    <p>Charlotte, NC</p>
                    <button>Resume Pdf</button>
            </section>
        </header>
    );
};

export default Header;