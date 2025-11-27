import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Users, ArrowRight, Lock, Activity, Globe, ChevronRight, Layers, Landmark, Code, Terminal, Zap, Wallet, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// --- Assets & Data ---
const SLIDES = [
    'Cover',
    'Problem',
    'Solution',
    'Traction',
    'Performance',
    'Market',
    'Integration',
    'Team',
    'Roadmap',
    'Ask'
];

// --- Shared Components ---

const NoiseOverlay = () => (
    <div className="noise-overlay" />
);

const GridBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
        {/* Vertical Lines - Reduced on mobile */}
        <div className="absolute inset-0 flex justify-between px-4 md:px-24">
                <div className="w-px h-full bg-black opacity-10" />
                <div className="w-px h-full bg-black opacity-10 hidden md:block" />
                <div className="w-px h-full bg-black hidden md:block opacity-10" />
                <div className="w-px h-full bg-black hidden md:block opacity-10" />
                <div className="w-px h-full bg-black opacity-10 hidden md:block" />
                <div className="w-px h-full bg-black opacity-10" />
        </div>
    </div>
);

const SlideContainer = ({ children, className = "" }) => (
    <div className={`relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-24 py-20 md:py-0 overflow-x-hidden bg-bone ${className}`}>
        {children}
    </div>
);

const AnimatedNumber = ({ value, prefix = "", suffix = "" }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseFloat(value);
        if (start === end) return;
        
        let timer = setInterval(() => {
            start += end / 40; 
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setDisplayValue(start.toFixed(value % 1 === 0 ? 0 : 1));
        }, 25);

        return () => clearInterval(timer);
    }, [value]);

    return <span className="tabular-nums tracking-tighter">{prefix}{displayValue}{suffix}</span>;
};

const SectionHeader = ({ number, title, subtitle }) => (
    <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-6 border-b border-black pb-4 mb-8 md:mb-12 w-full max-w-6xl relative">
        <div className="text-accent font-mono font-bold text-xs md:text-sm tracking-widest uppercase">
            {number}
        </div>
        <h2 className="text-3xl md:text-6xl font-serif text-black leading-[0.95] md:leading-[0.9]">
            {title}
        </h2>
        {subtitle && (
             <div className="md:ml-auto max-w-sm text-[11px] md:text-xs font-mono text-black/60 leading-relaxed uppercase tracking-wide mt-2 md:mt-0">
                {subtitle}
             </div>
        )}
        {/* Hatch pattern bar */}
        <div className="absolute bottom-[-4px] left-0 w-full h-1 bg-hatch" />
    </div>
);

const Button = ({ children, variant = 'primary', className = '' }) => (
    <button className={`
        w-full md:w-auto px-6 md:px-8 py-4 min-h-[48px] text-sm font-mono font-bold uppercase tracking-wider transition-all
        ${variant === 'primary' 
            ? 'bg-accent text-white border border-accent hover:bg-black hover:border-black' 
            : 'bg-transparent text-black border border-black hover:bg-black hover:text-white'}
        ${className}
    `}>
        {children}
    </button>
);

// --- Slides ---

const CoverSlide = () => (
    <SlideContainer>
        <div className="relative z-10 w-full max-w-6xl border-t border-b border-black py-8 md:py-24">
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-hatch" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="col-span-1 md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                             <div className="w-3 h-3 md:w-4 md:h-4 bg-accent" />
                             <span className="font-mono text-xs md:text-sm tracking-widest uppercase">Deploy.Finance</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-9xl font-serif text-black leading-[0.9] md:leading-[0.85] mb-6 md:mb-12">
                            The Neobank <br/>
                            <span className="text-accent italic pr-2 md:pr-4">Digital</span> Age.
                        </h1>
                        
                        <p className="text-base md:text-lg font-mono text-black max-w-xl leading-relaxed border-l-2 border-accent pl-4 md:pl-6">
                            Infrastructure, not speculation. Building the financial layer for the next generation of the internet.
                        </p>
                    </motion.div>
                </div>
                
                <div className="col-span-1 md:col-span-4 flex flex-col justify-end items-stretch md:items-end gap-3 md:gap-4 mt-6 md:mt-0">
                    <div className="text-right font-mono text-xs uppercase tracking-widest mb-4 md:mb-8 hidden md:block">
                        Series A <br/> Pitch Deck <br/> 2025
                    </div>
                    <Button variant="primary">Read Manifesto</Button>
                    <Button variant="outline">Contact Us</Button>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-hatch" />
        </div>
    </SlideContainer>
);

