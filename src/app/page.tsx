"use client";

import { useState, useEffect } from "react";

const PASS = "varikovacs";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mobilker_auth") === PASS) setUnlocked(true);
  }, []);

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input === PASS) {
              localStorage.setItem("mobilker_auth", PASS);
              setUnlocked(true);
            } else {
              setError(true);
            }
          }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-2xl font-bold text-white">Mobilker</div>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Jelszó"
            autoFocus
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white text-center outline-none focus:border-white/30 w-64"
          />
          <button
            type="submit"
            className="rounded-lg bg-white/10 px-6 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
          >
            Belépés
          </button>
          {error && <p className="text-red-400 text-sm">Hibás jelszó</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <h1 className="text-3xl font-bold text-white">Mobilker</h1>
    </div>
  );
}
