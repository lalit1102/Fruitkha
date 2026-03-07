import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets";
import RotatingText from "./RotatingText";

const Hero = () => {
  return (
    <div
      className="hero-area d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${images.bg_img1})`,
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
                <h1>
                  Welcome to Grocery Store{" "}
                  <RotatingText
                    texts={["Fresh", "Organic", "Healthy", "Natural"]}
                    rotationInterval={2000}
                  />
                </h1>
                <div className="hero-btns">
                  <Link to="/shop" className="boxed-btn">
                    Shop Now

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
