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
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="name"
                defaultValue={selectedArtifact.name}
                required
                className="w-full p-2 border rounded"
                placeholder="Name"
              />
              <input
                type="text"
                name="image"
                defaultValue={selectedArtifact.image}
                required
                className="w-full p-2 border rounded"
                placeholder="Image URL"
              />
              <input
                type="text"
                name="type"
                defaultValue={selectedArtifact.type}
                required
                className="w-full p-2 border rounded"
                placeholder="Type"
              />
              <input
                type="text"
                name="context"
                defaultValue={selectedArtifact.context}
                className="w-full p-2 border rounded"
                placeholder="Historical Context"
              />
              <textarea
                name="description"
                defaultValue={selectedArtifact.description}
                required
                rows="3"
                className="w-full p-2 border rounded"
                placeholder="Description"
              ></textarea>
              <input
                type="text"
                name="createdAt"
                defaultValue={selectedArtifact.createdAt}
                className="w-full p-2 border rounded"
                placeholder="Created At"
              />
              <input
                type="text"
                name="discoveredAt"
                defaultValue={selectedArtifact.discoveredAt}
                className="w-full p-2 border rounded"
                placeholder="Discovered At"
              />
              <input
                type="text"
                name="discoveredBy"
                defaultValue={selectedArtifact.discoveredBy}
                className="w-full p-2 border rounded"
                placeholder="Discovered By"
              />
              <input
                type="text"
                name="location"
                defaultValue={selectedArtifact.location}
                className="w-full p-2 border rounded"
                placeholder="Location"
              />

              <div className="text-sm text-gray-500">
                <p>
                  <strong>Created By:</strong> {selectedArtifact.userName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedArtifact.userEmail}
                </p>
                <p className="mb-4 text-gray-600">
                  <strong>Like Count:</strong> {selectedArtifact.likeCount}
                </p>
              </div>

              <div className="flex justify-between mt-4">
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
