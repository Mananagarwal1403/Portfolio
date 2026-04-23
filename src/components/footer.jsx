import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">
          <p className="footer-text">
            Let’s build something reliable & beautiful.
          </p>
          <p className="footer-subtext">
            © {new Date().getFullYear()} Manan Agarwal. All rights reserved.
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="footer-icons">

          {/* Email */}
          <a
            href="manan.agarwal1403@gmail.com"
            aria-label="Email"
            className="footer-icon"
          >
            <FiMail />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mananagarwal1403"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manan-agarwal1403/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;



