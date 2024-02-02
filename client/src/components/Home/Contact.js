import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="mailto:yadavranjeet060@gmail.com" method="post" enctype="text/plain" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="Name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="Email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="Subject"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
             
              id=""
              cols="30"
              rows="10"
              name="Message"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btns">Send Message <i class="fa-solid fa-paper-plane fa-lg"></i></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
