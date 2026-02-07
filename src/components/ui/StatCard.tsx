"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-10 text-center hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-300"
    >
      <div className="text-6xl font-bold gradient-text mb-4">{number}</div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}
