import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import scanAnimation from "../assets/animations/scan-docs.json";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Visual Side */}
        <div className="flex flex-col items-center text-center md:w-1/2 relative">
          <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10 animate-float-slow z-0" />
          <div className="w-64 z-10">
            <Lottie animationData={scanAnimation} loop={true} />
          </div>
          <h1 className="z-10 text-3xl font-semibold text-gray-800 mt-4">
            Join the Future of AI-Powered Documents
          </h1>
          <p className="z-10 mt-2 text-sm text-gray-600 max-w-sm">
            Fast. Smart. Reliable. Elevate your workflow today.
          </p>
        </div>

        {/* Signup Form */}
        <div className="w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-10 z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
            Create your Doc-AI account
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition text-lg"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
