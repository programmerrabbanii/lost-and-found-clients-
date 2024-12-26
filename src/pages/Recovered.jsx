// AllRecoveredItems.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Recovered = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecoveredItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allRecovered', {
        });
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">All Recovered Items</h1>
      {recoveredItems.length === 0 ? (
        <p>No recovered items found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Item Title</th>
              <th className="py-2 px-4 border-b">Recovered Location</th>
              <th className="py-2 px-4 border-b">Recovered Date</th>
              <th className="py-2 px-4 border-b">Recovered By</th>
            </tr>
          </thead>
          <tbody>
            {recoveredItems.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b">{item.itemTitle}</td>
                <td className="py-2 px-4 border-b">{item.recoveredLocation}</td>
                <td className="py-2 px-4 border-b">{new Date(item.recoveredDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{item.recoveredBy.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Recovered;
