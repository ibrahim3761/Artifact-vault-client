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
    const fetchArtifacts = () => {
      if (user?.email) {
        myArtifactsPromise(user.email, user.accessToken)
          .then((res) => {
            setMyArtifacts(res);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching artifacts:", error);
          });
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
        axios
          .delete(`https://artifact-vault-server.vercel.app/artifacts/${id}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
          .then((res) => {
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
        `https://artifact-vault-server.vercel.app/artifacts/${selectedArtifact._id}`,
        updatedData,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
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
      <div className="flex justify-center text-center py-24" role="status">
        <svg
          aria-hidden="true"
          class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  if (myArtifacts.length === 0) {
    return (
      <div className="p-26 bg-amber-50">
        <div className="flex flex-col gap-2 text-center text-lg font-semibold text-amber-600 border border-amber-200 p-6 rounded-lg">
          <title>ArtifactVault - My Artifacts</title>
          <h1>You haven’t added any artifacts yet.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-14">
      <h2 className="text-3xl font-bold mb-2 text-center text-amber-800">My Artifacts</h2>
      <div className="p-6 overflow-x-auto">
        <title>ArtifactVault - My Artifacts</title>
        <table className="min-w-full border border-amber-300 text-left bg-white rounded-lg overflow-hidden">
          <thead className="bg-amber-100 text-amber-800 text-sm">
            <tr>
              <th className="px-4 py-3 border-b">Image</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Type</th>
              <th className="px-4 py-3 border-b">Created</th>
              <th className="px-4 py-3 border-b">Location</th>
              <th className="px-4 py-3 border-b text-center">Likes</th>
              <th className="px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {myArtifacts.map((artifact) => (
              <tr
                key={artifact._id}
                className="hover:bg-amber-50 transition text-sm"
              >
                <td className="px-4 py-3 border-b">
                  <img
                    src={artifact.image}
                    alt={artifact.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b font-medium">
                  {artifact.name}
                </td>
                <td className="px-4 py-3 border-b">{artifact.type}</td>
                <td className="px-4 py-3 border-b">{artifact.createdAt}</td>
                <td className="px-4 py-3 border-b">{artifact.location}</td>
                <td className="px-4 py-3 border-b text-center">
                  {artifact.likeCount}
                </td>
                <td className="px-4 py-3 border-b align-middle whitespace-nowrap">
                  <button
                    onClick={() => setSelectedArtifact(artifact)}
                    className="text-green-600 hover:underline mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Update Modal */}
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
                  ></textarea>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1">Created At</label>
                  <input
                    type="text"
                    name="createdAt"
                    defaultValue={selectedArtifact.createdAt}
                    className="p-2 border rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1">Discovered At</label>
                  <input
                    type="text"
                    name="discoveredAt"
                    defaultValue={selectedArtifact.discoveredAt}
                    className="p-2 border rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1">Discovered By</label>
                  <input
                    type="text"
                    name="discoveredBy"
                    defaultValue={selectedArtifact.discoveredBy}
                    className="p-2 border rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={selectedArtifact.location}
                    className="p-2 border rounded"
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
    </div>
  );
};

export default MyArtifacts;
