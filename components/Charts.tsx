import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';

// --- Colors & Constants ---
const COLORS = {
  cyan: '#22d3ee', // Cyan-400
  blue: '#3b82f6', // Blue-500
  purple: '#a855f7', // Purple-500
  pink: '#ec4899', // Pink-500
  yellow: '#eab308', // Yellow-500
  green: '#22c55e', // Green-500
  bg: '#0f172a'
};

const PIE_COLORS_GENDER = [COLORS.blue, COLORS.cyan];
const PIE_COLORS_ETHNIC = ['#facc15', '#22d3ee', '#818cf8', '#34d399', '#f472b6']; // Yellow, Cyan, Indigo, Emerald, Pink
const PIE_COLORS_AGE = ['#fbbf24', '#38bdf8', '#818cf8', '#c084fc', '#f472b6'];

// --- Data ---
const statsOneStandard = [
  { name: '1', value: 40 },
  { name: '3', value: 30 },
  { name: '5', value: 200 },
  { name: '7', value: 120 },
  { name: '9', value: 80 },
  { name: '11', value: 40 },
];

const genderData = [
  { name: '男', value: 65 },
  { name: '女', value: 35 },
];

const ethnicData = [
  { name: '藏族', value: 60 },
  { name: '回族', value: 5 },
  { name: '彝族', value: 10 },
  { name: '汉族', value: 20 },
  { name: '土家族', value: 5 },
];

const ageData = [
  { name: '0-6', value: 10 },
  { name: '6-18', value: 20 },
  { name: '18-28', value: 30 },
  { name: '28-55', value: 35 },
  { name: '55以上', value: 5 },
];

const jobData = [
  { name: '务农', value: 85 },
  { name: '建筑工', value: 60 },
  { name: '技工', value: 70 },
  { name: '销售', value: 90 },
  { name: '职工', value: 50 },
];

const highRiskAgeData = [
  { name: '0-6', male: 100, female: 80 },
  { name: '6-18', male: 250, female: 150 },
  { name: '18-28', male: 300, female: 200 },
  { name: '28-55', male: 450, female: 350 },
  { name: '55以上', male: 100, female: 50 },
];

const radarData = [
  { subject: '橙色警情', A: 120, fullMark: 150 },
  { subject: '黄色警情', A: 98, fullMark: 150 },
  { subject: '蓝色警情', A: 86, fullMark: 150 },
  { subject: '绿色警情', A: 99, fullMark: 150 },
  { subject: '红色警情', A: 85, fullMark: 150 },
  { subject: '紫色警情', A: 65, fullMark: 150 },
];

const stabilityData = [
  { name: '康定市', v1: 1000, v2: 500 },
  { name: '泸定县', v1: 1200, v2: 600 },
  { name: '丹巴县', v1: 900, v2: 400 },
  { name: '九龙县', v1: 1500, v2: 800 },
  { name: '新龙县', v1: 2000, v2: 1200 },
  { name: '巴塘县', v1: 1700, v2: 900 },
  { name: '得荣县', v1: 800, v2: 300 },
  { name: '理塘县', v1: 1100, v2: 500 },
  { name: '甘孜县', v1: 1300, v2: 700 },
];

const floatingAgeData = [
  { name: '0-6', male: 50, female: 40, total: 90 },
  { name: '18-28', male: 120, female: 80, total: 200 },
  { name: '55以上', male: 60, female: 50, total: 110 },
];

const highRiskCategoryData = [
  { x: 10, y: 30, z: 200, name: '涉恐' },
  { x: 30, y: 50, z: 400, name: '涉稳' },
  { x: 50, y: 70, z: 100, name: '涉毒' },
  { x: 70, y: 40, z: 300, name: '重点' },
  { x: 90, y: 80, z: 150, name: '肇事' },
  { x: 20, y: 90, z: 250, name: '重大' },
];


// --- Components ---

export const BarChartStandard = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={statsOneStandard}>
      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} />
      <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
      <Tooltip 
        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
        cursor={{fill: 'rgba(255,255,255,0.05)'}}
      />
      <Bar dataKey="value" fill={COLORS.purple} radius={[2, 2, 0, 0]} barSize={10} />
      <Bar dataKey="value" fill={COLORS.cyan} radius={[2, 2, 0, 0]} barSize={10} />
    </BarChart>
  </ResponsiveContainer>
);

