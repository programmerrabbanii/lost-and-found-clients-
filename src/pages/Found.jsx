import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Found = () => {
  const [allItems, setAllItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://lost-found-server-nine.vercel.app/allItems")
      .then((result) => setAllItems(result.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Helmet>
        <title>Lost & Found | All Items</title>
      </Helmet>

      {/* Header */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-blue-700 pt-12 mb-8"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🔍 Lost & Found Items
      </motion.h1>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <motion.input
          type="text"
          placeholder="Search by title or location..."
          className="w-full px-6 py-4 rounded-xl shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 pb-20 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item._id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden flex flex-col transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {item.description}
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><strong>📍 Location:</strong> {item.location}</p>
                    <p><strong>📅 Date:</strong> {item.date}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Link
                    to={`/details/${item._id}`}
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg"
                  >
                    View Details
                  </Link>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      item.postType === "found"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.postType === "found" ? "Found" : "Lost"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="col-span-full text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No items found matching your search criteria.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Found;
