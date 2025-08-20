"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Star } from 'lucide-react';

const StarComponent = ({ style }: { style: React.CSSProperties }) => {
  return <div className="star" style={style}></div>;
};

const FloatingSymbol = ({ symbol, style } : {symbol: React.ReactNode, style: React.CSSProperties}) => {
    return <div className="floating-symbol" style={style}>{symbol}</div>
}

export const TwinklingStars = () => {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [symbols, setSymbols] = useState<{ id: number; symbol: React.ReactNode; style: React.CSSProperties }[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (!isClient) return;

    const generateStars = () => {
      const newStars = Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${Math.random() * 3 + 2}s`
        };
        return { id: i, style };
      });
      setStars(newStars);
    };

    const generateSymbols = () => {
        const symbolTypes = [<Moon size={30}/>, <Star size={25}/>, <span>✦</span>, <span>✧</span>];
        const newSymbols = Array.from({ length: 10 }).map((_, i) => {
            const style = {
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 5}s`,
                fontSize: `${Math.random() * 10 + 20}px`
            };
            return { id: i, symbol: symbolTypes[i % symbolTypes.length], style };
      });
      setSymbols(newSymbols);
    }

    generateStars();
    generateSymbols();
    
    const handleResize = () => {
        generateStars();
        generateSymbols();
    }
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {stars.map(star => (
        <StarComponent key={star.id} style={star.style} />
      ))}
      {symbols.map(symbol => (
        <FloatingSymbol key={symbol.id} symbol={symbol.symbol} style={symbol.style} />
      ))}
    </div>
  );
};
