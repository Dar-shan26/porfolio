import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { journey, profile } from "../../data/about";
import { featuredProjects } from "../../data/projects";
import { techStack } from "../../data/skills";
import { GlowOrbs } from "../components/shared/GlowOrbs";
import { Particles } from "../components/shared/Particles";
import { SectionTitle } from "../components/shared/SectionTitle";
import { SectionWrapper } from "../components/shared/SectionWrapper";
import { StatusBadge } from "../components/shared/StatusBadge";

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-24">
        <GlowOrbs />
        <Particles />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Crafting Full-Stack Web Experiences
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white md:text-7xl lg:text-8xl">
              Darshan Patidar
            </h1>
            <div className="mt-6 min-h-12 overflow-hidden text-2xl font-semibold text-cyan-200 md:text-4xl">
              <motion.p
                key={profile.roles[roleIndex]}
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -32, opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                {profile.roles[roleIndex]}
              </motion.p>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.headline}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-3 bg-cyan-300 px-6 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Projects
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="relative overflow-hidden border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-slate-500">portfolio.engine</span>
              </div>
              <div className="grid gap-4">
                {[
                  ["const focus", "'MERN + Java + DSA'"],
                  ["build.mode", "'consistent practice'"],
                  ["project.goal", "'real workflows'"],
                  ["mindset", "'learn, ship, improve'"],
                ].map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-4 font-mono text-sm"
                    animate={{ x: [0, index % 2 === 0 ? 8 : -8, 0] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-slate-400">{key}</span>
                    <span className="text-cyan-200">{value}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-white/[0.04] p-4 text-center"
                  >
                    <p className="text-lg font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <SectionTitle
          title="Technology Stack"
          subtitle="A focused toolkit for building practical full-stack applications."
        />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
              style={{ boxShadow: `0 0 40px ${tech.accent}12` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center border border-white/10 bg-slate-950/70 font-mono text-sm text-white">
                  {tech.short}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-white">
                {tech.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/[0.02]">
        <SectionTitle
          title="Learning Journey"
          subtitle="A practical growth path from fundamentals to full-stack product thinking."
        />
        <div className="mx-auto max-w-5xl">
          {journey.map((item, index) => (
            <motion.div
              key={item.year}
              className="grid gap-5 border-l border-cyan-300/20 pb-10 pl-6 md:grid-cols-[120px_1fr]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <span className="font-mono text-sm text-cyan-200">
                {item.year}
              </span>
              <div className="relative border border-white/10 bg-slate-950/60 p-5">
                <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/60" />
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title="Featured Projects"
          subtitle="Current and planned builds organized for a growing MERN portfolio."
        />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <Link
              key={project.id}
              to="/projects"
              className="group border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-200">{project.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
                <StatusBadge status={project.status} />
              </div>
              <p className="leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
