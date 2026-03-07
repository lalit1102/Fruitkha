import React from "react";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";

const Categories = () => {
  return (
    <div className="row">

      {categories.map((item, index) => (
        <div className="col-md-3 mb-4" key={index}>

          <motion.div
            className="card text-center shadow category-card"
            style={{ backgroundColor: item.bgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <img
              src={item.image}
              className="card-img-top"
              alt={item.text}
              style={{ height: "140px", objectFit: "contain" }}
            />

            <div className="card-body">
              <h5>{item.text}</h5>
            </div>

          </motion.div>

        </div>
      ))}

    </div>
  );
};

export default Categories;