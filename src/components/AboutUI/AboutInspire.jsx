import React from 'react';
import './AboutInspire.css';
import { Container, Row, Col } from 'react-bootstrap';
import people from '../../assets/animation/people.json';
import Lottie from 'lottie-react';

const AboutInspire = () => {
  return (
    <div className="about-inspire" style={{ backgroundColor: 'black' }}>
      <Container>
        <Row>
          <Col md={7} xs={12} className="text-container">
            <h1 className="inspire-heading">INSPIRE...</h1>
            <p className="lorem-ipsum">
              Skyline Obsession ignites the passion of car enthusiasts by uniting R34 fans in a thriving community. Dive into the rich history, stories, and shared love for the iconic Nissan Skyline R34, where obsession fuels connection and celebration
            </p>
          </Col>
          <Col md={5} xs={12} className="image-container">
            <div className="blue-circle">
              <Lottie animationData={people} style={{ height: '120%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutInspire;
