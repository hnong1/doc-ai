// src/pages/Settings.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  /* demo state */
  const [language,      setLanguage]      = useState("English");
  const [newEmail,      setNewEmail]      = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [currentPw,     setCurrentPw]     = useState("");
  const [newPw,         setNewPw]         = useState("");

  /* handlers (stubs) */
  const handleClear      = () => alert("Local data cleared!");
  const handleSaveEmail  = () => alert("Email updated!");
  const handleSavePw     = () => alert("Password / recovery updated!");

  /* navbar links — AI Chatbot → /docchat, Log out → /signup */
  const nav = [
    { label: "Home",      path: "/" },
    { label: "Translate", path: "/translate" },
    { label: "Support",   path: "/support" },
    { label: "AI Chatbot",path: "/docchat" },   // updated route
    { label: "Log out",   path: "/signup" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 bg-white border-b shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Doc-AI</h1>
          <nav className="space-x-8 text-lg font-medium">
            {nav.map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="hover:text-blue-600 transition"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Page body */}
      <main className="pt-24 pb-16 px-6 flex flex-col items-center text-gray-900">
        <h2 className="text-4xl font-bold mb-8">Settings</h2>

        {/* Languages */}
        <section className="w-full max-w-lg bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <label className="block text-sm mb-2 font-medium text-gray-700">
            Preferred interface language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 border rounded bg-white"
          >
            {["English", "Spanish", "French", "German", "Chinese", "Japanese"].map(
              (lang) => (
                <option key={lang}>{lang}</option>
              )
            )}
          </select>
        </section>

        {/* Change Email */}
        <section className="w-full max-w-lg bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Change Email</h3>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New email address
          </label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="you@newmail.com"
          />
          <button
            onClick={handleSaveEmail}
            className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Update Email
          </button>
        </section>

        {/* Password & Recovery */}
        <section className="w-full max-w-lg bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Password &amp; Recovery</h3>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current password
          </label>
          <input
            type="password"
            value={currentPw}
            onChange={(e) => setCurrentPw(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="••••••••"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            New password
          </label>
          <input
            type="password"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="••••••••"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recovery email
          </label>
          <input
            type="email"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-6"
            placeholder="backup@mail.com"
          />

          <button
            onClick={handleSavePw}
            className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
          >
            Save Changes
          </button>
        </section>

        {/* Clear Data */}
        <section className="w-full max-w-lg bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">Clear Data</h3>
          <p className="text-gray-700 mb-4">
            Remove all saved documents and settings stored in your browser.
          </p>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
          >
            Clear All Data
          </button>
        </section>
      </main>
    </div>
  );
}
