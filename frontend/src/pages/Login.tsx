import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import aiDocsAnimation from "../assets/animations/ai-docs.json";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Left Visual */}
        <div className="flex flex-col items-center text-center md:w-1/2 relative">
          <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10 animate-float-slow z-0" />
          <div className="w-64 z-10">
            <Lottie animationData={aiDocsAnimation} loop={true} />
          </div>
          <h1 className="z-10 text-3xl font-semibold text-gray-800 mt-4">
            Smarter Documents, Smarter You.
          </h1>
          <p className="z-10 mt-2 text-sm text-gray-600 max-w-sm">
            Powering smarter workflows with document intelligence.
          </p>
        </div>

        {/* Right Login Form */}
        <div className="w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-10 z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
            Welcome back to your intelligent workspace
          </h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="text-purple-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-4 rounded-xl hover:bg-purple-600 transition text-lg"
            >
              Log In
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-purple-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
