import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import aiDocsAnimation from "../assets/animations/ai-docs.json";
import { login } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // or /dashboard
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center md:w-1/2 relative">
          <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10 animate-float-slow" />
          <div className="w-64">
            <Lottie animationData={aiDocsAnimation} loop />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mt-4">
            Smarter Documents, Smarter You.
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-sm">
            Powering smarter workflows with document intelligence.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Welcome back to your intelligent workspace
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 text-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 text-lg"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-purple-500" />
                <span>Remember me</span>
              </label>
              <Link to="/settings" className="text-purple-500 hover:underline">
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
