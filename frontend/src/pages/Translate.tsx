import { useState, useRef } from "react";
import { DocumentTextIcon, DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Translate() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<"text" | "documents">("text");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar starts closed
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Spanish");
  const [file, setFile] = useState<File | null>(null);

  const savedDocs = [
    "Report_Q1_2025.docx",
    "Design_Spec_v3.pdf",
    "Budget_Proposal.xlsx",
    "Meeting_Notes_April.txt",
    "Summary.md",
  ];

  const SIDEBAR_W = 256;
  const BTN_LEFT = sidebarOpen ? SIDEBAR_W - 20 : 12;

  const handleTranslate = () => console.log({ fromLang, toLang, file });

  const nav = [
    { label: "Home", path: "/" },
    { label: "AI Chatbot", path: "/docchat" },
    { label: "Support", path: "/support" },
    { label: "Settings", path: "/settings" },
    { label: "Log out", path: "/signup" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 overflow-hidden">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="pt-20 flex flex-col items-center h-full overflow-y-auto">
          <h2 className="text-sm font-bold tracking-widest text-gray-700 mb-4">
            UPLOADED DOCUMENTS
          </h2>
          {savedDocs.map((doc) => (
            <button
              key={doc}
              className="w-56 flex flex-col items-center py-2 hover:bg-gray-100 rounded"
              onClick={() => console.log("Load", doc)}
            >
              <DocumentTextIcon className="h-5 w-5 text-gray-700" />
              <span className="mt-1 text-sm truncate text-gray-900">{doc}</span>
            </button>
          ))}
        </div>
      </aside>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ left: BTN_LEFT }}
        className="fixed top-6 z-[100] w-10 h-10 rounded-full bg-white ring-2 ring-purple-600 shadow
                   flex items-center justify-center hover:bg-purple-50 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2"
             className="w-5 h-5 text-gray-700">
          <path d="M5 4v16" /><path d="M15 4v16" />
          <polyline points="13 8 9 12 13 16" />
        </svg>
      </button>

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        <header
          style={{ marginLeft: sidebarOpen ? SIDEBAR_W : 0 }}
          className="fixed inset-x-0 top-0 bg-white shadow z-40 transition-all"
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Doc-AI</h1>
            <nav className="space-x-8 text-lg font-medium">
              {nav.map(({ label, path }) => (
                <button key={label} onClick={() => navigate(path)} className="hover:text-blue-600 transition">
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="pt-20 px-8 flex flex-col flex-1 overflow-hidden">
          <div className="rounded-lg mb-4">
            <div className="flex gap-4 justify-center">
              {["text", "documents"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m as "text" | "documents")}
                  className={`flex items-center justify-center gap-2 px-5 py-2 rounded-md font-medium shadow-sm transition
                    ${mode === m
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"}`}
                >
                  {m === "text" ? (
                    <DocumentTextIcon className="h-5 w-5" />
                  ) : (
                    <DocumentArrowUpIcon className="h-5 w-5" />
                  )}
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mb-4">
            {[fromLang, toLang].map((lang, idx) => (
              <select
                key={idx}
                value={lang}
                onChange={(e) => idx ? setToLang(e.target.value) : setFromLang(e.target.value)}
                className="px-4 py-2 rounded bg-white"
              >
                {["English", "Spanish", "French", "German", "Chinese", "Japanese"].map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            ))}
            <button onClick={handleTranslate} className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
              Translate
            </button>
          </div>

          <input type="file" ref={fileRef} onChange={(e) => e.target.files && setFile(e.target.files[0])} className="hidden" />

          <div className="flex flex-1 gap-6 overflow-hidden">
            <div className="flex-1 p-4 rounded-lg bg-white">
              {mode === "text" ? (
                <textarea className="w-full h-full outline-none resize-none" placeholder="Enter text" />
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-6">
                  <p className="text-gray-600">Upload a document</p>
                  <button onClick={() => fileRef.current?.click()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                    Choose File
                  </button>
                  {file && <p className="mt-2 text-sm text-gray-700 truncate max-w-full">{file.name}</p>}
                </div>
              )}
            </div>

            <div className="flex-1 p-4 rounded-lg bg-white overflow-auto">
              <h3 className="text-gray-500 mb-2">Translation</h3>
              <div className="h-full bg-gray-50 p-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
