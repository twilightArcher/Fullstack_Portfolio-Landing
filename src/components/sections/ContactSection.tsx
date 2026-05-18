"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] =
    useState<"idle" | "success" | "error">("idle");

  const [errors, setErrors] = useState<Record<string, string[]>>({});

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors?.fieldErrors || {});
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 border-b border-white/10">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        {/* NAME */}
        <div>
          <input
            name="name"
            placeholder="Name *"
            value={form.name}
            onChange={updateField}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />
          {errors.name?.[0] && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name[0]}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            placeholder="Email *"
            value={form.email}
            onChange={updateField}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />
          {errors.email?.[0] && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email[0]}
            </p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={updateField}
            className="w-full p-3 bg-white/5 border border-white/10 rounded"
          />
          {errors.phone?.[0] && (
            <p className="text-red-400 text-sm mt-1">
              {errors.phone[0]}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            name="message"
            placeholder="Message *"
            value={form.message}
            onChange={updateField}
            className="w-full p-3 bg-white/5 border border-white/10 rounded h-32"
          />
          {errors.message?.[0] && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message[0]}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="px-5 py-3 bg-white text-black rounded disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send message"}
        </button>

        {/* GLOBAL STATUS */}
        {status === "success" && (
          <p className="text-green-400">
            Thank you for your message. I will get back to you within 3 work days
          </p>
        )}

        {status === "error" && Object.keys(errors).length === 0 && (
          <p className="text-red-400">
            Something went wrong
          </p>
        )}
      </form>
    </section>
  );
}