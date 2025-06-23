import { LifebuoyIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();

  /* navbar links */
  const nav = [
    { label: "Home",       path: "/" },
    { label: "Translate",  path: "/translate" },
    { label: "AI Chatbot", path: "/docchat" },  // updated
    { label: "Settings",   path: "/settings" },
    { label: "Log out",    path: "/signup" },   // logout → signup
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 bg-white border-b shadow-sm z-50">
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

      {/* Main content */}
      <main className="pt-40 pb-20 px-6 max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <LifebuoyIcon className="h-16 w-16 text-indigo-600 mb-6" />
          <h2 className="text-5xl font-bold mb-6">Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you’re experiencing any issues such as bugs or trouble accessing your account,
            please don’t hesitate to reach out.
          </p>
          <p className="text-lg text-gray-700">
            Contact us at:&nbsp;
            <a href="mailto:docai.contact@gmail.com" className="text-blue-600 hover:underline">
              docai.contact@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
