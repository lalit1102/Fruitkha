import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SpecialOffer = () => {
  return (
    <section className="py-5 bg-warning text-dark position-relative" style={{ overflow: 'hidden' }}>
      <Container className="position-relative z-1">
        <Row className="align-items-center text-center text-md-start">
          <Col md={7} className="mb-4 mb-md-0">
            <h2 className="fw-bold display-5 mb-3">Deal of the Month!</h2>
            <h4 className="mb-4">Get 30% Off on all Organic Strawberries</h4>
            <p className="mb-4 fs-5">Hurry up! This offer is valid only until the end of this month. Grab the freshest strawberries picked this morning.</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <h3 className="text-primary mb-0">12</h3>
                <small>Days</small>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <h3 className="text-primary mb-0">08</h3>
                <small>Hours</small>
              </div>
              <div className="bg-white p-3 rounded shadow-sm text-center">
                <h3 className="text-primary mb-0">45</h3>
                <small>Mins</small>
              </div>
            </div>
            <Button variant="dark" size="lg" className="mt-4 rounded-pill px-5">Shop Now</Button>
          </Col>
          <Col md={5}>
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=600&fit=crop"
              alt="Special Offer"
              className="img-fluid rounded-circle shadow-lg border border-5 border-white"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SpecialOffer;
