import { motion } from "motion/react";

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Portfolio System</p>
      <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
      {subtitle ? <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}
