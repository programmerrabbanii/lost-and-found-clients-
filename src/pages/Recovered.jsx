// AllRecoveredItems.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recovered = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecoveredItems = async () => {
      try {
        const response = await axios.get('https://lost-found-server-nine.vercel.app/allRecovered');
        setRecoveredItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Could not fetch recovered items.");
        setLoading(false);
      }
    };

    fetchRecoveredItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500 border-t-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold text-xl py-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">All Recovered Items</h1>
      
      {recoveredItems.length === 0 ? (
        <div className="text-center text-xl text-gray-500 mt-6">
          <p>No recovered items found. But don't worry, keep looking!</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border-t-4 border-indigo-500 mt-8">
          <table className="min-w-full bg-white text-gray-700">
            <thead>
              <tr className="bg-indigo-100 text-left text-sm font-semibold">
                <th className="py-3 px-4 border-b">Item Title</th>
                <th className="py-3 px-4 border-b">Recovered Location</th>
                <th className="py-3 px-4 border-b">Recovered Date</th>
                <th className="py-3 px-4 border-b">Recovered By</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.map((item) => (
                <tr key={item._id} className="hover:bg-indigo-50 transition-colors duration-200">
                  <td className="py-3 px-4 border-b">{item.itemTitle}</td>
                  <td className="py-3 px-4 border-b">{item.recoveredLocation}</td>
                  <td className="py-3 px-4 border-b">{new Date(item.recoveredDate).toLocaleDateString()}</td>
                  <td className="py-3 px-4 border-b">{item.recoveredBy.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Recovered;
