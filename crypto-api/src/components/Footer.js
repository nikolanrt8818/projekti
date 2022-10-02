import React from "react";
import { getYear } from "../config/text";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3>
          <a href="/">Cryptoworld</a>
        </h3>
        <ul className="social">
          <li>
            <a
              href="https://www.instagram.com/cryptocomofficial/" rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/CryptoComOfficial/" rel="noreferrer"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/cryptocom" rel="noreferrer" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/cryptocom/?originalSubdomain=sg" rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <small>
          Copyright &copy; {getYear()}. Cryptoworld | All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
