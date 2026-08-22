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
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo.jpeg"
          alt="RJS Roofing & Construction Ltd"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }

  // Full / Badge view
  return (
    <div className={`relative flex flex-col items-center text-center p-6 bg-slate-950 text-white rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center my-2">
        <img
          src="/logo.jpeg"
          alt="RJS Roofing & Construction Ltd"
          className="w-48 h-48 object-contain drop-shadow-2xl"
        />
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
