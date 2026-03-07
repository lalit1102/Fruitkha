import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="hero-area d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-9 offset-lg-2 text-center">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle">Fresh &amp; Organic</p>
                <h1>Delicious Seasonal Fruits</h1>
                <div className="hero-btns">
                  <Link to="/shop" className="boxed-btn">
                    Fruit Collection
                  </Link>
                  <Link to="/contact" className="bordered-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
