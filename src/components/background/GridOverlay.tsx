"use client";

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="grid-overlay"></div>
      <style jsx>{`
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center bottom;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
