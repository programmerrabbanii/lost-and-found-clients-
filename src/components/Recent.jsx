import React from "react";
import laptop from "../assets/img/alex-knight-j4uuKnN43_M-unsplash.jpg";
import mobile from "../assets/img/download (16).jfif";
import remote from "../assets/img/glenn-carstens-peters-3BScbSvtQzM-unsplash.jpg";
import camara from "../assets/img/camara.jpg";
import { motion } from "framer-motion";

const Recent = () => {
  const products = [
    {
      id: 1,
      img: laptop,
      title: "Laptop",
      description: "Experience high-performance computing.",
      location: "New York, USA",
    },
    {
      id: 2,
      img: mobile,
      title: "Smartphone",
      description: "Stay connected with the latest technology.",
      location: "San Francisco, USA",
    },
    {
      id: 3,
      img: remote,
      title: "Remote Work Setup",
      description: "Work smarter with optimized tools.",
      location: "London, UK",
    },
    {
      id: 4,
      img: camara,
      title: "Canara Workspace",
      description: "Designed for comfort and productivity.",
      location: "Sydney, Australia",
    },
  ]; 

  return (
    <div className="w-11/12 mx-auto py-16 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
      Recently Reunited with Owners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
              </div>
              <div className="mt-auto text-sm text-gray-500">
                <span className="font-semibold text-gray-700">📍 Location: </span>
                {product.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
