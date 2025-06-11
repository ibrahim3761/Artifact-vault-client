import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      if (!user?.email) return;

      try {
        const res = await axios.get("http://localhost:3000/artifacts", {
          params: { likedBy: user.email },
        });
        setLikedArtifacts(res.data);
      } catch (error) {
        console.error("Failed to fetch liked artifacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedArtifacts();
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (likedArtifacts.length === 0) {
    return (
      <div className=" flex flex-col gap-2 text-center mt-10 text-lg font-semibold text-amber-600 border border-amber-200 p-6 rounded-lg">
        <div>
            <h1>You haven't liked any artifacts yet.</h1>
        </div>
        <div>
          <Link
            to="/all-artifacts"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition "
          >
            View all artifacts →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Your Liked Artifacts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="border border-amber-200 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold mb-2">{artifact.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{artifact.context}</p>
            <Link
              to={`/artifacts-details/${artifact._id}`}
              className="inline-block mt-2 text-amber-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
