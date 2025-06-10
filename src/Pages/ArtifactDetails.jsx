import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const [likeCount, setLikeCount] = useState(artifact.likeCount || 0);
  const [liked, setLiked] = useState(false); // Track toggle state

  const handleLikeToggle = async () => {
    const increment = liked ? -1 : 1;
    try {
      await axios.patch(`http://localhost:3000/artifacts/like/${artifact._id}`, {
        increment
      });
      setLikeCount(prev => prev + increment);
      setLiked(!liked);
    } catch (error) {
      console.error('Failed to update like count', error);
    }
  };

  return (
     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{artifact.name}</h2>
      
      {artifact.image && (
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      <div className="space-y-2 text-gray-700">
        <p><strong>Type:</strong> {artifact.type}</p>
        <p><strong>Context:</strong> {artifact.context}</p>
        <p><strong>Description:</strong> {artifact.description}</p>
        <p><strong>Created At:</strong> {artifact.createdAt}</p>
        <p><strong>Discovered At:</strong> {artifact.discoveredAt}</p>
        <p><strong>Discovered By:</strong> {artifact.discoveredBy}</p>
        <p><strong>Location:</strong> {artifact.location}</p>
        <p><strong>Submitted By:</strong> {artifact.userName} ({artifact.userEmail})</p>
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <button
          onClick={handleLikeToggle}
          className={`px-5 py-2 rounded-full text-white font-semibold transition cursor-pointer ${
            liked ? 'bg-red-600' : 'bg-gray-500'
          }`}
        >
          {liked ? '♥ Liked' : '♡ Like'}
        </button>
        <span className="text-lg font-medium">Likes: {likeCount}</span>
      </div>
    </div>
  );
};

export default ArtifactDetails;
