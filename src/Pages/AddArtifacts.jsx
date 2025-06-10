import React from "react";
import { use } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddArtifact = () => {
  const { user } = use(AuthContext);

  const handleAddArtifact = (e) => {
  e.preventDefault();
  const form = e.target;
  const artifact = Object.fromEntries(new FormData(form));
  artifact.likeCount = 0;

  axios
    .post("http://localhost:3000/artifacts", artifact)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Artifact added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    });
};

  return (
    <div className="md:px-10 md:py-14 px-5 py-5 bg-amber-50 min-h-screen">
      <div className="bg-white p-10 rounded-xl shadow-lg text-gray-800 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-4">
          Add New Artifact
        </h2>
        <p className="text-center text-sm md:text-base text-amber-700 mb-8">
          Fill out the form below to add a historical artifact.
        </p>

        <form
          onSubmit={handleAddArtifact}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Artifact Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Artifact Name</label>
            <input
              type="text"
              name="name"
              placeholder="Artifact name"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Artifact Image */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/artifact.jpg"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Artifact Type */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Artifact Type</label>
            <select
              name="type"
              required
              className="p-2 rounded border bg-white text-gray-700 focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select type</option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>

          {/* Historical Context */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Historical Context</label>
            <input
              type="text"
              name="context"
              placeholder="e.g., Roman Empire"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Short Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Short Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a short description..."
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            ></textarea>
          </div>

          {/* Created At */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Created At</label>
            <input
              type="text"
              name="createdAt"
              placeholder="e.g., 100 BC"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Discovered At */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Discovered At</label>
            <input
              type="text"
              name="discoveredAt"
              placeholder="e.g., 1799"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Discovered By */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Discovered By</label>
            <input
              type="text"
              name="discoveredBy"
              placeholder="Name of discoverer"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Present Location */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Present Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g., British Museum, London"
              required
              className="p-2 rounded border bg-white focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* User Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Your Email</label>
            <input
              type="text"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="p-2 rounded border bg-gray-100 text-gray-700"
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-amber-900">Your Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="p-2 rounded border bg-gray-100 text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
            >
              Add Artifact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
