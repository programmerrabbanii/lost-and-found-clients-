import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-blue-200 text-center">
            <motion.div
                className="text-9xl font-bold text-purple-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.div>

            <motion.h1
                className="text-4xl font-semibold text-gray-800 mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Oops! Page not found.
            </motion.h1>

            <motion.p
                className="text-lg text-gray-600 mt-2 px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                The page you are looking for doesn’t exist. It might have been removed or moved elsewhere.
            </motion.p>


            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <Link
                    to="/"
                    className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default ErrorPage;
