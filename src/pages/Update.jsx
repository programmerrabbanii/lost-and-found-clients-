import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthProvider";

const Update = () => {
  const { id } = useParams(); 
  const {user}=useContext(AuthContext)

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
    const fetchItemData = async (id) => {
        console.log(id);
      try {
        const response = await fetch(`http://localhost:5000/allItems/${id}`);
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
      const response = await fetch(`http://localhost:5000/updateItems/${id}`, {
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
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">Update Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={itemData.title}
            onChange={handleInputChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={itemData.description}
            onChange={handleInputChange}
            className="w-full border rounded px-4 py-2"
            required
          ></textarea>
        </div>

        {/* Location Field */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={itemData.location}
            onChange={handleInputChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={itemData.date}
            onChange={handleInputChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        {/* Post Type Field */}
        <div>
          <label className="block font-medium">Post Type</label>
          <select
            name="postType"
            value={itemData.postType}
            onChange={handleInputChange}
            className="w-full border rounded px-4 py-2"
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
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            value={itemData.userName}
            className="w-full border rounded px-4 py-2 bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="block font-medium">User Email</label>
          <input
            type="email"
            value={itemData.userEmail}
            className="w-full border rounded px-4 py-2 bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
