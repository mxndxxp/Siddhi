
"use client";
import React, { useState, useEffect } from 'react';
import { AriesIcon, TaurusIcon, GeminiIcon, CancerIcon, LeoIcon, VirgoIcon, LibraIcon, ScorpioIcon, SagittariusIcon, CapricornIcon, AquariusIcon, PiscesIcon, OmIcon } from '@/components/icons/ZodiacIcons';

const signs = [
  { name: 'मेष', icon: AriesIcon, color: 'bg-red-500/80' }, 
  { name: 'वृषभ', icon: TaurusIcon, color: 'bg-green-600/80' }, 
  { name: 'मिथुन', icon: GeminiIcon, color: 'bg-yellow-400/80' }, 
  { name: 'कर्क', icon: CancerIcon, color: 'bg-blue-400/80' }, 
  { name: 'सिंह', icon: LeoIcon, color: 'bg-red-600/80' }, 
  { name: 'कन्या', icon: VirgoIcon, color: 'bg-green-500/80' }, 
  { name: 'तूळ', icon: LibraIcon, color: 'bg-yellow-500/80' }, 
  { name: 'वृश्चिक', icon: ScorpioIcon, color: 'bg-blue-600/80' }, 
  { name: 'धनु', icon: SagittariusIcon, color: 'bg-red-400/80' }, 
  { name: 'मकर', icon: CapricornIcon, color: 'bg-green-700/80' }, 
  { name: 'कुंभ', icon: AquariusIcon, color: 'bg-yellow-300/80' }, 
  { name: 'मीन', icon: PiscesIcon, color: 'bg-blue-500/80' }
];

export const ZodiacWheel = () => {
  const [radius, setRadius] = useState(140);
  const [dotRadius, setDotRadius] = useState(115);
  const [wheelSize, setWheelSize] = useState(320);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) { // small mobile
            setRadius(100);
            setDotRadius(85);
            setWheelSize(240);
        } else if (width < 768) { // mobile / tablet
            setRadius(120);
            setDotRadius(100);
            setWheelSize(280);
        } else { // desktop
            setRadius(140);
            setDotRadius(115);
            setWheelSize(320);
        }
    }
    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px] relative" />;
  }

  return (
    <div className="relative animate-spin-slow" style={{ width: wheelSize, height: wheelSize, animationDuration: '30s' }}>
      {/* Outer decorative ring */}
      <div className="absolute inset-0 border-4 border-yellow-400/50 rounded-full" />
      <div className="absolute inset-2 border border-dashed border-yellow-200/30 rounded-full" />
      
      {/* Main circle for icons */}
      <div className="absolute inset-8 border-2 border-primary/50 rounded-full" />

      {/* Inner decorative rings */}
      <div className="absolute inset-[33%] border border-yellow-400/30 rounded-full" />
      <div className="absolute inset-[38%] border-2 border-dotted border-yellow-300/30 rounded-full" />
      
      {/* Central Om Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <OmIcon className="w-full h-full text-yellow-300 drop-shadow-[0_0_15px_rgba(253,244,203,1)] animate-inflate" />
      </div>

      {/* House lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i}
          className="absolute top-1/2 left-0 w-full h-px bg-yellow-200/20"
          style={{ transform: `rotate(${i * 30}deg)`}}
        />
      ))}

      {/* Zodiac Icons */}
      {signs.map((sign, index) => {
        const angle = index * 30;
        const radian = angle * (Math.PI / 180);
        
        const x = Number((Math.cos(radian) * radius).toFixed(3));
        const y = Number((Math.sin(radian) * radius).toFixed(3));
        
        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <div className="flex flex-col items-center" style={{ transform: `rotate(${angle + 90}deg)` }}>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-yellow-300/30 shadow-lg ${sign.color}`}>
                  <sign.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md"/>
              </div>
              <span className="text-white text-[8px] md:text-[10px] mt-1 font-bold tracking-wider" style={{ textShadow: '0 0 5px black' }}>
                {sign.name}
              </span>
            </div>
          </div>
        );
      })}

      {/* Small decorative circles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30 + 15;
        const radian = angle * (Math.PI / 180);
        
        const x = Number((Math.cos(radian) * dotRadius).toFixed(3));
        const y = Number((Math.sin(radian) * dotRadius).toFixed(3));

        return (
            <div
                key={`dot-${i}`}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400/50 rounded-full"
                style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
            />
        )
      })}
    </div>
  );
};
