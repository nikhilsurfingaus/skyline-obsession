import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Lottie from 'lottie-react';
import GTR from '../assets/animation/skyline.json';
import Cogs from '../assets/animation/build.json';
import Review from '../assets/animation/review.json';

const AnimateSection = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Container className="h-100 d-flex flex-column justify-content-center">
        <h1 className="text-center mb-5">What You Can Expect...</h1>
        <Row xs={1} sm={1} md={3} className="g-4">
          {/* Card 1 */}
          <Col>
            <Card
              className="h-100 text-white text-center"
              style={{ backgroundColor: '#1A64BA', cursor: 'pointer' }}
            >
              <Lottie animationData={GTR} style={{ height: '50%' }} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Card 1 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col>
            <Card
              className="h-100 text-white text-center"
              style={{ backgroundColor: '#1A64BA', cursor: 'pointer' }}
            >
              <Lottie animationData={Cogs} style={{ height: '50%' }} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Card 2 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col>
            <Card
              className="h-100 text-white text-center"
              style={{ backgroundColor: '#1A64BA', cursor: 'pointer' }}
            >
              <Lottie animationData={Review} style={{ height: '50%' }} />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Card 3 description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnimateSection;
