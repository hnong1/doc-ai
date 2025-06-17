// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* pages – yours */
import Home      from "./pages/Home";
import Login     from "./pages/Login";
import Signup    from "./pages/Signup";
import Support   from "./pages/Support";
import Translate from "./pages/Translate";
import Settings  from "./pages/Settings";

/* page – your friend’s */
import DocChat   from "./pages/DocChat";

/* optional: only if you add one later */
// import Chatbot from "./pages/Chatbot";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* public / main */}
        <Route path="/"          element={<Home />}      />
        <Route path="/translate" element={<Translate />} />
        <Route path="/support"   element={<Support />}   />
        <Route path="/docchat"   element={<DocChat />}   />

        {/* authentication */}
        <Route path="/login"     element={<Login />}     />
        <Route path="/signup"    element={<Signup />}    />

        {/* user settings */}
        <Route path="/settings"  element={<Settings />}  />

        {/* optional chatbot route */}
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
      </Routes>
    </Router>
  );
}
