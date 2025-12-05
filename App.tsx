import React from 'react';
import { PanelFrame } from './components/PanelFrame';
import { 
  BarChartStandard, GenderPieChart, EthnicPieChart, AgePieChart, 
  JobBarChart, HighRiskLineChart, StabilityBarChart, RadarAlertChart,
  FloatingAgeBarChart, ScatterBubbleChart
} from './components/Charts';
import { MapViz } from './components/MapViz';
import { Shield, Users, Activity, BarChart2, Bell, FileText, ArrowLeft, Radio, Search } from 'lucide-react';

// --- Header Components ---
const NavButton = ({ text, icon: Icon, active = false }: { text: string; icon: any; active?: boolean }) => (
  <button className={`
    flex items-center gap-2 px-4 py-2 skew-x-[-20deg] border-2 transition-all duration-300
    ${active 
      ? 'border-cyan-400 bg-cyan-900/40 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
      : 'border-blue-900/50 bg-slate-900/50 text-blue-300 hover:border-cyan-700 hover:text-cyan-200'
    }
  `}>
    <div className="skew-x-[20deg] flex items-center gap-2 text-sm font-bold">
      <Icon size={16} />
      <span>{text}</span>
    </div>
  </button>
);

// --- Stats Components ---
const StatCard = ({ title, value, sub, trend }: { title: string; value: string; sub: string; trend: 'up' | 'down' }) => (
  <div className="bg-slate-800/40 p-3 rounded border-l-2 border-cyan-500 flex flex-col items-center justify-center">
    <span className="text-gray-400 text-xs mb-1">{title}</span>
    <span className="text-2xl font-bold text-white mb-1">{value}</span>
    <div className="flex items-center gap-1 text-[10px]">
        <span className="text-gray-500">{sub}</span>
        <span className={trend === 'up' ? 'text-red-400' : 'text-green-400'}>
            环比 {trend === 'up' ? '↑' : '↓'} 3%
        </span>
    </div>
  </div>
);

