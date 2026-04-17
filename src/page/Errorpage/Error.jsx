import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center">
        
        
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#244d3f]">
          404
        </h1>

        
        <p className="text-xl md:text-2xl text-gray-600 mt-4">
          Oops! Page not found
        </p>

        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist.
        </p>

        
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-[#244d3f] text-white rounded-xl hover:bg-gray-800 transition duration-300">
            Go Back Home
          </button>
        </Link>

      </div>

    </div>
    );
};

export default Error;