import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LostItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://lost-found-server-nine.vercel.app/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      {/* Page Header */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Lost & Found Items
      </motion.h2>

      {/* Items Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item._id}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 min-h-[24rem] flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">{item.description}</p>
              <p className="text-sm text-gray-500 mt-3">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {item.date}
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 flex justify-between items-center">
              <Link
                to={`/details/${item._id}`}
                className="text-white bg-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  item.postType === "found"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.postType === "found" ? "Found" : "Lost"}
              </span>
            </div>
          </motion.div>
        ))}  
      </motion.div>

      {/* See All Button */}
      <div className="mt-12 flex justify-center">
        <motion.a
          href="/found"
          className="text-white bg-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See All Items
        </motion.a>
      </div>
    </div>
  );
};

export default LostItems;
