"use client";

import { motion } from "framer-motion";

export default function GlowOrbs() {
  const orbs = [
    { id: 1, color: "cyan", x: "20%", y: "30%", scale: 1.2 },
    { id: 2, color: "purple", x: "70%", y: "50%", scale: 1 },
    { id: 3, color: "pink", x: "50%", y: "70%", scale: 1.1 },
  ];

  const colorMap = {
    cyan: "rgba(0, 240, 255, 0.3)",
    purple: "rgba(168, 85, 247, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${colorMap[orb.color as keyof typeof colorMap]}, transparent 70%)`,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [orb.scale, orb.scale * 1.2, orb.scale],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
