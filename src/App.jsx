import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Contact from "./pages/Contact.jsx";
import Programs from "./pages/Programs.jsx";
import Pricing from "./pages/Pricing.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";

// Simple Loader Component
function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--color-secondary)]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning loader */}
        <div className="w-12 h-12 border-4 border-[color:var(--color-primary-light)] border-t-[color:var(--color-primary)] rounded-full animate-spin"></div>

        {/* Loading text */}
        <div className="text-[color:var(--color-accent)] font-zain text-lg">
          Loading...
        </div>

        {/* Loading dots animation */}
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
