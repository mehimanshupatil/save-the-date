import React from 'react';
import { Sparkles } from 'lucide-react';

export const DecorativeSparkles = () => {
  return (
    <>
      <Sparkles className="absolute top-4 left-4 w-5 h-5 text-amber-400 animate-spin-slow opacity-75" />
      <Sparkles className="absolute bottom-4 right-4 w-5 h-5 text-amber-400 animate-spin-slow opacity-75" />
      <Sparkles className="absolute top-1/2 right-8 w-4 h-4 text-amber-400 animate-spin-slow opacity-50" />
      <Sparkles className="absolute top-1/2 left-8 w-4 h-4 text-amber-400 animate-spin-slow opacity-50" />
      <Sparkles className="absolute top-1/3 left-1/4 w-3 h-3 text-amber-400 animate-spin-slow opacity-30" />
      <Sparkles className="absolute bottom-1/3 right-1/4 w-3 h-3 text-amber-400 animate-spin-slow opacity-30" />
    </>
  );
};