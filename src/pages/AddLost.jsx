import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthProvider';
import Swal from 'sweetalert2';

const AddLost = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        postType: 'Lost',
        thumbnail: '',
        title: '',
        description: '',
        category: '',
        location: '',
        dateLost: new Date(),
        contactName: user?.displayName || '',
        contactEmail: user?.email || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, dateLost: date });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, thumbnail: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.category || !formData.location) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please fill in all required fields!',
                confirmButtonColor: '#3085d6'
            });
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            await axios.post('http://localhost:5000/items', data);
            Swal.fire({
                icon: 'success',
                title: 'Item Added',
                text: 'Your lost or found item has been successfully added!',
                confirmButtonColor: '#28a745'
            });
            setFormData({
                postType: 'Lost',
                thumbnail: '',
                title: '',
                description: '',
                category: '',
                location: '',
                dateLost: new Date(),
                contactName: user?.displayName || '',
                contactEmail: user?.email || ''
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error adding your item. Please try again later.',
                confirmButtonColor: '#d33'
            });
        }
    }; 

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-2xl mt-10 my-5">
            <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
                Add Lost & Found Item
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Post Type */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Post Type</label>
                    <select
                        name="postType"
                        value={formData.postType}
                        onChange={handleInputChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    >
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Thumbnail</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter item title"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter item description"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    ></textarea>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="E.g., pets, documents, gadgets"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Where was the item lost?"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    />
                </div>

                {/* Date Lost */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Date Lost</label>
                    <DatePicker
                        selected={formData.dateLost}
                        onChange={handleDateChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 px-4 py-2"
                    />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Contact Name</label>
                        <input
                            type="text"
                            name="contactName"
                            value={formData.contactName}
                            readOnly
                            className="block w-full border border-gray-300 rounded-lg bg-gray-100 shadow-sm px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Contact Email</label>
                        <input
                            type="email"
                            name="contactEmail"
                            value={formData.contactEmail}
                            readOnly
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
    );
};

export default AddLost;
