"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      sessionStorage.setItem("admin_token", password);
      router.push("/admin/dashboard");
    } else {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-md w-full mx-4">
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          Admin Panel
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Mobilker CMS
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Admin jelszó"
            autoFocus
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 px-6 py-3 text-sm font-semibold text-white transition-colors"
          >
            {loading ? "Ellenőrzés..." : "Belépés"}
          </button>

          {error && (
            <p className="text-red-400 text-sm text-center">
              Hibás jelszó
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
