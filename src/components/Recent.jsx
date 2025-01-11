import React from "react";
import laptop from "../assets/img/alex-knight-j4uuKnN43_M-unsplash.jpg";
import mobile from "../assets/img/download (16).jfif";
import remote from "../assets/img/glenn-carstens-peters-3BScbSvtQzM-unsplash.jpg";
import camara from "../assets/img/camara.jpg"

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
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600  mb-2">{product.description}</p>
              <p className="text-gray-500 text-xs">
                <span className="font-bold text-gray-800">Location: </span>
                {product.location}
              </p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  ); 
};

export default Recent;
