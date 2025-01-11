import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Mymanage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `https://lost-found-server-nine.vercel.app/my-manage/${user?.email}`
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    if (user?.email) {
      fetchCampaigns();
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this post",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://lost-found-server-nine.vercel.app/itemsD/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
            Swal.fire("Deleted!", "Your post has been deleted.", "success");
          } else {
            Swal.fire(
              "Failed!",
              "There was an error deleting the post.",
              "error"
            );
          }
        } catch (error) {
          console.error("Error deleting post:", error);
          Swal.fire(
            "Error!",
            "Something went wrong. Please try again later.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>
          lost-found || Manage Items

        </title>
      </Helmet>
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-center text-3xl font-bold mb-6">Manage My Items</h2>
        {campaigns.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-700 bg-white shadow-lg border">
            <thead className="text-xs uppercase bg-blue-500 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr
                  key={campaign._id}
                  className="hover:bg-gray-100 border-b text-gray-600"
                >
                  <td className="px-6 py-4">{campaign.postType}</td>
                  <td className="px-6 py-4">{campaign.title}</td>
                  <td className="px-6 py-4">{campaign.category}</td>

                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <Link
                      to={`/update/${campaign._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Update
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(campaign._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold">No post found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mymanage;
