"use client";

export default function AnimatedMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="animated-mesh"></div>
      <style jsx>{`
        .animated-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
          filter: blur(60px);
          animation: meshMove 20s ease-in-out infinite;
        }

        @keyframes meshMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10%, -10%) scale(1.1);
          }
          50% {
            transform: translate(-10%, 10%) scale(0.9);
          }
          75% {
            transform: translate(10%, 5%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