const ProblemSlide = () => (
    <SlideContainer>
        <SectionHeader number="01" title="The Inefficiency" subtitle="Capital efficiency in crypto is broken." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl border border-black">
            <div className="bg-bone p-6 md:p-12 lg:p-16 flex flex-col justify-between min-h-[200px] md:min-h-[400px] border-b md:border-b-0 md:border-r border-black">
                <div className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight text-black">
                    While traditional finance optimizes every basis point, digital assets leave <span className="text-accent italic font-medium">$1 Trillion</span> on the table.
                </div>
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest mt-6 md:mt-12 text-black font-bold">
                    Status: Critical Failure
                </div>
            </div>
            
            <div className="bg-bone p-6 md:p-12 lg:p-16 relative overflow-hidden flex items-center justify-center min-h-[200px] md:min-h-[400px]">
                <div className="relative flex items-end justify-center gap-4 md:gap-8 w-full max-w-[200px] md:max-w-sm h-36 md:h-64">
                    {/* Idle Bar - 80% */}
                    <div className="flex flex-col items-center w-2/5 h-full justify-end">
                        <div className="font-mono text-2xl md:text-4xl font-bold text-black mb-1">80%</div>
                        <div className="font-mono text-xs text-black mb-2">IDLE</div>
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "80%" }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-full bg-black/20 border border-black"
                        />
                    </div>
                    
                    {/* Active Bar - 20% */}
                    <div className="flex flex-col items-center w-2/5 h-full justify-end">
                        <div className="font-mono text-2xl md:text-4xl font-bold text-accent mb-1">20%</div>
                        <div className="font-mono text-xs text-accent mb-2">ACTIVE</div>
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "20%" }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                            className="w-full bg-accent border border-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    </SlideContainer>
);

const SolutionSlide = () => (
    <SlideContainer>
        <SectionHeader number="02" title="Autonomous Yield" subtitle="Delta-Neutral strategies. Zero directional risk." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl border-l border-black">
            {['Deposit', 'Auto-Hedge', 'D-Assets'].map((step, i) => (
                    <div key={step} className="group border-r border-y border-black p-6 md:p-10 bg-bone hover:bg-black hover:text-white transition-colors duration-300 relative min-h-[180px] md:min-h-0">
                    <div className="font-mono text-[10px] md:text-xs mb-4 md:mb-8 opacity-70 group-hover:opacity-100">STEP 0{i + 1}</div>
                    <div className="mb-6 md:mb-12 text-black group-hover:text-white">
                        {i === 0 && <Landmark className="w-8 h-8 md:w-12 md:h-12 stroke-1" />}
                        {i === 1 && <Code className="w-8 h-8 md:w-12 md:h-12 stroke-1" />}
                        {i === 2 && <Layers className="w-8 h-8 md:w-12 md:h-12 stroke-1" />}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-2 md:mb-4 italic text-black group-hover:text-white">{step}</h3>
                    <p className="font-mono text-[11px] md:text-xs leading-relaxed opacity-90 group-hover:opacity-100 text-black group-hover:text-white">
                         {i === 0 ? "Capital enters secure vault system via smart contracts." : 
                          i === 1 ? "Algorithms balance risk across venues instantly." : 
                          "Receive tokenized assets representing your position."}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
            ))}
        </div>
    </SlideContainer>
);

