"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function Card({ icon: Icon, title, children }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,240,255,0.2)]"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-purple rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </motion.div>
  );
}
