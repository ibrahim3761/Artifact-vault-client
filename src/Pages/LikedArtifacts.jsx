import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
const LikedArtifacts = () => {
  const { user } = use(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = () => {
      if (!user?.email) return;

      axios
        .get("https://artifact-vault-server.vercel.app/artifacts", {
          params: { likedBy: user.email },
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          setLikedArtifacts(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching liked artifacts:", error);
        });
    };

    fetchLikedArtifacts();
  }, [user?.email]);

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

  if (likedArtifacts.length === 0) {
    return (
      <div className="p-26 bg-amber-50">
        <div className="flex flex-col gap-2 text-center text-lg font-semibold text-amber-600 border border-amber-200 p-6 rounded-lg">
          <title>ArtifactVault - Liked Artifacts</title>
          <h1>You haven't liked any artifacts yet.</h1>
          <Link
            to="/all-artifacts"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            View all artifacts →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Your Liked Artifacts
      </h2>
      <div className="p-6 overflow-x-auto ">
        <title>ArtifactVault - Liked Artifacts</title>

        <table className="min-w-full border border-amber-300 text-left bg-white rounded-lg overflow-hidden">
          <thead className="bg-amber-100 text-amber-800 text-sm">
            <tr>
              <th className="px-4 py-3 border-b">Image</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Type</th>
              <th className="px-4 py-3 border-b">Context</th>
              <th className="px-4 py-3 border-b">Created</th>
              <th className="px-4 py-3 border-b">Discovered</th>
              <th className="px-4 py-3 border-b">Discovered By</th>
              <th className="px-4 py-3 border-b">Location</th>
              <th className="px-4 py-3 border-b">Likes</th>
              <th className="px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {likedArtifacts.map((artifact) => (
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
                <td className="px-4 py-3 border-b">{artifact.context}</td>
                <td className="px-4 py-3 border-b">{artifact.createdAt}</td>
                <td className="px-4 py-3 border-b">{artifact.discoveredAt}</td>
                <td className="px-4 py-3 border-b">{artifact.discoveredBy}</td>
                <td className="px-4 py-3 border-b">{artifact.location}</td>
                <td className="px-4 py-3 border-b text-center">
                  {artifact.likeCount}
                </td>
                <td className="px-4 py-3 border-b">
                  <Link
                    to={`/artifacts-details/${artifact._id}`}
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikedArtifacts;
