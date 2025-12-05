import React from 'react';

export const MapViz = () => {
  // Simplified SVG representation of the region shown in the image (looks like Ganzi prefecture layout)
  const hotspots = [
    { x: 45, y: 30, name: "色达县", count: 13 },
    { x: 30, y: 45, name: "石渠县", count: 15 },
    { x: 40, y: 55, name: "德格县", count: 13 },
    { x: 55, y: 50, name: "甘孜县", count: 15 },
    { x: 65, y: 40, name: "炉霍县", count: 13 },
    { x: 80, y: 35, name: "丹巴县", count: 13 },
    { x: 85, y: 55, name: "康定市", count: 15 },
    { x: 75, y: 65, name: "雅江县", count: 13 },
    { x: 65, y: 80, name: "理塘县", count: 15 },
    { x: 50, y: 70, name: "白玉县", count: 13 },
    { x: 80, y: 85, name: "九龙县", count: 15 },
    { x: 65, y: 90, name: "乡城县", count: 13 },
    { x: 60, y: 95, name: "得荣县", count: 15 },
    { x: 70, y: 95, name: "稻城县", count: 13 },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]"></div>
      
      <svg viewBox="0 0 100 100" className="w-full h-full max-w-[500px] max-h-[400px] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
         {/* Abstract geometric map shape */}
         <path 
            d="M30,20 L60,15 L90,30 L95,60 L80,90 L50,95 L20,80 L10,50 Z" 
            fill="rgba(30, 41, 59, 0.8)" 
            stroke="#0ea5e9" 
            strokeWidth="0.5"
            className="opacity-60"
         />
         
         {/* Connecting Lines */}
         <g stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.2">
             {hotspots.map((h, i) => (
                 hotspots.map((h2, j) => {
                     if (i < j && Math.abs(h.x - h2.x) + Math.abs(h.y - h2.y) < 30) {
                         return <line key={`${i}-${j}`} x1={h.x} y1={h.y} x2={h2.x} y2={h2.y} />
                     }
                     return null;
                 })
             ))}
         </g>

         {/* Hotspots */}
         {hotspots.map((spot, idx) => (
            <g key={idx} className="cursor-pointer group">
                <circle cx={spot.x} cy={spot.y} r="3" fill="rgba(6, 182, 212, 0.2)" className="animate-ping origin-center" style={{animationDuration: `${2 + Math.random()}s`}} />
                <circle cx={spot.x} cy={spot.y} r="1.5" fill={spot.count > 14 ? "#f43f5e" : "#22d3ee"} />
                
                {/* Tooltip / Label */}
                <g transform={`translate(${spot.x}, ${spot.y - 4})`}>
                    <rect x="-6" y="-3" width="12" height="3" fill="rgba(15, 23, 42, 0.8)" rx="0.5" />
                    <text x="0" y="-0.5" fontSize="2" fill="white" textAnchor="middle" alignmentBaseline="middle">{spot.name}</text>
                    
                    {/* Badge */}
                    <circle cx="5" cy="-2" r="1.2" fill={spot.count > 14 ? "#be123c" : "#0ea5e9"} />
                    <text x="5" y="-1.8" fontSize="1.2" fill="white" textAnchor="middle" alignmentBaseline="middle">{spot.count}</text>
                </g>
            </g>
         ))}
      </svg>
      
      {/* Legend overlay */}
      <div className="absolute top-2 left-2 flex flex-col gap-1 bg-slate-900/80 p-2 rounded border border-slate-700">
         <div className="flex items-center gap-2 text-xs text-gray-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Normal</span>
         </div>
         <div className="flex items-center gap-2 text-xs text-gray-300">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>High Alert</span>
         </div>
      </div>
    </div>
  );
};