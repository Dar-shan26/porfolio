import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Mindset", path: "/mindset" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl md:px-5">
        <NavLink to="/" className="group flex items-center gap-3" aria-label="Darshan Patidar home">
          <span className="grid h-10 w-10 place-items-center border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-500/10">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-white">Darshan Patidar</span>
            <span className="mt-1 text-xs text-slate-400">MERN Developer</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-slate-400 hover:text-cyan-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-3 text-sm ${isActive ? "bg-cyan-300/10 text-white" : "text-slate-300"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  );
}
