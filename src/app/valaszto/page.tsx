"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Factory } from "lucide-react";
import Image from "next/image";

export default function ValasztoPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("mobilker_auth") !== "varikovacs") {
      router.push("/");
    }
  }, [router]);

  const cards = [
    {
      title: "Autó Vizsgáztatás",
      description: "Műszaki vizsgáztatás, elővizsgálat, adminisztráció",
      icon: Car,
      path: "/auto-vizsgaztatas",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Vákuumformázás",
      description: "CNC precíziós vákuumszívás és megmunkálás",
      icon: Factory,
      path: "/vakuumformazas",
      gradient: "from-primary-purple to-primary-pink",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <Image
          src="https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/mobilker-logo-removebg-preview.png"
          alt="Mobilker Logo"
          width={250}
          height={250}
          className="mx-auto mb-6"
          priority
        />
        <p className="text-gray-400 text-lg">Válassz szolgáltatást</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={card.path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => router.push(card.path)}
            className="glass rounded-2xl p-10 cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,240,255,0.3)] group"
          >
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <card.icon className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
              {card.title}
            </h2>

            <p className="text-gray-400 leading-relaxed">{card.description}</p>

            <div className="mt-6 flex items-center text-primary-cyan group-hover:translate-x-2 transition-transform duration-300">
              <span className="font-semibold">Tovább</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
