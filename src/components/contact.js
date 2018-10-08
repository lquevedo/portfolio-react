import React from "react";
const Contact = () => {

  return (
    <section className="contact">
      <div className="contact__text">
        <h2>
          <span>Contact</span> Me
        </h2>
        <p>If you have any questions, feel free to reach out to me.</p>
        <div className="whitespace">
          <div className="triangle" />
        </div>
      </div>
      <div className="contact__form">
        <form>
          <div className="contact__form--top">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="Subject" className="subject" placeholder="Subject"/>
          </div>
          <div>
            <label htmlFor="comments" className="comments">
              Message:
            </label>
            <textarea name="comments" />
          </div>
          <button className="redButton">Submit</button>
        </form>
      </div>

    <div class="elevator-button"></div>

    </section>
  );
};

export default Contact;
