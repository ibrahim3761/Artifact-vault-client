import React from 'react';
import { useLoaderData, Link } from 'react-router';

const AllArtifacts = () => {
  const artifacts = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {artifacts.map((artifact) => (
        <div key={artifact._id} className="bg-white shadow-md rounded-xl overflow-hidden border border-amber-200">
          <img
            src={artifact.image}
            alt={artifact.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-amber-800">
            <h3 className="text-lg font-bold mb-1">{artifact.name}</h3>
            <p className="text-sm"><strong>Type:</strong> {artifact.type}</p>
            <p className="text-sm"><strong>Context:</strong> {artifact.context}</p>
            <div className="mt-4">
              <Link
                to={`/artifacts/${artifact._id}`}
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllArtifacts;
