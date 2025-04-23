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
    <div className="px-4 sm:px-8 py-14 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen w-full">
      {/* Page Header */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-800 mb-14 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lost & Found Items
      </motion.h2>

      {/* Items Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item._id}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 flex flex-col overflow-hidden min-h-[26rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
              <div className="text-sm text-gray-500 mt-4 space-y-1">
                <p>
                  <strong>📍 Location:</strong> {item.location}
                </p>
                <p>
                  <strong>📅 Date:</strong> {item.date}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 flex justify-between items-center border-t bg-white rounded-b-2xl">
              <Link
                to={`/details/${item._id}`}
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition"
              >
                View Details
              </Link>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  item.postType === "found"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.postType === "found" ? "✅ Found" : "❌ Lost"}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See All Button */}
      <div className="mt-16 flex justify-center">
        <motion.a
          href="/found"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-transform"
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
