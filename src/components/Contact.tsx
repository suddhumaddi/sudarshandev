import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h3>Let's Build Something Together</h3>
          <p className="contact-subtitle">
            Have an idea, collaboration opportunity, or project in mind? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:suddhumaddi@gmail.com"
            className="contact-link-card"
            data-cursor="disable"
          >
            <div className="card-icon">📧</div>
            <div className="card-content">
              <h4>EMAIL</h4>
              <p>suddhumaddi@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/suddhumaddi"
            target="_blank"
            className="contact-link-card"
            data-cursor="disable"
          >
            <div className="card-icon">🐙</div>
            <div className="card-content">
              <h4>GITHUB</h4>
              <p>github.com/suddhumaddi</p>
            </div>
            <MdArrowOutward className="arrow-icon" />
          </a>

          <a
            href="https://in.linkedin.com/in/sudarshanmaddi"
            target="_blank"
            className="contact-link-card"
            data-cursor="disable"
          >
            <div className="card-icon">💼</div>
            <div className="card-content">
              <h4>LINKEDIN</h4>
              <p>linkedin.com/in/sudarshanmaddi</p>
            </div>
            <MdArrowOutward className="arrow-icon" />
          </a>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn" data-cursor="disable">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Sudarshan Maddi</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>

      </div>
    </div>
  );
};

export default Contact;
