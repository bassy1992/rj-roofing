import React from 'react';

interface CompanyLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'badge';
  showContactInfo?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = 'h-12',
  variant = 'compact',
  showContactInfo = false,
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 border border-amber-500/30 shadow-md group overflow-hidden">
          {/* Saw blade teeth outer ring */}
          <svg className="w-10 h-10 text-amber-500 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5 L55 18 L65 10 L67 25 L78 20 L76 35 L88 33 L82 46 L95 48 L86 59 L98 65 L86 73 L94 82 L80 86 L85 96 L71 96 L72 100 L50 90 L28 100 L29 96 L15 96 L20 86 L6 82 L14 73 L2 65 L14 59 L5 48 L18 46 L12 33 L24 35 L22 20 L33 25 L35 10 L45 18 Z" />
            <circle cx="50" cy="50" r="34" fill="#0F172A" />
          </svg>
          {/* Roof gable & RJS inner logo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Red roof gable */}
            <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12l9-9 9 9" />
              <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" fill="#DC2626" fillOpacity="0.8" />
              <rect x="9" y="13" width="6" height="5" fill="#FFFFFF" rx="0.5" />
            </svg>
            <span className="text-[9px] font-black tracking-widest text-amber-400 font-sans -mt-1">RJS</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase font-sans">
              RJS <span className="text-amber-500">ROOFING</span>
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-wider text-red-600 uppercase">
            & Construction Ltd
          </span>
        </div>
      </div>
    );
  }

  // Full / Badge view - High fidelity graphic matching the official logo card
  return (
    <div className={`relative flex flex-col items-center text-center p-6 bg-slate-950 text-white rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden ${className}`}>
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Logo Graphic SVG */}
      <div className="relative z-10 w-full max-w-xs aspect-square flex items-center justify-center my-2">
        <svg className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Saw Blade Arch Header */}
          <path d="M 60,180 A 140,140 0 0,1 340,180" stroke="url(#goldGrad)" strokeWidth="18" fill="none" strokeDasharray="18 10" filter="url(#shadow)" />
          <path d="M 75,180 A 125,125 0 0,1 325,180" stroke="#0F172A" strokeWidth="8" fill="none" />

          {/* Cross Hammers & Structural Trusses behind */}
          <g stroke="url(#goldGrad)" strokeWidth="8" strokeLinecap="round">
            <line x1="130" y1="180" x2="270" y2="90" />
            <line x1="270" y1="180" x2="130" y2="90" />
          </g>

          {/* Golden Badge Text "R J S" */}
          <text x="200" y="115" textAnchor="middle" fill="url(#goldGrad)" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="6">
            R J S
          </text>

          {/* Central Red Roof Gable Structure */}
          <path d="M 80,180 L 200,90 L 320,180 L 290,180 L 200,112 L 110,180 Z" fill="url(#redGrad)" filter="url(#shadow)" />
          <path d="M 110,195 L 200,128 L 290,195 L 275,200 L 200,145 L 125,200 Z" fill="url(#goldGrad)" />

          {/* House Silhouette & 4-Pane Window */}
          <rect x="175" y="150" width="50" height="40" fill="#020617" stroke="url(#goldGrad)" strokeWidth="3" />
          <rect x="183" y="157" width="14" height="12" fill="#FFFFFF" rx="1" />
          <rect x="203" y="157" width="14" height="12" fill="#FFFFFF" rx="1" />
          <rect x="183" y="173" width="14" height="12" fill="#FFFFFF" rx="1" />
          <rect x="203" y="173" width="14" height="12" fill="#FFFFFF" rx="1" />

          {/* Lower Red Base Arc */}
          <path d="M 50,205 Q 200,240 350,205 L 340,225 Q 200,255 60,225 Z" fill="url(#redGrad)" />
          <path d="M 60,225 Q 200,255 340,225" stroke="url(#goldGrad)" strokeWidth="4" fill="none" />

          {/* Text: ROOFING & CONSTRUCTION */}
          <text x="200" y="275" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            <tspan fill="url(#goldGrad)">ROOFING </tspan>
            <tspan fill="#EF4444">&amp; </tspan>
            <tspan fill="url(#goldGrad)">CONSTRUCTION</tspan>
          </text>

          {/* Text: LIMITED */}
          <line x1="60" y1="300" x2="130" y2="300" stroke="url(#goldGrad)" strokeWidth="3" />
          <text x="200" y="307" textAnchor="middle" fill="#EF4444" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="4">
            LIMITED
          </text>
          <line x1="270" y1="300" x2="340" y2="300" stroke="url(#goldGrad)" strokeWidth="3" />
        </svg>
      </div>

      {showContactInfo && (
        <div className="relative z-10 w-full pt-3 mt-2 border-t border-slate-800 flex flex-col items-center gap-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span className="text-amber-400 font-bold">Email:</span> rjsroofingcon43@gmail.com
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-slate-300 font-semibold">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              📞 057 812 7702
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">054 725 2937</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">020 837 6082</span>
          </div>
        </div>
      )}
    </div>
  );
};
