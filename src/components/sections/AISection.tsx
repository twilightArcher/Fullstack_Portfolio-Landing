"use client";

import { useState } from "react";

export default function AISection() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {
    if (!input.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      setResult(data.result);
    } catch (e) {
      setResult("Error generating response");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai" className="py-20 border-b border-white/10">
      <h2 className="text-2xl font-semibold mb-6">
        AI-assistant
      </h2>

      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your project idea..."
          className="w-full p-4 bg-white/5 border border-white/10 rounded-md text-white"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-5 py-3 bg-white text-black rounded-md disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-md text-white/70 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </section>
  );
}