import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Fresh Apples', price: '$4.99/kg', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?w=500&h=400&fit=crop' },
    { id: 2, name: 'Organic Bananas', price: '$2.99/kg', img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&h=400&fit=crop' },
    { id: 3, name: 'Juicy Oranges', price: '$5.49/kg', img: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?w=500&h=400&fit=crop' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Products</h2>
          <p className="text-muted">Fresh from the farm to your table</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={product.img} alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text className="text-success fs-5 fw-semibold">{product.price}</Card.Text>
                  <Button variant="outline-primary" className="rounded-pill px-4">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;