import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Loader2, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { socialLinks } from "../../data/socialLinks";
import { sendContactMessage } from "../../services/contactApi";
import { SectionTitle } from "../components/shared/SectionTitle";
import { SectionWrapper } from "../components/shared/SectionWrapper";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const data = await sendContactMessage(form);
      setStatus("success");
      setFeedback(data.message || "Your message has been sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="pt-28">
      <SectionWrapper>
        <SectionTitle
          title="Contact"
          subtitle="Let's build something powerful together. Send a message and the backend will forward it by email."
        />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            className="border border-white/10 bg-slate-950/70 p-6 md:p-8"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid h-14 w-14 place-items-center border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white">Professional Communication</h2>
            <p className="mt-4 leading-8 text-slate-400">
              The form posts to the Express API at <span className="font-mono text-cyan-200">/api/contact</span>.
              Configure Nodemailer in the backend environment file to receive messages directly.
            </p>

            <div className="mt-8 grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                  style={{ boxShadow: `0 0 28px ${link.color}10` }}
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-cyan-200">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-white/[0.04] p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                Full Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm text-slate-300">
              Subject
              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                placeholder="Project discussion"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={7}
                className="resize-none border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                placeholder="Tell me what you want to build..."
              />
            </label>

            {feedback ? (
              <div
                className={`mt-5 border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : "border-rose-400/30 bg-rose-400/10 text-rose-200"
                }`}
              >
                {feedback}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </SectionWrapper>
    </main>
  );
}
