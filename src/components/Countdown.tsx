import React, { useState, useEffect } from 'react';

interface CountdownProps {
  onComplete: () => void;
}

export default function Countdown({ onComplete }: CountdownProps) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-600 to-green-700">
      <div className="text-9xl font-bold text-white animate-bounce">
        {count}
      </div>
    </div>
  );
}