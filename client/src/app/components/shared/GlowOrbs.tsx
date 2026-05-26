import { motion } from "motion/react";

export function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(115deg, rgba(99,102,241,0.18), transparent 31%, rgba(6,182,212,0.12) 55%, transparent 76%, rgba(16,185,129,0.12))",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 82%)",
        }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-44 opacity-45"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.22), rgba(6,182,212,0.2), transparent)",
          filter: "blur(28px)",
        }}
        animate={{ x: ["-35%", "35%", "-35%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
