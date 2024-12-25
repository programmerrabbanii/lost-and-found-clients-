import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Found = () => {
    const [allItems, setAllItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/allItems")
            .then((result) => {
                setAllItems(result.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const filteredItems = allItems.filter(
        (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
            {/* Page Header */}
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 mb-10 tracking-wide"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Lost & Found Items
            </motion.h2>

            {/* Search Input */}
            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Search by title or location..."
                    className="w-full px-6 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Items Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                }}
            >
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <motion.div
                            key={item._id}
                            className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 line-clamp-3 mb-4">{item.description}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <p><strong>Location:</strong> {item.location}</p>
                                    <p><strong>Date:</strong> {item.date}</p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 flex justify-between items-center bg-gray-50 rounded-b-lg">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
                                >
                                    <Link to={`/details/${item._id}`}>View Details</Link>
                                </motion.button>
                            </div>

                            {/* Decorative Badge */}
                            <motion.div
                                className="absolute top-4 right-4 bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                whileHover={{ scale: 1.3, rotate: 15 }}
                                transition={{ duration: 0.4 }}
                            >
                                🔍
                            </motion.div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-full">
                        No items found matching your search criteria.
                    </p>
                )}
            </motion.div>
            
        </div> 
    );
};

export default Found;
