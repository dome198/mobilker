"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContent } from "@/lib/useContent";

const PASS = "varikovacs";

export default function Home() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { c } = useContent();

  useEffect(() => {
    if (localStorage.getItem("mobilker_auth") === PASS) {
      router.push("/valaszto");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      localStorage.setItem("mobilker_auth", PASS);
      router.push("/valaszto");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="glass rounded-2xl p-12 max-w-md w-full mx-4">
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src={c("global.logo_url")}
              alt="Mobilker Logo"
              width={200}
              height={200}
              className="mx-auto mb-4"
              priority
            />
            <p className="text-gray-400 text-sm">{c("global.tagline")}</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="Jelszó"
                autoFocus
                className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white text-center outline-none transition-all duration-300 ${
                  error
                    ? "border-red-500 glow-pink"
                    : "border-white/10 focus:border-primary-cyan focus:glow-cyan"
                }`}
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
            >
              Belépés
            </motion.button>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                Hibás jelszó
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
