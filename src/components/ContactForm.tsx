"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMessage(json.error ?? "Unbekannter Fehler.");
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
      }
    } catch {
      setErrorMessage("Verbindungsfehler. Bitte versuche es später erneut.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#A0522D] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 mt-10">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-stone-400 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Dein Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-stone-400 mb-2">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="deine@email.de"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-stone-400 mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Was hast du auf dem Herzen?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-8 py-3 bg-[#A0522D] text-white text-sm uppercase tracking-wider hover:bg-[#8B4513] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-stone-600"
            >
              Nachricht gesendet. Ich melde mich bald!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-600"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
