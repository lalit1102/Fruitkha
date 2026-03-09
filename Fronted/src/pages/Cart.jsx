import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { getProductUnit } from '../utils/helpers';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pt-5 mt-5 pb-5 bg-light min-vh-100">
      <Container className="pt-4">
        <h2 className="mb-4 fw-bold pb-2 border-bottom">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted mb-4">Your cart is empty.</h4>
            <Link to="/shop">
              <Button variant="success" className="px-4 py-2 rounded-pill fw-bold">
                Go to Shop
              </Button>
            </Link>
          </div>
        ) : (
          <Row>
            <Col lg={8}>
              {cartItems.map((item) => (
                <Card key={item.id} className="mb-3 border-0 shadow-sm rounded-4">
                  <Card.Body className="d-flex align-items-center flex-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                      className="me-4 p-2 bg-light rounded-3 mb-2 mb-sm-0"
                    />
                    <div className="flex-grow-1 mb-2 mb-sm-0">
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="text-muted mb-0 small">{item.category} &bull; {item.quantity} x {getProductUnit(item)}</p>
                    </div>
                    <div className="text-sm-end me-sm-4 mb-2 mb-sm-0">
                      <div className="fw-bold fs-5 text-dark">₹{item.price * item.quantity}</div>
                      <div className="text-muted small">₹{item.price} / {getProductUnit(item)}</div>
                    </div>
                    <Button
                      variant="outline-danger"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-circle d-flex justify-content-center align-items-center ms-auto"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col lg={4}>
              <Card className="border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
                <h4 className="fw-bold mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Delivery Fee</span>
                  <span>₹50</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4 mt-2">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-5 text-success">₹{totalAmount + 50}</span>
                </div>
                <Button variant="success" className="w-100 rounded-pill py-2 fw-bold mb-3 d-flex justify-content-center align-items-center gap-2">
                  Proceed to Checkout <i className="fas fa-arrow-right"></i>
                </Button>
                <Button variant="outline-danger" className="w-100 rounded-pill py-2 fw-bold" onClick={clearCart}>
                  Clear Cart
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Cart;
