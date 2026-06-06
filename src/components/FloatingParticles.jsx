import { useMemo } from "react";

export default function FloatingParticles({ density = 34 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: density }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        delay: `${Math.random() * 8}s`,
        duration: `${14 + Math.random() * 12}s`,
        opacity: 0.18 + Math.random() * 0.28,
      })),
    [density]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
