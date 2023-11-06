import React from 'react';
import AboutHero from '../AboutUI/AboutHero';
import AboutFAQ from '../AboutUI/AboutFAQ';
import AboutInspire from '../AboutUI/AboutInspire';
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  return (
    <div>
      <ScrollToTop smooth color="#1A64BA " />
      <AboutHero />
      <hr className="glowing-hr" /> 
      <AboutFAQ />
      <hr className="glowing-hr" />
      <AboutInspire />
      <hr className="glowing-hr" />
    </div>
  );
};

export default About;
