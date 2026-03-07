import React from "react";
import { motion } from "framer-motion";
import Categories from "./Categories";

const OurProducts = () => {
  return (
    <div className="container mt-5">

      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-muted">
          Discover fresh grocery categories for your daily needs
        </p>
      </motion.div>

      <Categories />

    </div>
  );
};

export default OurProducts;