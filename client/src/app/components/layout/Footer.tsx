import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { socialLinks } from "../../../data/socialLinks";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Mindset", path: "/mindset" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Darshan Patidar</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Building scalable MERN & Java applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-slate-400 transition hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-500">
          Built with React, Vite, Node.js, Express, and Nodemailer.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
              style={{ boxShadow: `0 0 24px ${link.color}12` }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{link.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
