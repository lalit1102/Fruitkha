import React from "react";
import { featureData } from "../assets/assets";
import { motion } from "framer-motion";

const Features = () => {
 

  return (
    <div className="list-section pt-5 pb-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h2 className="fw-bold">Our Features</h2>
        <p className="text-muted">
          Experience the best online grocery shopping with our unique features
        </p>
      </motion.div>
        <div className="row">
          {featureData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div
                className="list-box d-flex align-items-center p-4 rounded shadow-sm bg-white feature-hover"
                style={{ transition: "all 0.3s ease" }}
              >
                <div className="list-icon me-3 fs-2 text-primary">
                  <i className={item.icon}></i>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .feature-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Features;