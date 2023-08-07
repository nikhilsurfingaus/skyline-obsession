import React from 'react';
import AboutHero from '../AboutHero';
import AboutFAQ from '../AboutFAQ';
import AboutInspire from '../AboutInspire';

const About = () => {
  return (
    <div>
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
