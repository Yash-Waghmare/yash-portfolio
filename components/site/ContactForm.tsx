"use client";

import { Icon } from "@/components/site/Icon";
import { useState } from "react";

const SUBJECTS = [
  "Enterprise Modernization",
  "Mobile App Development",
  "Cloud & AI Infrastructure",
  "Mentorship & Workshops",
  "Freelance Product Engineering",
  "General Conversation",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          payload.error ??
            "Something went wrong. Please email me directly instead.",
        );
        return;
      }

      setStatus("sent");
      setMessage("Message routed successfully. Expect a response in 24–48 hours.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or use email.");
    }
  }

  const fieldClass =
    "h-11 w-full rounded-lg bg-surface-container-low px-4 text-base text-on-surface outline-none transition-all placeholder:text-muted focus:bg-surface-container-lowest";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {message ? (
        <p
          className={`flex items-center gap-2 rounded-lg p-2 font-mono text-[13px] ${
            status === "error"
              ? "bg-error/10 text-error"
              : "bg-surface-container text-on-surface"
          }`}
          role="status"
        >
          <Icon
            name={status === "error" ? "error" : "check_circle"}
            className={`text-[18px] ${status === "error" ? "text-error" : "text-success"}`}
          />
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="flex items-center justify-between text-sm font-semibold text-on-surface">
          <span>Full Name</span>
          <span className="font-mono text-[11px] font-normal text-muted">required</span>
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="e.g. Alex Morgan"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="flex items-center justify-between text-sm font-semibold text-on-surface">
          <span>Email Address</span>
          <span className="font-mono text-[11px] font-normal text-muted">required</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="alex@enterprise.com"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="flex items-center justify-between text-sm font-semibold text-on-surface">
          <span>Subject Area</span>
          <span className="font-mono text-[11px] font-normal text-muted">select topic</span>
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            defaultValue={SUBJECTS[0]}
            className={`${fieldClass} cursor-pointer appearance-none pr-10`}
          >
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="pointer-events-none absolute top-2.5 right-3 text-[20px] text-muted"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="flex items-center justify-between text-sm font-semibold text-on-surface">
          <span>Message</span>
          <span className="font-mono text-[11px] font-normal text-muted">markdown allowed</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Outline project timeline, technology specifications, or high-level goals..."
          className="w-full resize-y rounded-lg bg-surface-container-low p-4 text-base text-on-surface outline-none transition-all placeholder:text-muted focus:bg-surface-container-lowest"
        />
      </div>

      <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-container px-8 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary disabled:opacity-60"
        >
          <Icon name="send" className="text-[18px]" />
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <Icon name="schedule" className="text-[18px] text-success" />
          Usually responds within 24–48 hours.
        </p>
      </div>
    </form>
  );
}