const TractionSlide = () => (
    <SlideContainer>
        <SectionHeader number="03" title="Traction" subtitle="Live Metrics. Updated Daily." />
        
        <div className="w-full max-w-6xl border border-black bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black divide-y md:divide-y-0">
                 {[
                    { label: "TVL", value: "15", prefix: "$", suffix: "M" },
                    { label: "Yield Dist.", value: "1.6", prefix: "$", suffix: "M" },
                    { label: "Commitments", value: "80", prefix: "$", suffix: "M" },
                    { label: "Wallets", value: "2000", prefix: "", suffix: "+" },
                ].map((stat, i) => (
                    <div key={stat.label} className={`p-6 md:p-12 text-center hover:bg-accent hover:text-white transition-colors group ${i >= 2 ? 'border-t md:border-t-0' : ''}`}>
                        <div className="font-serif text-3xl md:text-6xl mb-2 md:mb-4 text-black group-hover:text-white transition-colors">
                            <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] border-t border-black/20 pt-2 md:pt-4 inline-block group-hover:border-white/40 text-black group-hover:text-white transition-colors">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideContainer>
);

// Historical APY data organized by time ranges
const APY_DATA_3M = [
    { date: '4 Sep', apy: 12 },
    { date: '7 Sep', apy: 8 },
    { date: '10 Sep', apy: 14 },
    { date: '13 Sep', apy: -2 },
    { date: '16 Sep', apy: 10 },
    { date: '19 Sep', apy: 18 },
    { date: '22 Sep', apy: 42 },
    { date: '25 Sep', apy: 28 },
    { date: '28 Sep', apy: 18 },
    { date: '1 Oct', apy: 22 },
    { date: '4 Oct', apy: 38 },
    { date: '7 Oct', apy: 42 },
    { date: '9 Oct', apy: 15 },
    { date: '12 Oct', apy: 8 },
    { date: '15 Oct', apy: 2 },
    { date: '18 Oct', apy: -6 },
    { date: '21 Oct', apy: 4 },
    { date: '24 Oct', apy: 8 },
    { date: '27 Oct', apy: 12 },
    { date: '30 Oct', apy: 8 },
    { date: '2 Nov', apy: 10 },
    { date: '5 Nov', apy: 14 },
    { date: '8 Nov', apy: 8 },
    { date: '11 Nov', apy: 18 },
    { date: '14 Nov', apy: 22 },
    { date: '17 Nov', apy: 12 },
    { date: '20 Nov', apy: 18 },
    { date: '23 Nov', apy: 8 },
    { date: '27 Nov', apy: 10 },
];

// 1 Month data (last ~10 entries)
const APY_DATA_1M = [
    { date: '27 Oct', apy: 12 },
    { date: '30 Oct', apy: 8 },
    { date: '2 Nov', apy: 10 },
    { date: '5 Nov', apy: 14 },
    { date: '8 Nov', apy: 8 },
    { date: '11 Nov', apy: 18 },
    { date: '14 Nov', apy: 22 },
    { date: '17 Nov', apy: 12 },
    { date: '20 Nov', apy: 18 },
    { date: '23 Nov', apy: 8 },
    { date: '27 Nov', apy: 10 },
];

// 1 Week data (last 7 days)
const APY_DATA_1W = [
    { date: '21 Nov', apy: 15 },
    { date: '22 Nov', apy: 12 },
    { date: '23 Nov', apy: 8 },
    { date: '24 Nov', apy: 11 },
    { date: '25 Nov', apy: 14 },
    { date: '26 Nov', apy: 9 },
    { date: '27 Nov', apy: 10 },
];

// 24H data (hourly snapshots)
const APY_DATA_24H = [
    { date: '00:00', apy: 9.2 },
    { date: '04:00', apy: 9.5 },
    { date: '08:00', apy: 10.1 },
    { date: '12:00', apy: 9.8 },
    { date: '16:00', apy: 10.2 },
    { date: '20:00', apy: 9.6 },
    { date: 'Now', apy: 9.78 },
];

const STRATEGIES_API = 'https://do510emoi4o2y.cloudfront.net/api/available-strategies';

const APYChart = () => {
    const [activeRange, setActiveRange] = useState('3M');
    const [strategies, setStrategies] = useState([]);
    const [liveAPY, setLiveAPY] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(null);
    const ranges = ['24H', '1W', '1M', '3M'];

    // Fetch live data from API
    useEffect(() => {
        const fetchStrategies = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(STRATEGIES_API);
                const data = await response.json();
                if (data.strategies) {
                    setStrategies(data.strategies);
                    // Find the Income: Funding Rate strategy (key: 2)
                    const fundingStrategy = data.strategies.find(s => s.key === '2');
                    if (fundingStrategy) {
                        setLiveAPY(fundingStrategy.apy);
                        setLastUpdated(new Date(fundingStrategy.apyUpdateTime));
                    }
                }
            } catch (error) {
                console.error('Failed to fetch strategies:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStrategies();
        // Refresh every 60 seconds
        const interval = setInterval(fetchStrategies, 60000);
        return () => clearInterval(interval);
    }, []);

    // Get chart data based on selected range
    const getChartData = () => {
        let baseData;
        switch (activeRange) {
            case '24H':
                baseData = [...APY_DATA_24H];
                break;
            case '1W':
                baseData = [...APY_DATA_1W];
                break;
            case '1M':
                baseData = [...APY_DATA_1M];
                break;
            case '3M':
            default:
                baseData = [...APY_DATA_3M];
                break;
        }
        
        // Update the last data point with live APY
        if (liveAPY !== null && baseData.length > 0) {
            baseData[baseData.length - 1] = { date: 'Now', apy: liveAPY };
        }
        
        return baseData;
    };

    const chartData = getChartData();
    
    return (
        <div className="w-full h-full bg-bone border border-black p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-black text-white flex items-center justify-center">
                        <Wallet className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-black font-mono text-sm md:text-base font-bold uppercase tracking-wide">Live Agent APY</span>
                </div>
                <div className="flex border border-black divide-x divide-black">
                    {ranges.map((range) => (
                        <button
                            key={range}
                            onClick={() => setActiveRange(range)}
                            className={`px-2 md:px-4 py-1 text-xs md:text-sm font-mono transition-colors ${
                                activeRange === range 
                                    ? 'bg-accent text-white' 
                                    : 'bg-bone text-black hover:bg-black hover:text-white'
                            }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Chart */}
            <div className="w-full h-40 md:h-52 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis 
                            dataKey="date" 
                            axisLine={{ stroke: 'black', strokeWidth: 1 }}
                            tickLine={false}
                            tick={{ fill: 'black', fontSize: 10, fontFamily: 'monospace' }}
                            interval="preserveStartEnd"
                            dy={10}
                        />
                        <YAxis 
                            axisLine={{ stroke: 'black', strokeWidth: 1 }}
                            tickLine={false}
                            tick={{ fill: 'black', fontSize: 10, fontFamily: 'monospace' }}
                            tickFormatter={(value) => `${value}%`}
                            domain={['auto', 'auto']}
                            dx={-10}
                        />
                        <ReferenceLine y={0} stroke="#000000" strokeOpacity={0.1} />
                        <Line 
                            type="monotone" 
                            dataKey="apy" 
                            stroke="#474DF0" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4, fill: '#474DF0', stroke: 'black', strokeWidth: 1 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Live APY Display - Below Chart */}
            {liveAPY !== null && (
                <div className="grid grid-cols-2 gap-4 border-t border-black pt-4 mt-6">
                    <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest mb-1">Current Yield</span>
                        <span className="font-serif text-3xl text-accent">{liveAPY.toFixed(2)}%</span>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest mb-1">Strategy</span>
                        <span className="font-mono text-xs font-bold text-black uppercase">Income: Funding Rate</span>
                    </div>
                </div>
            )}
        </div>
    );
};

const PerformanceSlide = () => (
    <SlideContainer>
        <SectionHeader number="04" title="Performance" subtitle="Proven returns across market cycles." />
        
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-0 md:border md:border-black">
            {/* Left side - Stats */}
            <div className="p-6 md:p-12 border border-black md:border-0 md:border-r bg-bone relative order-2 lg:order-1">
                 <div className="relative z-10">
                     <div className="flex items-end justify-between mb-8 md:mb-16 border-b border-black pb-4 md:pb-8">
                        <div>
                            <div className="text-4xl md:text-6xl font-serif text-accent mb-2">22.6%</div>
                            <div className="font-mono text-xs uppercase">Average APY</div>
                        </div>
                        <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-black stroke-1" />
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                        <div>
                             <div className="text-xl md:text-2xl font-mono">6.1</div>
                             <div className="text-xs font-mono uppercase opacity-60 mt-1">Sharpe Ratio</div>
                        </div>
                        <div>
                             <div className="text-xl md:text-2xl font-mono">&lt;2%</div>
                             <div className="text-xs font-mono uppercase opacity-60 mt-1">Max Drawdown</div>
                        </div>
                     </div>
                     
                     {/* Comparison bars */}
                     <div className="space-y-4 md:space-y-6">
                        {[
                            { name: "Deploy", val: 22.6, width: "90%" },
                            { name: "Ethena", val: 7.6, width: "30%" },
                            { name: "Resolv", val: 7.0, width: "28%" },
                        ].map((item, i) => (
                            <div key={item.name} className="group">
                                <div className="flex justify-between mb-2 font-mono text-xs uppercase">
                                    <span>{item.name}</span>
                                    <span>{item.val}%</span>
                                </div>
                                <div className="h-3 md:h-4 border border-black p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: item.width }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                        className={`h-full ${item.name === "Deploy" ? "bg-accent" : "bg-black/20"}`}
                                    />
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
            </div>
            
            {/* Right side - Chart */}
            <div className="p-4 md:p-6 bg-bone order-1 lg:order-2">
                <APYChart />
            </div>
        </div>
    </SlideContainer>
);

const MarketSlide = () => (
    <SlideContainer>
        <SectionHeader number="05" title="The Scale" subtitle="Addressable Market Analysis" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl">
            <div className="border-l border-black pl-4 md:pl-8 space-y-6 md:space-y-12 order-2 md:order-1">
                <div>
                    <div className="text-4xl md:text-6xl font-light mb-2">$1.6T</div>
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest bg-black text-white inline-block px-2 py-1">Total Addressable</div>
                </div>
                <div>
                    <div className="text-4xl md:text-6xl font-light mb-2 opacity-40">$100B</div>
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest border border-black inline-block px-2 py-1">Serviceable</div>
                </div>
                <div>
                    <div className="text-4xl md:text-6xl font-medium text-accent mb-2">$5B</div>
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest bg-accent text-white inline-block px-2 py-1">Obtainable</div>
                </div>
            </div>
            
            <div className="relative h-[250px] md:h-[400px] border border-black bg-bone flex items-center justify-center overflow-hidden order-1 md:order-2">
                {/* TAM - Outer Layer with Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:20px_20px]" />
                <span className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[10px] md:text-xs font-bold tracking-widest text-black/60">TAM $1.6T</span>
                
                {/* SAM - Middle Layer */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-40 h-40 md:w-64 md:h-64 border-2 border-black/30 flex items-center justify-center bg-white/50"
                >
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 font-mono text-[8px] md:text-[10px] font-bold tracking-widest text-black/50">SAM $100B</span>
                    
                    {/* SOM - Inner Layer */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-20 h-20 md:w-28 md:h-28 bg-accent flex flex-col items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                    >
                        <span className="font-bold text-white font-mono text-sm md:text-lg tracking-widest leading-none">SOM</span>
                        <span className="text-white/80 font-mono text-[10px] md:text-xs mt-1">$5B</span>
                    </motion.div>
                </motion.div>
                
                {/* Crosshairs */}
                <div className="absolute top-0 left-1/2 h-full w-px bg-black/10 pointer-events-none" />
                <div className="absolute left-0 top-1/2 w-full h-px bg-black/10 pointer-events-none" />
            </div>
        </div>
    </SlideContainer>
);

const IntegrationSlide = () => (
    <SlideContainer>
        <SectionHeader number="06" title="Integration" subtitle="Yield as a Service Infrastructure" />
        
        <div className="relative w-full max-w-5xl h-[350px] md:h-[500px] border border-black bg-bone">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />
            
            {/* Connectors - Behind everything */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="black" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="black" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="black" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="black" strokeWidth="1" />
            </svg>
            
            {/* Central Hub */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-32 h-32 md:w-48 md:h-48 border border-black bg-accent flex flex-col items-center justify-center text-white">
                    <Zap className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-3 stroke-1" />
                    <div className="font-serif text-base md:text-xl italic text-center">Execution <br/> Engine</div>
                </div>
            </div>
            
            {/* Satellites - On top */}
            {[
                { label: "Lending", icon: Layers, pos: "top-3 left-3 md:top-6 md:left-6" },
                { label: "Fintechs", icon: Globe, pos: "top-3 right-3 md:top-6 md:right-6" },
                { label: "Institutions", icon: Landmark, pos: "bottom-3 left-3 md:bottom-6 md:left-6" },
                { label: "Enterprise", icon: Shield, pos: "bottom-3 right-3 md:bottom-6 md:right-6" },
            ].map((item) => (
                <div key={item.label} className={`absolute ${item.pos} w-24 h-20 md:w-36 md:h-28 bg-bone border border-black p-2 md:p-3 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group z-20`}>
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 stroke-1 text-black group-hover:text-white" />
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-black group-hover:text-white">{item.label}</div>
                </div>
            ))}
        </div>
    </SlideContainer>
);

const TeamSlide = () => (
    <SlideContainer>
        <SectionHeader number="07" title="The Team" subtitle="Built by Quants & Engineers" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black w-full max-w-6xl border border-black">
             {[
                { name: "Benjamin", role: "Founder & CEO", bio: "Product & Tech Background." },
                { name: "Ben Lilly", role: "Founder", bio: "DeFi Strategist & Economist." },
                { name: "Amit Trehan", role: "CTO", bio: "Ex-VP Lloyd's Bank. Security Expert." }
            ].map((member) => (
                <div key={member.name} className="bg-white p-6 md:p-12 hover:bg-bone transition-colors group min-h-[180px] md:min-h-0">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-black/5 mb-4 md:mb-8 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <User className="w-7 h-7 md:w-10 md:h-10 text-black/20 group-hover:text-black/40 transition-colors" />
                    </div>
                    <div className="font-serif text-xl md:text-2xl mb-1 md:mb-2 text-black">{member.name}</div>
                    <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-3 md:mb-6">{member.role}</div>
                    <div className="font-mono text-xs md:text-sm text-black/70 leading-relaxed">{member.bio}</div>
                </div>
            ))}
        </div>
    </SlideContainer>
);

const RoadmapSlide = () => (
    <SlideContainer>
        <SectionHeader number="08" title="Roadmap" subtitle="Scale to Billions" />
        
        <div className="relative w-full max-w-6xl mt-4 md:mt-12 border border-black bg-bone">
            {/* Desktop Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-black hidden md:block transform -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black">
                {[
                    { date: "Dec 2025", title: "DUSD Launch", desc: "Ethereum mainnet. Pre-deposit commitments.", icon: Zap },
                    { date: "Q1 2026", title: "Transparency", desc: "Full dashboard & attestations.", icon: Activity },
                    { date: "Q2 2026", title: "Integrations", desc: "Lending & Debit card spending.", icon: Layers },
                    { date: "2026-27", title: "Enterprise", desc: "Privacy layers & Canton.", icon: Shield },
                ].map((item, i) => (
                    <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative group p-4 md:p-8 min-h-[160px] md:h-[400px] flex flex-col items-center justify-center hover:bg-white transition-colors ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
                    >
                        {/* Upper Content (Date) */}
                        <div className="flex-1 flex flex-col justify-end pb-3 md:pb-12 items-center w-full">
                             <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent bg-bone px-2 py-0.5 border border-black group-hover:bg-accent group-hover:text-white transition-colors">
                                {item.date}
                             </div>
                        </div>
                        
                        {/* Central Node */}
                        <div className="relative z-10 w-3 h-3 md:w-4 md:h-4 bg-black rotate-45 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-sm" />
                        
                        {/* Lower Content (Info) */}
                        <div className="flex-1 flex flex-col justify-start pt-3 md:pt-12 items-center text-center w-full">
                            <h3 className="font-serif text-base md:text-2xl mb-1 md:mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="font-mono text-[10px] md:text-xs opacity-60 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideContainer>
);

const AskSlide = () => (
    <SlideContainer>
        <div className="w-full max-w-5xl border border-black bg-bone p-6 md:p-24 relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-full h-2 md:h-4 bg-hatch" />
             
             <h2 className="text-4xl md:text-9xl font-serif text-black mb-8 md:mb-16 leading-[0.9] md:leading-[0.8] mt-4 md:mt-0">
                 Join the <span className="text-accent italic">Era.</span>
             </h2>
             
             <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-8 md:mb-16 border-y border-black py-6 md:py-12">
                 <div className="text-center">
                     <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 opacity-50">Raising</div>
                     <div className="text-4xl md:text-6xl font-light text-accent">$5M</div>
                 </div>
                 <div className="text-center">
                     <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 opacity-50">Valuation</div>
                     <div className="text-4xl md:text-6xl font-light text-accent">$50M</div>
                 </div>
             </div>
             
             <a href="mailto:hello@deploy.finance" className="w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 bg-accent text-white px-6 md:px-12 py-4 md:py-6 font-mono text-sm md:text-lg font-bold uppercase tracking-widest hover:bg-black transition-colors border border-black min-h-[56px]">
                 Contact for Allocation <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
             </a>
             
             <div className="absolute bottom-0 left-0 w-full h-2 md:h-4 bg-hatch" />
        </div>
    </SlideContainer>
);

// --- Main Application ---

export default function DeployPitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = useCallback((direction) => {
        if (isScrolling || isMenuOpen) return;
        setIsScrolling(true);
        setCurrentSlide(prev => {
            if (direction === 'next') return Math.min(prev + 1, SLIDES.length - 1);
            if (direction === 'prev') return Math.max(prev - 1, 0);
            return prev;
        });
        setTimeout(() => setIsScrolling(false), 800);
    }, [isScrolling, isMenuOpen]);

    useEffect(() => {
        const onWheel = (e) => {
            if (Math.abs(e.deltaY) > 30) handleScroll(e.deltaY > 0 ? 'next' : 'prev');
        };
        const onKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') handleScroll('next');
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') handleScroll('prev');
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('wheel', onWheel);
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [handleScroll]);

    const CurrentSlideComponent = [
        CoverSlide,
        ProblemSlide,
        SolutionSlide,
        TractionSlide,
        PerformanceSlide,
        MarketSlide,
        IntegrationSlide,
        TeamSlide,
        RoadmapSlide,
        AskSlide
    ][currentSlide];

    return (
        <div className="font-mono text-black bg-bone min-h-screen w-screen overflow-x-hidden relative selection:bg-accent selection:text-white">
            <NoiseOverlay />
            <GridBackground />
            
            {/* Top Bar */}
            <div className="fixed top-0 left-0 right-0 h-14 md:h-16 border-b border-black z-50 flex items-center justify-between px-4 md:px-6 bg-bone/95 backdrop-blur-sm">
                <img src="/deploy_logo.png" alt="Deploy." className="h-5 md:h-6" />
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex border border-black">
                    {SLIDES.map((slide, i) => (
                        <button
                            key={slide}
                            onClick={() => setCurrentSlide(i)}
                            className={`px-4 py-1 text-xs font-mono uppercase tracking-widest transition-colors ${
                                i === currentSlide ? 'bg-accent text-white' : 'bg-black text-white hover:bg-bone hover:text-accent'
                            }`}
                        >
                            {slide}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden px-3 py-2 border border-black bg-black text-white font-mono text-xs uppercase tracking-widest min-h-[40px] flex items-center"
                >
                    [ MENU ]
                </button>
                
                {/* Desktop Slide Counter */}
                <div className="hidden md:block font-mono text-xs">
                    {currentSlide + 1}/{SLIDES.length}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", ease: "circOut", duration: 0.25 }}
                        className="fixed inset-0 bg-bone/95 backdrop-blur-md z-[60] flex flex-col md:hidden"
                    >
                        {/* Mobile Menu Header */}
                        <div className="h-14 border-b border-black flex items-center justify-between px-4 bg-bone/80 backdrop-blur-sm flex-shrink-0">
                             <img src="/deploy_logo.png" alt="Deploy." className="h-5" />
                             <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="px-3 py-2 border border-black bg-black text-white font-mono text-xs uppercase tracking-widest min-h-[40px] flex items-center"
                            >
                                [ CLOSE ]
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className="flex-1 overflow-y-auto">
                            {SLIDES.map((slide, i) => (
                                <button
                                    key={slide}
                                    onClick={() => {
                                        setCurrentSlide(i);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-6 py-5 border-b border-black font-serif text-2xl transition-colors flex items-center justify-between min-h-[60px] ${
                                        i === currentSlide ? 'bg-accent text-white' : 'hover:bg-black hover:text-white'
                                    }`}
                                >
                                    <span>{slide}</span>
                                    <span className="font-mono text-xs opacity-60">0{i+1}</span>
                                </button>
                            ))}
                        </div>
                        
                        {/* Mobile Menu Footer */}
                        <div className="p-6 border-t border-black bg-black text-white flex-shrink-0">
                             <div className="font-mono text-[10px] uppercase tracking-widest mb-2 opacity-60">Connect</div>
                             <a href="mailto:hello@deploy.finance" className="text-base font-serif hover:text-accent transition-colors">hello@deploy.finance</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full min-h-screen pt-14 md:pt-16"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>
            
            {/* Mobile Progress Bar */}
            <div 
                className="fixed bottom-0 left-0 h-1 bg-accent z-40 md:hidden transition-all duration-500" 
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }} 
            />
            
            {/* Desktop Decorative Corners */}
            <div className="hidden md:block fixed top-20 left-6 w-2 h-2 bg-black z-40" />
            <div className="hidden md:block fixed top-20 right-6 w-2 h-2 bg-black z-40" />
            <div className="hidden md:block fixed bottom-6 left-6 w-2 h-2 bg-black z-40" />
            <div className="hidden md:block fixed bottom-6 right-6 w-2 h-2 bg-black z-40" />
        </div>
    );
}
