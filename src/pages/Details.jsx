import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Details = ({ user }) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [recoveredLocation, setRecoveredLocation] = useState("");

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/item/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error("Error fetching item details:", error);
            }
        };
        fetchItemDetails();
    }, [id]);

    const handleSubmit = async () => {
        try {
            if (item.status === "recovered") {
                alert("This item has already been recovered.");
                return;
            }

            const recoveredData = {
                itemId: item._id,
                recoveredDate,
                recoveredLocation,
                recoveredBy: {
                    name: user?.name,
                    email: user?.email,
                    image: user?.image,
                },
            };

            // Store recovered data in another collection
            await axios.post("http://localhost:5000/recovered-items", recoveredData);

            // // Update item status
            // await axios.patch(`http://localhost:5000/items/${item._id}`, {
            //     status: "recovered",
            // });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item status updated to 'Recovered'!",
                showConfirmButton: false,
                timer: 1500
              });
            setModalOpen(false);
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    if (!item) {
        return <p className="text-center py-20 text-lg font-semibold">Loading...</p>;
    }

    return (
        <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 min-h-screen">
            {/* Image and Details */}
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">{item.title}</h1>
                    <p className="mb-4 text-gray-600">{item.description}</p>
                    <p className="text-gray-800">
                        <strong>Location:</strong> {item.location}
                    </p>
                    <p className="text-gray-800">
                        <strong>Status:</strong>{" "}
                        <span
                            className={`px-2 py-1 rounded ${
                                item.status === "recovered"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                        >
                            {item.status}
                        </span>
                    </p>

                    {item.status !== "recovered" && (
                        <button
                            onClick={() => setModalOpen(true)}
                            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        >
                            {item.postType === "lost" ? "Found This!" : "This is Mine!"}
                        </button>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Recovered Details
                        </h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">
                                Recovered Location
                            </label>
                            <input
                                type="text"
                                value={recoveredLocation}
                                onChange={(e) => setRecoveredLocation(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter location"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Recovered Date</label>
                            <DatePicker
                                selected={recoveredDate}
                                onChange={(date) => setRecoveredDate(date)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Recovered By</label>
                            <input
                                type="text"
                                value={`${user?.userName} (${user?.contactEmail})`}
                                readOnly
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
