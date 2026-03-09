import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { products } from '../assets/assets';
import { useCart } from '../context/CartContext';
import { getProductUnit } from '../utils/helpers';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="pt-5 mt-5 pb-5 bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-4">Product Not Found</h2>
        <Link to="/shop">
          <Button variant="success" className="rounded-pill px-4">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-5 mt-5 pb-5 bg-light min-vh-100">
      <Container className="pt-4">
        <div className="mb-4">
          <Link to="/shop" className="text-decoration-none text-muted px-2 py-1 rounded" style={{ transition: 'all 0.2s', display: 'inline-block' }}>
            <i className="fas fa-arrow-left me-2"></i>Back to Shop
          </Link>
        </div>
        <Row className="bg-white rounded-4 shadow-sm p-4 p-md-5">
          <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center align-items-center bg-light rounded-4 p-4 py-5">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center px-md-5">
            <div className="mb-3">
              <Badge bg="secondary" className="text-uppercase px-3 py-2" style={{ letterSpacing: '1px' }}>
                {product.category}
              </Badge>
            </div>
            <h1 className="fw-bold mb-3" style={{ color: '#282c3f', fontSize: '2.5rem' }}>{product.name}</h1>
            <div className="d-flex align-items-center mb-4">
              <span className="fw-bold text-dark me-3" style={{ fontSize: '2rem' }}>₹{product.price}</span>
              <span className="text-muted text-decoration-line-through fs-5">
                ₹{Math.round(product.price * 1.1)}
              </span>
              <Badge bg="danger" className="ms-3 px-2 py-1 fs-6">10% OFF</Badge>
            </div>

            <p className="text-muted mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              Fresh and premium quality {product.name.toLowerCase()} sourced directly from the best farms.
              Perfect for your daily nutritional needs. Order now and get it delivered straight to your doorstep.
            </p>

            <div className="mb-4 pb-3 border-bottom">
              <h5 className="fw-semibold mb-3 text-dark">Available Quantity:</h5>
              <div className="d-inline-block border border-success rounded-3 px-4 py-2 bg-light fw-bold text-success" style={{ cursor: 'pointer' }}>
                {getProductUnit(product)}
              </div>
            </div>

            <div className="d-flex gap-3 mt-2">
              <Button
                variant="success"
                size="lg"
                className="rounded-pill fw-bold px-5 py-3 flex-grow-1 d-flex justify-content-center align-items-center gap-2"
                style={{ boxShadow: '0 4px 14px rgba(25, 135, 84, 0.3)', transition: 'transform 0.2s' }}
                onClick={() => addToCart(product)}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
