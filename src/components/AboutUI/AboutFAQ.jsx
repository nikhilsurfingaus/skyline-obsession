import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './AboutFAQ.css';

const accordionData = [
  {
    title: 'Website Introduction',
    content: 'Welcome to the R3 Skyline website dedicated to the Nissan Skyline R34 GT-R.',
  },
  {
    title: 'Car History',
    content: 'Learn about the rich history of the iconic Nissan Skyline R34 GT-R.',
  },
  {
    title: 'Community',
    content: 'Join our passionate community of Nissan Skyline enthusiasts to share experiences and knowledge.',
  },
  {
    title: 'Car Reviews',
    content: 'Explore reviews from the community members who own and drive the Nissan Skyline R34 GT-R.',
  },
  {
    title: 'Photos',
    content: 'Browse through a stunning collection of photos showcasing the Nissan Skyline R34 GT-R from different angles.',
  },
  {
    title: 'Contact Us',
    content: 'Get in touch with us for any inquiries, suggestions, or collaborations related to the R34 Skyline website.',
  },
];

const AboutFAQ = () => {
  return (
    <div style={{ height: '100vh', background: 'black', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
      <div className="head" style={{ display: 'flex', justifyContent: 'center', marginTop: '-8%' }}>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-5 head">FAQ</h1>
      </div>
      <div className="accord">
        <Accordion>
          {accordionData.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header className='ct' >{item.title}</Accordion.Header>
              <Accordion.Body className='an'>{item.content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AboutFAQ;
