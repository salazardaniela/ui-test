import React from 'react';
import './footer.scss';

/**
 * Footer Component
 * Static Component
 * Non @params
 */
const Footer = () => (
  <div data-testid="footer" className="footer">
    <nav>
      <a className="footer-link" href="/term">Terms and Conditions</a>
      <a className="footer-link" href="/privacy">Privacy Policy</a>
      <a className="footer-link" href="/contact">Contact Us</a>
    </nav>

    <ul>
      <li>Follow Us</li>
      <li>
        <a target="_blank" rel="noopener noreferrer" className="social-icon icon-fb" href="http://facebook.com">
          Facebook
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" className="social-icon icon-tw" href="http://twitter.com">
          Twitter
        </a>
      </li>
    </ul>
  </div>
);

Footer.displayName = 'Footer Component';

export default Footer;
