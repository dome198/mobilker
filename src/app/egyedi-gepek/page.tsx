"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpFromLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/useContent";

export default function EgyediGepekPage() {
  const router = useRouter();
  const { c } = useContent();

  useEffect(() => {
    if (localStorage.getItem("mobilker_auth") !== "varikovacs") {
      router.push("/");
    }
  }, [router]);

  const machines = [
    {
      title: "Aknaperem Emelő",
      description: "MOBIL-E -4 — Szerelőaknára telepíthető hidraulikus emelő, max 4000 kg",
      icon: ArrowUpFromLine,
      path: "/aknaperem-emelo",
      image: "/aknaperem-emelo.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">

      <Link href="/valaszto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-8 left-8 inline-flex items-center text-[#00d4ff] hover:text-white transition-colors cursor-pointer z-50 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Vissza</span>
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <Image
          src={c("global.logo_url")}
          alt="Mobilker Logo"
          width={200}
          height={200}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-4xl font-bold text-white mb-3">
          Egyedi Gépek & Eszközök
        </h1>
        <p className="text-gray-400 text-lg">Válassz terméket</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
        {machines.map((machine, index) => (
          <motion.div
            key={machine.path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => router.push(machine.path)}
            className="glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,240,255,0.3)] group"
          >
            {machine.image && (
              <div className="h-48 overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            )}

            <div className="p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <machine.icon className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                {machine.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">{machine.description}</p>

              <div className="mt-4 flex items-center text-primary-cyan group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-semibold">Részletek</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
