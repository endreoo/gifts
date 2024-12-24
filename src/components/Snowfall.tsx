import React from 'react';

export default function Snowfall() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}