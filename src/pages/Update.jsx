import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthProvider";

const Update = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [itemData, setItemData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    postType: "",
    userName: user?.displayName || "",
    userEmail: user?.email || "",
  });

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(`https://lost-found-server-nine.vercel.app/allItems/${id}`);
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItemData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://lost-found-server-nine.vercel.app/updateItems/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (response.ok) {
        Swal.fire("Success!", "Item updated successfully.", "success");
      } else {
        Swal.fire("Error!", "Failed to update the item.", "error");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">Update Item</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={itemData.title}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={itemData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={itemData.location}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={itemData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Post Type Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Post Type</label>
            <select
              name="postType"
              value={itemData.postType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          {/* Read-Only Fields */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">User Name</label>
            <input
              type="text"
              value={itemData.userName}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
              readOnly
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">User Email</label>
            <input
              type="email"
              value={itemData.userEmail}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
