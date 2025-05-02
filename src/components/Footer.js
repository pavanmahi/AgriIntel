import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/pavan._mahi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:pavanbejawada4376@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopesBulk} />
        </a>
        <a
          href="https://github.com/pavanmahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>&copy; 2025 Soil Classifier. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
