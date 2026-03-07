import React from "react";
import { featureData } from "../assets/assets";

const Features = () => {
 

  return (
    <div className="list-section pt-5 pb-5">
      <div className="container">
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