import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-center px-4 relative">
      {/* Simple background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100"></div>
      
      <div className="relative z-10">
        <h1 className="text-9xl font-black text-amber-600 mb-6 drop-shadow-lg">
          404
        </h1>
        
        <p className="text-2xl text-amber-800 mb-8 font-medium">
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <Link
          to="/"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
      
      
    </div>
  );
};

export default Error;