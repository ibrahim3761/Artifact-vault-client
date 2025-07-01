import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const ArtifactDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://artifact-vault-server.vercel.app/artifacts/${id}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => {
        setArtifact(res.data);
        setLikeCount(res.data.likeCount || 0);
      })
      .catch((err) => console.error("Failed to load artifact", err));
  }, [id]);

  // Set dynamic title when artifact is loaded
  useEffect(() => {
    if (artifact?.name) {
      document.title = `ArtifactVault - ${artifact.name}`;
    }
  }, [artifact?.name]);

  useEffect(() => {
    if (!user?.email || !artifact?._id) return;

    axios
      .get(
        `https://artifact-vault-server.vercel.app/artifacts/liked/${artifact._id}`,
        {
          params: { userEmail: user.email },
          headers: { authorization: `Bearer ${user.accessToken}` },
        }
      )
      .then((res) => {
        setLiked(res.data.liked);
      })
      .catch((err) => {
        console.error("Failed to check like status", err);
      });
  }, [artifact, user]);

  const handleLikeToggle = () => {
    const increment = liked ? -1 : 1;

    axios
      .patch(
        `https://artifact-vault-server.vercel.app/artifacts/like/${artifact._id}`,
        {
          increment,
          userEmail: user.email,
        }
      )
      .then((res) => {
        setLikeCount((prev) => prev + increment);
        setLiked(!liked);

        Swal.fire({
          icon: liked ? "info" : "success",
          title: liked ? "Artifact disliked" : "Artifact liked",
          text: liked
            ? "You removed this artifact from your liked list."
            : "You liked this artifact!",
          timer: 2000,
          showConfirmButton: false,
        });

        console.log("Like status updated:", res.data);
      })
      .catch((error) => {
        console.error("Error updating like status:", error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Failed to update like status. Please try again.",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  if (!artifact) {
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

  return (
    <div className="md:py-24 py-12 p-4">
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-amber-200">
        <h2 className="text-3xl font-bold mb-4">{artifact.name}</h2>

        {artifact.image && (
          <img
            src={artifact.image}
            alt={artifact.name}
            className="w-full h-80 object-cover rounded mb-6"
          />
        )}

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Type:</strong> {artifact.type}
          </p>
          <p>
            <strong>Context:</strong> {artifact.context}
          </p>
          <p>
            <strong>Description:</strong> {artifact.description}
          </p>
          <p>
            <strong>Created At:</strong> {artifact.createdAt}
          </p>
          <p>
            <strong>Discovered At:</strong> {artifact.discoveredAt}
          </p>
          <p>
            <strong>Discovered By:</strong> {artifact.discoveredBy}
          </p>
          <p>
            <strong>Location:</strong> {artifact.location}
          </p>
          <p>
            <strong>Submitted By:</strong> {artifact.userName} (
            {artifact.userEmail})
          </p>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={handleLikeToggle}
            className={`px-5 py-2 rounded-full text-white font-semibold transition cursor-pointer ${
              liked ? "bg-red-600" : "bg-gray-500"
            }`}
          >
            {liked ? "Dislike" : "Like"}
          </button>
          <span className="text-lg font-medium">Likes: {likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
