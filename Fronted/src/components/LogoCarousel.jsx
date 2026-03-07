import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { images } from "../assets/assets";



const LogoCarousel = () => {
  return (
    <div className="logo-carousel-section py-5">
      <Container>
        <Row>
          <Col lg={12}>

            <Carousel indicators={false} controls={false} interval={2000}>

              <Carousel.Item>
                <Row className="text-center">
                  <Col><img src={images.companyLogo1} alt="logo1" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo2} alt="logo2" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo3} alt="logo3" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo4} alt="logo4" className="img-fluid" /></Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="text-center">
                  <Col><img src={images.companyLogo2} alt="logo2" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo3} alt="logo3" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo4} alt="logo4" className="img-fluid" /></Col>
                  <Col><img src={images.companyLogo5} alt="logo5" className="img-fluid" /></Col>
                </Row>
              </Carousel.Item>

            </Carousel>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoCarousel;