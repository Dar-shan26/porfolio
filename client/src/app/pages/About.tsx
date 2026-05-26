import { motion } from "motion/react";
import { journey, profile, values } from "../../data/about";
import { skillCategories } from "../../data/skills";
import { SectionTitle } from "../components/shared/SectionTitle";
import { SectionWrapper } from "../components/shared/SectionWrapper";

export function About() {
  return (
    <main className="pt-28">
      <SectionWrapper>
        <SectionTitle
          title="About Darshan"
          subtitle="A focused developer profile built around education, product-minded learning, and steady improvement."
        />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative overflow-hidden border border-white/10 bg-slate-950/70 p-6"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="grid aspect-square place-items-center border border-cyan-300/20 bg-cyan-300/5">
              <div className="text-center">
                <div className="mx-auto grid h-36 w-36 place-items-center border border-cyan-300/40 bg-slate-950 text-5xl font-semibold text-white shadow-2xl shadow-cyan-500/20">
                  DP
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.26em] text-cyan-200">Developer Portfolio</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border border-white/10 bg-white/[0.04] p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{profile.location}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{profile.headline}</h2>
            <div className="mt-6 grid gap-4 text-base leading-8 text-slate-300">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/[0.02]">
        <SectionTitle title="Education & Growth" subtitle="A route from academic foundation to real-world software practice." />
        <div className="mx-auto grid max-w-6xl gap-5">
          {journey.map((item, index) => (
            <motion.article
              key={item.title}
              className="grid gap-5 border border-white/10 bg-slate-950/60 p-5 md:grid-cols-[120px_1fr]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span className="font-mono text-cyan-200">{item.year}</span>
              <div>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 leading-7 text-slate-400">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Skills" subtitle="Editable skill groups that keep the portfolio easy to update." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="border border-white/10 bg-white/[0.04] p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/[0.02]">
        <SectionTitle title="Values" subtitle="The working principles behind the code." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              className="border border-white/10 bg-slate-950/60 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-white">{value.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