export const GenderPieChart = () => (
  <div className="flex h-full items-center">
    <div className="w-1/2 h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                >
                    {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS_GENDER[index % PIE_COLORS_GENDER.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>
    <div className="w-1/2 flex flex-col justify-center space-y-2 text-xs">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-300">男 Male</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-gray-300">女 Female</span>
         </div>
    </div>
  </div>
);

export const EthnicPieChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie
                data={ethnicData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={{ stroke: '#64748b', strokeWidth: 1 }}
                stroke="none"
            >
                {ethnicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS_ETHNIC[index % PIE_COLORS_ETHNIC.length]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);

export const AgePieChart = () => (
     <div className="flex h-full items-center">
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={ageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                        stroke="none"
                    >
                        {ageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={PIE_COLORS_AGE[index % PIE_COLORS_AGE.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', color: '#fff' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
         <div className="absolute top-2 left-2 text-[10px] text-white">
            <div className="flex flex-wrap gap-2 w-32">
                {ageData.map((d, i) => (
                     <div key={i} className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-sm" style={{backgroundColor: PIE_COLORS_AGE[i]}}></span>
                        <span>{d.name}</span>
                     </div>
                ))}
            </div>
         </div>
    </div>
);

export const JobBarChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={jobData} margin={{ left: 20, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={40} tick={{fill: '#94a3b8', fontSize: 10}} tickLine={false} axisLine={false} />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b'}} />
            <Bar dataKey="value" barSize={12} radius={[0, 4, 4, 0]}>
                {jobData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? COLORS.green : COLORS.blue} />
                ))}
            </Bar>
        </BarChart>
    </ResponsiveContainer>
);

export const HighRiskLineChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart data={highRiskAgeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 10}} tickLine={false} axisLine={{stroke: '#334155'}} />
            <YAxis tick={{fill: '#94a3b8', fontSize: 10}} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
            <Line type="monotone" dataKey="male" stroke={COLORS.cyan} strokeWidth={2} dot={{fill: COLORS.cyan, r: 3}} />
            <Line type="monotone" dataKey="female" stroke={COLORS.blue} strokeWidth={2} dot={{fill: COLORS.blue, r: 3}} />
        </LineChart>
    </ResponsiveContainer>
);

export const StabilityBarChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stabilityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 10}} tickLine={false} axisLine={false} interval={0} />
            <YAxis hide />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
            <Bar dataKey="v1" stackId="a" fill={COLORS.yellow} barSize={15} />
            <Bar dataKey="v2" stackId="a" fill={COLORS.cyan} radius={[4, 4, 0, 0]} barSize={15} />
        </BarChart>
    </ResponsiveContainer>
);

export const RadarAlertChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar name="Alerts" dataKey="A" stroke={COLORS.green} fill={COLORS.green} fillOpacity={0.3} />
        </RadarChart>
    </ResponsiveContainer>
);

export const FloatingAgeBarChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={floatingAgeData}>
             <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
             <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 10}} tickLine={false} />
             <YAxis hide />
             <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
             <Bar dataKey="male" fill={COLORS.purple} barSize={10} />
             <Bar dataKey="female" fill={COLORS.cyan} barSize={10} />
             <Bar dataKey="total" fill={COLORS.yellow} barSize={10} />
        </BarChart>
    </ResponsiveContainer>
);

export const ScatterBubbleChart = () => {
    // Custom visualization for the bottom right "Category Stats" since Recharts scatter is a bit heavy for this simple bubble view
    return (
        <div className="relative w-full h-full p-4">
             {/* Grid lines */}
             <div className="absolute inset-4 border-l border-b border-slate-700/50"></div>
             
             {highRiskCategoryData.map((item, idx) => {
                 const size = Math.max(30, item.z / 5);
                 return (
                     <div 
                        key={idx}
                        className="absolute flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-1000 animate-pulse"
                        style={{
                            left: `${item.x}%`,
                            top: `${item.y}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: idx % 2 === 0 ? 'rgba(34, 211, 238, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                            border: `1px solid ${idx % 2 === 0 ? COLORS.cyan : COLORS.purple}`,
                            boxShadow: `0 0 10px ${idx % 2 === 0 ? COLORS.cyan : COLORS.purple}`
                        }}
                     >
                        <span className="text-[10px] text-white font-bold">{item.name}</span>
                     </div>
                 )
             })}
             
             {/* Legend */}
             <div className="absolute bottom-2 left-4 flex gap-4 text-[10px] text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400/50 border border-cyan-400"></span> Normal</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500/50 border border-purple-500"></span> Risk</span>
             </div>
        </div>
    )
}
