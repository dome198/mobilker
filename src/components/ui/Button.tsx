"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = ""
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink text-white hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]",
    secondary: "glass text-white hover:bg-white/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
