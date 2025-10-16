"use client";
import "./AppFooter.css";

export default function AppFooter() {
  return (
    <footer className="footer">
      <img
        src="/pictures/ornamentUp.svg"
        alt="decoration"
        className="ornament-top"
      />
      <img
        src="/pictures/ornamentDown.svg"
        alt="decoration"
        className="ornament-bottom"
      />

      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/pictures/icons/sample logo 1.png" alt="logo" />
          </div>
          <p className="footer-desc">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/pictures/fb.svg" alt="facebook" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/pictures/icons/linkedin.png" alt="linkedin" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/pictures/icons/Vector (4).svg" alt="twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/pictures/icons/youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#hero">HOME</a>
            </li>

            <li>
              <a href="#article">ABOUT US</a>
            </li>
            <li>
              <a href="#book">BOOKS</a>
            </li>
            <li>
              <a href="#release">NEW RELEASE</a>
            </li>
            <li>
              <a href="#categorie">CONTACT US</a>
            </li>
            <li>
              <a href="#subscribe">BLOG</a>
            </li>
          </ul>
        </div>

     
        <div className="footer-right">
          <h3>Importent Links</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 Arihant. All Rights Reserved.</p>
        <div className="footer-privacy">
          <a href="#">Privacy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
