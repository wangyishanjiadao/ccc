import React from 'react';

interface PanelFrameProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const PanelFrame: React.FC<PanelFrameProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`relative flex flex-col bg-slate-900/50 border border-blue-900/30 backdrop-blur-sm p-4 ${className}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>

      {/* Header */}
      {title && (
        <div className="mb-3 flex items-center justify-center relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <h3 className="text-cyan-100 font-semibold tracking-wider text-sm md:text-base z-10 px-4 py-1 bg-blue-950/30 rounded-t">
            {title}
          </h3>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-h-0 relative z-10">
        {children}
      </div>
    </div>
  );
};