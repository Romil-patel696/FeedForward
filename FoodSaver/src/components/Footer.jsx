import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h3>DISCOVER FEEDFORWARD</h3>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Awards and Recognition</li>
            <br />
            <li>Investors</li>
            <li>Exclusive Packages</li>
            <li>Careers</li>
            <li>Founder's Message</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>COMMUNITY</h6>
          <ul>
            <li>Diversity & Belonging</li>
            <li>Against Discrimination</li>
            <li>Accessibility</li>
            <li>FeedForward Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
            <li>Gift cards</li>
            <li>FeedForward.org</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>HOST</h6>
          <ul>
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Resource Center</li>
            <li>Community Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>SUPPORT</h6>
          <ul>
            <li>Our COVID-19 Response</li>
            <li>Help Center</li>
            <li>Cancellation options</li>
            <li>Neighborhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
      </div>

      <div className="footer-secondary">
        <div className="footer-apps">
          <h5>ALSO AVAILABLE ON</h5>
          <div className="app-icons">
            <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="App Store" />
            <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="Google Play" />
          </div>
        </div>
        <div className="footer-connect">
          <h5>Connect With Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
              <FaFacebookSquare className="connect-icon" />
            </a>
            <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
              <FaLinkedin className="connect-icon" />
            </a>
            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
              <AiFillInstagram className="connect-icon" />
            </a>
            <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
              <IoLogoYoutube className="connect-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 FeedForward. All Right Reserved</p>
        <ul className="footer-links">
          <li>Careers</li>
          <li>Warranty Policy</li>
          <li>Sell With Us</li>
          <li>Terms of Use</li>
          <li>Terms of Sale</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
