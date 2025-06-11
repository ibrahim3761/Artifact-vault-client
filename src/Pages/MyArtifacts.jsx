import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { myArtifactsPromise } from "../Api/MyArtifacts";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  useEffect(() => {
    const fetchArtifacts = async () => {
      if (user?.email) {
        try {
          const res = await myArtifactsPromise(user.email);
          setMyArtifacts(res);
        } catch (error) {
          console.error("Error fetching artifacts:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchArtifacts();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/artifacts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setMyArtifacts((prev) =>
              prev.filter((artifact) => artifact._id !== id)
            );
            Swal.fire("Deleted!", "Artifact has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = Object.fromEntries(new FormData(form));

    axios
      .put(
        `http://localhost:3000/artifacts/${selectedArtifact._id}`,
        updatedData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", "Artifact updated successfully", "success");
          setMyArtifacts((prev) =>
            prev.map((artifact) =>
              artifact._id === selectedArtifact._id
                ? { ...artifact, ...updatedData }
                : artifact
            )
          );
          setSelectedArtifact(null);
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        Swal.fire("Error", "Failed to update artifact", "error");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (myArtifacts.length === 0) {
    return (
      <div className="text-center text-gray-600 py-10">
        <h2 className="text-xl font-semibold">No artifacts found 😢</h2>
        <p>You haven’t added any artifacts yet.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-amber-50 p-5 rounded shadow relative"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2 text-amber-800">
              {artifact.name}
            </h2>
            <p className="text-sm text-gray-600">{artifact.type}</p>
            <p className="text-sm text-gray-500">
              Created At: {artifact.createdAt}
            </p>
            <p className="text-sm text-gray-500">By: {artifact.userName}</p>
            <p className="text-sm text-gray-500">Email: {artifact.userEmail}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setSelectedArtifact(artifact)}
                className="bg-amber-500 hover:bg-amber-600 text-white py-1 px-3 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(artifact._id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 p-6 rounded-lg max-w-lg w-full relative shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-amber-700">
              Update Artifact
            </h2>
            <form
              onSubmit={handleUpdate}
              className="space-y-4 text-sm text-amber-900"
            >
              <div className="flex flex-col">
                <label className="mb-1">Artifact Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedArtifact.name}
                  required
                  className="p-2 border rounded"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={selectedArtifact.image}
                  required
                  className="p-2 border rounded"
                  placeholder="Image URL"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Artifact Type</label>
                <select
                  name="type"
                  defaultValue={selectedArtifact.type}
                  required
                  className="p-2 border rounded"
                >
                  <option value="">Select type</option>
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Documents">Documents</option>
                  <option value="Writings">Writings</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Historical Context</label>
                <input
                  type="text"
                  name="context"
                  defaultValue={selectedArtifact.context}
                  className="p-2 border rounded"
                  placeholder="Historical Context"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedArtifact.description}
                  required
                  rows="3"
                  className="p-2 border rounded"
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Created At</label>
                <input
                  type="text"
                  name="createdAt"
                  defaultValue={selectedArtifact.createdAt}
                  className="p-2 border rounded"
                  placeholder="Created At"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Discovered At</label>
                <input
                  type="text"
                  name="discoveredAt"
                  defaultValue={selectedArtifact.discoveredAt}
                  className="p-2 border rounded"
                  placeholder="Discovered At"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Discovered By</label>
                <input
                  type="text"
                  name="discoveredBy"
                  defaultValue={selectedArtifact.discoveredBy}
                  className="p-2 border rounded"
                  placeholder="Discovered By"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={selectedArtifact.location}
                  className="p-2 border rounded"
                  placeholder="Location"
                />
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Created By:</strong> {selectedArtifact.userName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedArtifact.userEmail}
                </p>
                <p>
                  <strong>Like Count:</strong> {selectedArtifact.likeCount}
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArtifact(null)}
                  className="text-gray-600 hover:text-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
