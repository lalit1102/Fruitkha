import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6}>
            <h2 className="fw-bold mb-3">Why Shop With FruitKha?</h2>
            <h5 className="text-success mb-4">Freshness is our promise.</h5>
            <p className="text-muted mb-4">
              At FruitKha, we believe in providing the freshest, highest-quality produce straight from local farms. Our commitment to sustainability and organic farming practices ensures that every bite is healthy and delicious.
            </p>
            <ul className="list-unstyled text-muted mb-4">
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> 100% Organic Produce</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Free Delivery on orders over $50</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i> Daily Fresh Updates</li>
            </ul>
            <Button variant="primary" className="rounded-pill px-4 py-2">Know More About Us</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
