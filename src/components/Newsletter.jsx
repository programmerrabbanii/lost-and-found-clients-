import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-blue-100 py-10 px-6 md:px-16 lg:px-24 rounded-lg shadow-lg mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Stay Updated!</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to our newsletter for the latest news and updates.
        </p>
      </div>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
