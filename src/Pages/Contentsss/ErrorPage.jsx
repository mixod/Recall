import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
