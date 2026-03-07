import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h4 className="fw-bold text-warning mb-3">FruitKha</h4>
            <p className="text-secondary pe-md-4">
              Your one-stop destination for fresh, organic, and delicious fruits locally sourced from the best farms. Delivering health to your doorstep.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-instagram"></i></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Home</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Shop</a></li>
              <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-primary">Contact</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-map-marker-alt me-2 text-warning"></i> 123 Farm Road, NY 10001</li>
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-phone-alt me-2 text-warning"></i> +1 234 567 890</li>
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-envelope me-2 text-warning"></i> info@fruitkha.com</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-secondary">Subscribe to our newsletter for latest updates & offers.</p>
            <div className="input-group mb-3 mt-3">
              <input type="email" className="form-control rounded-start-pill border-0 px-3" placeholder="Email Address" />
              <button className="btn btn-warning rounded-end-pill px-3" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary mb-3" />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="text-secondary mb-0">&copy; {new Date().getFullYear()} FruitKha. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-secondary mb-0">Designed with <i className="fas fa-heart text-danger"></i> by React Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;