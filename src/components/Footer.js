import React from 'react';
import ContactLink from './ContactLink';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <div id="footer">
      <ScrollToTop
        smooth
        color="#ff0035"
        svgPath="<i class='angle double up icon'></i>"
      />
      <div className="logo-container">
        <ContactLink
          link="https://www.linkedin.com/in/dustinpezley/"
          logo={<i className="linkedin icon"></i>}
        />
        <ContactLink
          link="https://github.com/dustinpezley"
          logo={<i className="github square icon"></i>}
        />
        <ContactLink
          link="https://twitter.com/kyojushin"
          logo={<i className="twitter square icon"></i>}
        />
        <ContactLink
          link="https://docs.google.com/document/d/15eAmnaXnFgJeqV_-JY2taQSkOZ1cHikvXiyFS6yopK4/edit?usp=sharing"
          logo={<i className="file alternate icon"></i>}
        />
      </div>
      <div>
        <p id="footer-name">
          DUSTIN PEZLEY <span id="footer-year">2022</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
