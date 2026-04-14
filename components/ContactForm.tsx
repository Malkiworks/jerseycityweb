"use client";

import { FormEvent } from "react";
import { SITE } from "@/lib/site";

export function ContactForm() {
  function mailtoSubmit(data: FormData) {
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project inquiry: ${type}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    mailtoSubmit(data);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-light text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-light text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-foreground">
          Project type
        </label>
        <select
          id="type"
          name="type"
          required
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-light text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2"
        >
          <option value="">Select…</option>
          <option value="New website">New website</option>
          <option value="Redesign">Redesign</option>
          <option value="Web app">Web app</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-y rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-light text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Send via email
        </button>
        <p className="text-xs font-light text-muted">
          Opens your email app with your details prefilled.
        </p>
      </div>
    </form>
  );
}
