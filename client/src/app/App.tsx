import type { ReactNode } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Mindset } from "./pages/Mindset";
import { Projects } from "./pages/Projects";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05050f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <RouteTransition>
                <Home />
              </RouteTransition>
            }
          />
          <Route
            path="/about"
            element={
              <RouteTransition>
                <About />
              </RouteTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <RouteTransition>
                <Projects />
              </RouteTransition>
            }
          />
          <Route
            path="/mindset"
            element={
              <RouteTransition>
                <Mindset />
              </RouteTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteTransition>
                <Contact />
              </RouteTransition>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
