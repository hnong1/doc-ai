import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const DocChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [documents] = useState(['My Resume', 'Research Notes']);
  const [selectedDoc, setSelectedDoc] = useState('My Resume');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTimestamp = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      text: input,
      timestamp: formatTimestamp(new Date()),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse: Message = {
        role: 'ai',
        text: 'This is a summary or response from the document.',
        timestamp: formatTimestamp(new Date()),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-screen font-sans text-gray-800">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 border-r shadow-sm ${
          sidebarOpen ? 'w-64 p-4' : 'w-0 p-0 overflow-hidden'
        }`}
      >
        {sidebarOpen && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-700">Documents</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-2 overflow-y-auto max-h-[70vh] pr-2">
              {documents.map((doc, idx) => (
                <li
                  key={idx}
                  className={`p-2 rounded-xl cursor-pointer ${
                    selectedDoc === doc
                      ? 'bg-white/70 text-gray-900 font-semibold shadow'
                      : 'hover:bg-white/40 text-gray-700'
                  }`}
                  onClick={() => setSelectedDoc(doc)}
                >
                  {doc}
                </li>
              ))}
            </ul>
            {/* Home Button inside Sidebar */}
            <button
              onClick={() => navigate('/')}
              className="mt-6 w-full bg-white/90 hover:bg-white text-gray-700 font-medium py-2 rounded-xl shadow"
            >
              Home
            </button>
          </>
        )}
      </aside>

      {/* Sidebar Toggle (when closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-4 left-4 z-10 bg-white/70 hover:bg-white text-gray-700 px-3 py-1 rounded-full shadow border"
        >
          ☰
        </button>
      )}

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-white transition-all duration-300">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`w-full flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-2xl backdrop-blur-md shadow-md text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-gray-800'
                    : 'bg-white/70 text-gray-800'
                }`}
                style={{ maxWidth: '80%', wordWrap: 'break-word' }}
              >
                <p>{msg.text}</p>
                <span className="block text-xs text-gray-500 mt-1 text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 border-t px-4 py-3 backdrop-blur-md bg-white/60"
        >
          <input type="file" id="file-upload" hidden />
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-3 py-1.5 bg-white/70 hover:bg-white text-gray-700 rounded-xl shadow text-sm border"
          >
            Upload
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about "${selectedDoc}"...`}
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/70 shadow-sm"
          />
          <button
            type="submit"
            className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-xl shadow"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default DocChat;
