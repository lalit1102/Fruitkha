import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">Have a question? We'd love to hear from you.</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-lg p-4 p-md-5">
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="contactName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" className="rounded-pill px-3 py-2" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="contactEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" className="rounded-pill px-3 py-2" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="contactSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="How can we help you?" className="rounded-pill px-3 py-2" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Write your message here..." className="rounded-4 p-3" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg" className="rounded-pill px-5">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