const BigStat = ({ label, value, color }: { label: string; value: string; color: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-sm text-gray-400">{label}</span>
        <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-${color}-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]`}>
            {value}
        </span>
    </div>
);


export default function App() {
  return (
    <div className="min-h-screen bg-[#050b14] text-white p-2 md:p-4 overflow-hidden flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="mb-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Title Area */}
          <div className="flex-1 flex justify-center md:justify-start items-center relative order-2 md:order-1">
             {/* Decorative lines for header */}
             <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
             
             <div className="flex gap-2 mr-8 hidden xl:flex">
                <NavButton text="警情警力" icon={Bell} active />
                <NavButton text="实有人口" icon={Users} />
                <NavButton text="流动人口" icon={Activity} />
                <NavButton text="实名制" icon={FileText} />
             </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center justify-center relative z-20">
             <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-500 tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                人口分析
             </h1>
             <div className="text-[10px] text-cyan-500 tracking-[0.5em] uppercase mt-1">Population Analysis System</div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center order-3">
             <div className="flex gap-2 hidden xl:flex">
                <NavButton text="舆情" icon={Search} />
                <NavButton text="交通" icon={Radio} />
                <NavButton text="分析报告" icon={BarChart2} />
                <NavButton text="返回" icon={ArrowLeft} />
             </div>
             {/* Mobile Menu Icon (Placeholder) */}
             <div className="xl:hidden">
                 <button className="text-cyan-400 p-2 border border-cyan-900 bg-cyan-950/30 rounded"><Users /></button>
             </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4 pb-2">
        
        {/* === LEFT COLUMN === */}
        <div className="col-span-1 flex flex-col gap-4">
            {/* 1. Time Filters & Alert Stats */}
            <PanelFrame title="统计时间" className="h-[250px]">
                <div className="flex justify-between mb-4 px-2">
                   {['今日', '本周', '本月', '本年'].map((t, i) => (
                       <button key={t} className={`text-xs px-2 py-1 rounded border ${i === 0 ? 'bg-cyan-600 border-cyan-400 text-white' : 'border-slate-700 text-slate-400'}`}>{t}</button>
                   ))}
                </div>
                <div className="text-xs text-cyan-300 mb-2 pl-2 border-l-2 border-cyan-500">地区: 甘孜</div>
                <div className="grid grid-cols-2 gap-3">
                    <StatCard title="处警数" value="54" sub="环比" trend="down" />
                    <StatCard title="接警数" value="54" sub="环比" trend="up" />
                    <StatCard title="有效警情" value="4" sub="环比" trend="down" />
                    <StatCard title="无效警情" value="4" sub="环比" trend="down" />
                </div>
            </PanelFrame>

            {/* 2. One Standard Three Actuals */}
            <PanelFrame title="一标三实统计" className="h-[220px]">
                <BarChartStandard />
            </PanelFrame>

            {/* 3. Gender Ratio */}
            <PanelFrame title="实有人口性别占比" className="flex-1 min-h-[180px]">
                <GenderPieChart />
            </PanelFrame>
        </div>

        {/* === MIDDLE COLUMN === */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
             {/* Top Row: Ethnic & Map & Age */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[350px]">
                 <PanelFrame title="实有人口各族分析" className="hidden md:flex">
                     <EthnicPieChart />
                 </PanelFrame>
                 
                 <PanelFrame title="警情警力地图分析" className="col-span-1 md:col-span-2 relative">
                     <div className="absolute top-2 right-2 z-10 flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 bg-red-900/50 border border-red-500 rounded text-red-200 animate-pulse">High Alert Area</span>
                     </div>
                     <MapViz />
                 </PanelFrame>
             </div>

             {/* Middle Row: Age Structure & Jobs */}
             <div className="grid grid-cols-2 gap-4 h-[200px]">
                 <PanelFrame title="实有人口年龄结构">
                    <AgePieChart />
                 </PanelFrame>
                 <PanelFrame title="实有人口职业占比TOP5">
                    <JobBarChart />
                 </PanelFrame>
             </div>

             {/* Bottom Row: Stability Alerts (Spans Full Middle) */}
             <PanelFrame title="涉稳警情" className="flex-1 min-h-[180px]">
                 <StabilityBarChart />
             </PanelFrame>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="col-span-1 flex flex-col gap-4">
            {/* 1. Real-name System Stats */}
            <PanelFrame title="实名制人口统计" className="h-[120px]">
                <div className="flex justify-around items-center h-full">
                    <BigStat label="流动人口" value="8654" color="purple" />
                    <BigStat label="重点人员" value="135622" color="cyan" />
                </div>
            </PanelFrame>

            {/* 2. Alert Types (Bubbles - simplified as grid) */}
            <PanelFrame title="警情类型分布" className="h-[180px]">
                 <div className="grid grid-cols-3 gap-2 h-full content-center">
                    {[{l:'刑事',c:'bg-blue-600'}, {l:'求助',c:'bg-yellow-500'}, {l:'纠纷',c:'bg-purple-600'}, {l:'投诉',c:'bg-green-600'}, {l:'灾害事故',c:'bg-orange-600'}].map((item, i) => (
                        <div key={i} className={`rounded-full aspect-square flex flex-col items-center justify-center ${item.c} bg-opacity-20 border border-white/20 hover:scale-105 transition-transform cursor-pointer`}>
                            <span className="text-xs font-bold">{item.l}</span>
                            <span className="text-[10px] opacity-70">{Math.floor(Math.random()*100)}</span>
                        </div>
                    ))}
                 </div>
            </PanelFrame>
            
            {/* 3. High Risk Analysis (Line Chart) */}
            <PanelFrame title="高危人员年龄分析" className="h-[200px]">
                <HighRiskLineChart />
            </PanelFrame>
            
            {/* 4. Radar Chart */}
            <PanelFrame title="警情预警雷达" className="h-[200px]">
                <RadarAlertChart />
            </PanelFrame>

            {/* 5. Bottom Right: Category Stats */}
            <PanelFrame title="高危人员分类统计" className="flex-1 min-h-[180px]">
                <ScatterBubbleChart />
            </PanelFrame>
        </div>

      </main>
    </div>
  );
}