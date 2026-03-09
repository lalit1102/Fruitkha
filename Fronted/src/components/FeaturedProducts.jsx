import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { dummyProducts } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {

  const navigate = useNavigate()

  return (
    <section className="py-5 bg-light">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Products</h2>
          <p className="text-muted">Fresh from the farm to your table</p>
        </div>

        <Row>
          {dummyProducts.slice(0, 6).map((product) => (
            <Col key={product.id} lg={2} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 product-card">

                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>

                  <Card.Text className="text-success fs-5 fw-semibold">
                    ₹ {product.price}
                  </Card.Text>

                  <Button variant="outline-primary" className="rounded-pill px-4">
                    Add to Cart
                  </Button>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

        {/* View More Button */}
        <div className="text-center mt-4">
          <Button variant="success" onClick={() => navigate('/shop')}>
            View More
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default FeaturedProducts;