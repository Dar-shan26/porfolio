import type { ReactNode } from "react";
import { ExternalLink, Github, Layers3 } from "lucide-react";
import { motion } from "motion/react";
import { projectGroups } from "../../data/projects";
import { SectionTitle } from "../components/shared/SectionTitle";
import { SectionWrapper } from "../components/shared/SectionWrapper";
import { StatusBadge } from "../components/shared/StatusBadge";

function ProjectAction({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  const isPlaceholder = href.startsWith("ADD_") || href.endsWith("_HERE");
  const isReady = href && href !== "#" && !isPlaceholder;

  if (!isReady) {
    return (
      <span className="inline-flex max-w-full cursor-not-allowed items-center gap-2 break-all border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-500">
        {icon}
        {isPlaceholder ? href : label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

export function Projects() {
  return (
    <main className="pt-28">
      <SectionWrapper>
        <SectionTitle
          title="Projects"
          subtitle="A clean project system with honest status labels for current work and planned MERN concepts."
        />

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {["In Progress", "Planned", "Coming Soon"].map((status) => (
            <span key={status} className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              {status}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {projectGroups.map((group, groupIndex) => (
        <SectionWrapper key={group.title} className={groupIndex % 2 === 1 ? "bg-white/[0.02]" : ""}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  <Layers3 className="h-4 w-4" />
                  {group.projects.length} Project{group.projects.length > 1 ? "s" : ""}
                </div>
                <h2 className="text-3xl font-semibold text-white md:text-5xl">{group.title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">{group.description}</p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {group.projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="group relative overflow-hidden border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-200">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <ProjectAction href={project.githubUrl} label="GitHub" icon={<Github className="h-4 w-4" />} />
                    <ProjectAction
                      href={project.liveUrl}
                      label={project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
                      icon={<ExternalLink className="h-4 w-4" />}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}
    </main>
  );
}
