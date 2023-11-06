import React from 'react';
import './Summary.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import blender from '../../assets/video/blender.mp4';

const Summary = () => {
  return (
    <div className="summary-container">
      <Container>
        <Row>
          {/* Left column with Bootstrap Card */}
          <Col xs={12} md={6}>
            <Card style={{ height: '315px', backgroundColor: '#1A64BA', cursor: 'pointer' }} className='text-white txt-card'>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap flexbox classes here */}
                <Card.Title className='ct'>Why Skyline Obsession?</Card.Title>
                <Card.Text className="text-center  explain">
                  Welcome to Skyline Obsession, the ultimate destination for R34 Skyline GTR enthusiasts. Delve into the comprehensive history of this iconic car, from its legendary sports car roots to its status as a timeless automotive masterpiece. Connect with a thriving community of passionate R34 aficionados, explore unbiased user reviews, and be inspired by a diverse gallery of awe-inspiring car modifications. Skyline Obsession offers an unparalleled experience, celebrating the legacy of the R34 Skyline GTR in all its glory, uniting automotive passion and obsession in one place.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Right column with Video Container */}
          <Col xs={12} md={6}>
            <div className="video-contain">
              {/* Use the video element to display the blender.mp4 video */}
              <video
                width="100%"
                height="315"
                playsinline 
                playsInline 
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
