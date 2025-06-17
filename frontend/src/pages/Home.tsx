import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  LifebuoyIcon,
  DocumentArrowUpIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import AIVisual from "../assets/ai-illustration.svg";

export default function Home() {
  const username = "Huy";
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 bg-white border-b z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Doc-AI</h1>
          <nav className="space-x-8 text-lg font-medium">
            <button onClick={() => navigate("/translate")} className="hover:text-blue-600">Translate</button>
            {/* AI Chatbot → /docchat */}
            <button onClick={() => navigate("/docchat")}   className="hover:text-blue-600">AI Chatbot</button>
            <button onClick={() => navigate("/settings")}  className="hover:text-blue-600">Settings</button>
            <button onClick={() => navigate("/signup")}    className="hover:text-blue-600">Log out</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-gradient-to-br from-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Welcome, {username}
            </h2>
            <p className="text-2xl text-gray-700 max-w-xl">
              Manage documents smarter. Translate, chat, and organize — powered by AI.
            </p>
          </div>
          <div className="flex-1 hidden lg:block">
            <img src={AIVisual} alt="AI Visual" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard icon={<AcademicCapIcon className="h-12 w-12 text-blue-600" />}      title="Translate Documents" desc="Upload files and convert them into multiple languages while retaining meaning and layout." />
          <FeatureCard icon={<ChatBubbleLeftRightIcon className="h-12 w-12 text-green-600" />} title="AI Chatbot"       desc="Ask questions directly from your documents with intelligent responses." />
          <FeatureCard icon={<LifebuoyIcon className="h-12 w-12 text-indigo-600" />}          title="Support"           desc="Interactive guides, help center access, and real-time assistance when you need it." />
          <FeatureCard icon={<DocumentArrowUpIcon className="h-12 w-12 text-rose-500" />}     title="Smart Uploads"     desc="Drag-and-drop or direct uploads with format detection and structure retention." />
          <FeatureCard icon={<ClockIcon className="h-12 w-12 text-yellow-600" />}             title="Version History"   desc="Easily access and roll back to previous document versions with confidence." />
          <FeatureCard icon={<ShieldCheckIcon className="h-12 w-12 text-emerald-600" />}      title="Security Focused"  desc="Enterprise-grade encryption keeps your documents secure and private." />
        </div>
      </section>

      {/* Support CTA */}
      <section id="support" className="bg-gradient-to-r from-indigo-200 to-pink-200 text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">Need help or have a question?</h2>
        <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          Visit our support center to browse tutorials, FAQs, and detailed documentation.
          You can also reach out directly to our team for personalized assistance.
        </p>
        <button
          onClick={() => navigate("/support")}
          className="px-8 py-3 text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Go to Support Center
        </button>
      </section>
    </div>
  );
}

/* FeatureCard helper */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow p-8">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
