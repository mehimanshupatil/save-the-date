import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-02-06T00:00:00');

    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2 animate-fade-in">
      <div className="flex items-center gap-2 text-rose-500">
        <Clock className="w-5 h-5" />
        <span className="font-light">Time until we say "I do"</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-rose-50 rounded-lg p-2 min-w-[60px]">
              <span className="text-xl font-serif text-rose-600">{value}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1 capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};