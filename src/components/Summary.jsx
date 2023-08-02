import React from 'react';
import './Summary.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import blender from '../assets/video/blender.mp4';

const Summary = () => {
  return (
    <div className="summary-container">
      <Container>
        <Row>
          {/* Left column with Bootstrap Card */}
          <Col xs={12} md={6}>
            <Card style={{ height: '315px', backgroundColor: '#1A64BA', cursor: 'pointer' }} className='text-white'>
              <Card.Body className="text-center"> {/* Add the "text-center" class here */}
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a sample paragraph for the left side of the card.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Right column with Video Container */}
          <Col xs={12} md={6}>
            <div className="video-container">
              {/* Use the video element to display the blender.mp4 video */}
              <video
                width="100%"
                height="315"
                autoPlay
                loop
                muted
                style={{ borderRadius: '10px', objectFit: 'cover' }}
              >
                <source src={blender} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
