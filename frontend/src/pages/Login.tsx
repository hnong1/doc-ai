import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ai-illustration.svg";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-8 py-16">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Illustration */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-white p-12">
          <img
            src={logo}
            alt="Doc-AI Illustration"
            className="w-full max-w-[500px]"
          />
        </div>

        {/* Form */}
        <div className="p-16 md:p-20">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-10 text-2xl">
            Sign in to continue using <span className="font-semibold text-indigo-600">Doc-AI</span>
          </p>

          <form className="space-y-8 text-lg">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-semibold py-4 rounded-xl transition duration-200 shadow-md"
            >
              Login
            </button>
          </form>

          <p className="mt-10 text-center text-gray-600 text-md">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
