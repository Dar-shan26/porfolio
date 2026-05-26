import { Brain, Target } from "lucide-react";
import { motion } from "motion/react";
import { mindsetNotes, quotes } from "../../data/about";
import { SectionTitle } from "../components/shared/SectionTitle";
import { SectionWrapper } from "../components/shared/SectionWrapper";

export function Mindset() {
  return (
    <main className="pt-28">
      <SectionWrapper>
        <SectionTitle
          title="Mindset"
          subtitle="The personal operating system behind the portfolio: consistency, discipline, patience, and deep learning."
        />

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {mindsetNotes.map((note, index) => (
            <motion.article
              key={note.title}
              className="border border-white/10 bg-white/[0.04] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                {index % 2 === 0 ? <Brain className="h-5 w-5" /> : <Target className="h-5 w-5" />}
              </div>
              <h2 className="text-2xl font-semibold text-white">{note.title}</h2>
              <p className="mt-4 leading-8 text-slate-400">{note.description}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Future Vision</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Becoming stronger by building real things.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              The next stage is practical: ship MERN projects, deepen Java and DSA, improve architecture, and build
              systems that feel useful beyond a portfolio screen.
            </p>
          </div>

          <div className="grid gap-4">
            {["Build scalable products", "Write clearer code", "Practice DSA consistently", "Understand users better"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  className="border border-white/10 bg-slate-950/70 p-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <span className="font-mono text-sm text-cyan-200">0{index + 1}</span>
                  <p className="mt-2 text-xl font-semibold text-white">{item}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Quotes" subtitle="Short reminders for the long road." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <motion.blockquote
              key={quote.text}
              className="border border-white/10 bg-white/[0.04] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <p className="text-xl leading-9 text-white">"{quote.text}"</p>
              <footer className="mt-4 text-sm text-cyan-200">{quote.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
