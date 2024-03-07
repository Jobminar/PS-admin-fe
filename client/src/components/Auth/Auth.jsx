// Import necessary dependencies
import React, { useState } from "react";
import { signupAPI, loginAPI } from "./api"; // Replace with your actual API file
import "./App.css"; // If you have a separate CSS file

// Main App component
const Auth = () => {
  // State for user dAuth
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // State for success messages
  const [successMessage, setSuccessMessage] = useState("");

  // State for showing/hiding pages
  const [isSignupPage, setIsSignupPage] = useState(true);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the appropriate API based on the current page
    const apiFunction = isSignupPage ? signupAPI : loginAPI;

    try {
      // Make API call
      const response = await apiFunction(userData);

      // Check for success
      if (response.success) {
        // Update success message and switch page
        setSuccessMessage(response.message);
        setIsSignupPage(!isSignupPage);
      } else {
        // Handle failure (show error message, etc.)
        console.error("API call failed:", response.message);
      }
    } catch (error) {
      // Handle network errors, etc.
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md"
        >
          {successMessage && (
            <div className="mb-4 text-green-500">{successMessage}</div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isSignupPage ? "Sign Up" : "Login"}
          </button>

          <p className="mt-4">
            {isSignupPage
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsSignupPage(!isSignupPage)}
            >
              {isSignupPage ? "Login here." : "Sign up here."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
