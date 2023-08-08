import React from 'react';
import AboutHero from '../AboutHero';
import AboutFAQ from '../AboutFAQ';
import AboutInspire from '../AboutInspire';
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
