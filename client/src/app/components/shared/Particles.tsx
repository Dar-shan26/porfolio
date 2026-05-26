import { useMemo } from "react";
import { motion } from "motion/react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
};

const COLORS = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b"];

export function Particles({ density = 52, className = "" }: { density?: number; className?: string }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: density }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 16 + 14,
        delay: Math.random() * -18,
        opacity: Math.random() * 0.45 + 0.12,
        color: COLORS[id % COLORS.length],
      })),
    [density],
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 18px ${particle.color}`,
          }}
          animate={{
            y: [0, -90, 0],
            x: [0, particle.id % 2 === 0 ? 22 : -22, 0],
            opacity: [particle.opacity, particle.opacity * 0.25, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
