import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Sarah Johnson', role: 'Regular Customer', text: '"The quality of the fruits is unmatched. I have been ordering from FruitKha for months and I have never been disappointed!"', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
    { id: 2, name: 'Michael Chen', role: 'Local Chef', text: '"As a chef, freshness is critical. FruitKha consistently delivers the best organic produce right to my restaurant kitchen."', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { id: 3, name: 'Emma Davis', role: 'Fitness Trainer', text: '"Great variety and amazing customer service. The delivery is always on time, and the packaging is very eco-friendly."', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Customers Say</h2>
          <p className="text-muted">Real reviews from our happy shoppers</p>
        </div>
        <Row>
          {reviews.map((review) => (
            <Col key={review.id} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <img
                    src={review.img}
                    alt={review.name}
                    className="rounded-circle mb-3 border border-3 border-light shadow-sm"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <Card.Text className="fst-italic text-muted mb-4">{review.text}</Card.Text>
                  <h5 className="fw-bold mb-1">{review.name}</h5>
                  <small className="text-primary">{review.role}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;