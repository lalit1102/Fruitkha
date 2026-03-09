import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { images } from '../assets/assets';
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h4 className="fw-bold text-warning mb-3"><img src={images.logo_light} alt="FruitKha Logo" width="150" /></h4>
            <p className="text-secondary pe-md-4">
              Your one-stop destination for fresh, organic, and delicious fruits locally sourced from the best farms. Delivering health to your doorstep.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-twitter"></i></Link>
              <Link to="#" className="btn btn-outline-light rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fab fa-instagram"></i></Link>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none hover-primary">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none hover-primary">About Us</Link></li>
              <li className="mb-2"><Link to="/shop" className="text-secondary text-decoration-none hover-primary">Shop</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary text-decoration-none hover-primary">Contact</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-map-marker-alt me-2 text-warning"></i> Tops Technologies, Ahmedabad</li>
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-phone-alt me-2 text-warning"></i> 8141300462</li>
              <li className="mb-2 d-flex align-items-center"><i className="fas fa-envelope me-2 text-warning"></i> lalit.baldaniya92@gmail.com</li>
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
            <p className="text-secondary mb-0">&copy; {new Date().getFullYear()} Grocery. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-secondary mb-0">
              Designed with <i className="fas fa-heart text-danger"></i> by Lalit Baldaniya | MERN Developer
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;