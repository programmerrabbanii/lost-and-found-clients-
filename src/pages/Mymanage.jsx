import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Mymanage = () => {
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetching user-specific items
        axios
            .get("http://localhost:5000/allItems", {
                
            })
            .then((result) => {
                setMyItems(result.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleDelete = (id) => {
        // Deleting an item
        axios
            .delete(`http://localhost:5000/itemsD/${id}`, {
            })
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item deleted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setMyItems(myItems.filter((item) => item._id !== id));
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="container mx-auto px-6 py-12 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <motion.h2
                className="text-3xl font-bold text-center text-gray-800 mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Manage My Items
            </motion.h2>

            {myItems.length > 0 ? (
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Title</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myItems.map((item, index) => (
                            <tr
                                key={item._id}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                                }`}
                            >
                                <td className="py-3 px-6">{item.title}</td>
                                <td className="py-3 px-6">{item.description}</td>
                                <td className="py-3 px-6">{item.date}</td>
                                <td className="py-3 px-6 flex space-x-3">
                                    <motion.button
                                        className="text-white bg-blue-500 px-4 py-2 rounded shadow-md hover:bg-blue-600"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/update/${item._id}`)}
                                    >
                                        Update
                                    </motion.button>
                                    <motion.button
                                        className="text-white bg-red-500 px-4 py-2 rounded shadow-md hover:bg-red-600"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </motion.button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <motion.div
                    className="text-center text-gray-500 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    No items found. Please add some items.
                </motion.div>
            )}
        </div>
    );
};

export default Mymanage;
