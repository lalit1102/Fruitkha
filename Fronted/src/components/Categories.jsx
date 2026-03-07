import React from "react";
import { categories } from "../assets/assets";

const Categories = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className="card text-center border-0 shadow-sm"
              style={{ backgroundColor: cat.bgColor }}
            >
              <div className="card-body">
                <img
                  src={cat.image}
                  alt={cat.text}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mt-3">{cat.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;