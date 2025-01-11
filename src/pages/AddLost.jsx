import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddLost = () => {
  const { user } = useContext(AuthContext);

  // Default date state
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [addItems, setAddItems] = useState([]);

  const handleAddLost = async (e) => {
    e.preventDefault();
    const postType = e.target.postType.value;
    const image = e.target.image.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const contactName = user?.displayName || "Anonymous";
    const contactEmail = user?.email || "N/A";

    // Format date to YYYY-MM-DD
    const formattedDate = selectedDate.toISOString().split("T")[0];

    const lostAllItems = {
      postType,
      image,
      title,
      description,
      category,
      location,
      date: formattedDate,
      contactName,
      contactEmail,
    };

    try {
      const response = await axios.post(
        "https://lost-found-server-nine.vercel.app/addItems",
        lostAllItems
      );
      setAddItems(response.data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your item has been added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error adding item:", error);

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error adding item. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
        <Helmet>
            <title>
                lost-found || Add Items
            </title>
        </Helmet>
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-2xl mt-10 my-5">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
          Add Lost & Found Item
        </h2>
        <form onSubmit={handleAddLost} className="space-y-8">
          {/* Post Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Type
            </label>
            <select
              name="postType"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          {/* PhotoURL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              PhotoURL
            </label>
            <input
              name="image"
              type="text"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter item title"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter item description"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="E.g., pets, documents, gadgets"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Where was the item lost?"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            />
          </div>

          {/* Date Lost */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date Lost
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              name="date"
              dateFormat="yyyy-MM-dd"
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Name
              </label>
              <input
                type="text"
                name="contactName"
                readOnly
                value={user?.displayName || "Anonymous"}
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 shadow-sm px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                readOnly
                value={user?.email || "N/A"}
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 shadow-sm px-4 py-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition focus:ring focus:ring-indigo-300"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLost;
