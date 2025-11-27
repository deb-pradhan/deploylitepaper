import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Users, ArrowRight, Lock, Activity, Globe, ChevronRight, Layers, Landmark, Code, Terminal, Zap } from 'lucide-react';

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
        {/* Vertical Lines */}
        <div className="absolute inset-0 flex justify-between px-8 md:px-24">
                <div className="w-px h-full bg-black opacity-10" />
                <div className="w-px h-full bg-black opacity-10" />
                <div className="w-px h-full bg-black hidden md:block opacity-10" />
                <div className="w-px h-full bg-black hidden md:block opacity-10" />
                <div className="w-px h-full bg-black opacity-10" />
                <div className="w-px h-full bg-black opacity-10" />
        </div>
        {/* Horizontal Lines are handled per section for that "architectural" feel */}
    </div>
);

const SlideContainer = ({ children, className = "" }) => (
    <div className={`relative w-full h-screen flex flex-col justify-center items-center px-8 md:px-24 overflow-hidden bg-bone ${className}`}>
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
    <div className="flex flex-col md:flex-row items-baseline gap-6 border-b border-black pb-4 mb-12 w-full max-w-6xl relative">
        <div className="text-accent font-mono font-bold text-sm tracking-widest uppercase">
            {number}
        </div>
        <h2 className="text-5xl md:text-6xl font-serif text-black leading-[0.9]">
            {title}
        </h2>
        {subtitle && (
             <div className="md:ml-auto max-w-sm text-xs font-mono text-black/60 leading-relaxed uppercase tracking-wide">
                {subtitle}
             </div>
        )}
        {/* Hatch pattern bar */}
        <div className="absolute bottom-[-4px] left-0 w-full h-1 bg-hatch" />
    </div>
);

const Button = ({ children, variant = 'primary', className = '' }) => (
    <button className={`
        px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider transition-all
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
        <div className="relative z-10 w-full max-w-6xl border-t border-b border-black py-24">
            <div className="absolute top-0 left-0 w-full h-2 bg-hatch" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                             <div className="w-4 h-4 bg-accent" />
                             <span className="font-mono text-sm tracking-widest uppercase">Deploy.Finance</span>
                        </div>
                        
                        <h1 className="text-7xl md:text-9xl font-serif text-black leading-[0.85] mb-12">
                            The Neobank <br/>
                            <span className="text-accent italic pr-4">Digital</span> Age.
                        </h1>
                        
                        <p className="text-lg font-mono text-black max-w-xl leading-relaxed border-l-2 border-accent pl-6">
                            Infrastructure, not speculation. Building the financial layer for the next generation of the internet.
                        </p>
                    </motion.div>
                </div>
                
                <div className="col-span-4 flex flex-col justify-end items-start md:items-end gap-4">
                    <div className="text-right font-mono text-xs uppercase tracking-widest mb-8 hidden md:block">
                        Series A <br/> Pitch Deck <br/> 2025
                    </div>
                    <Button variant="primary">Read Manifesto</Button>
                    <Button variant="outline">Contact Us</Button>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-hatch" />
        </div>
    </SlideContainer>
);

const ProblemSlide = () => (
    <SlideContainer>
        <SectionHeader number="01" title="The Inefficiency" subtitle="Capital efficiency in crypto is broken." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black w-full max-w-6xl border border-black">
            <div className="bg-bone p-12 md:p-16 flex flex-col justify-between min-h-[400px] border-b md:border-b-0 md:border-r border-black">
                <div className="font-serif text-4xl leading-tight text-black">
                    While traditional finance optimizes every basis point, digital assets leave <span className="text-accent italic font-medium">$1 Trillion</span> on the table.
                </div>
                <div className="font-mono text-xs uppercase tracking-widest mt-12 text-black font-bold">
                    Status: Critical Failure
                </div>
            </div>
            
            <div className="bg-bone p-12 md:p-16 relative overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 bg-halftone opacity-20" />
                
                <div className="relative flex items-end gap-8 w-full max-w-sm h-64 border-b border-black pb-px">
                    {/* Idle Bar */}
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "80%" }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="w-1/2 bg-black/10 border border-black border-b-0 relative"
                    >
                        <div className="absolute -top-8 left-0 font-mono text-xs">IDLE</div>
                    </motion.div>
                    
                    {/* Active Bar */}
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "20%" }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                        className="w-1/2 bg-accent border border-black border-b-0 relative"
                    >
                        <div className="absolute -top-12 left-0 font-mono text-4xl font-bold text-accent">
                           <AnimatedNumber value={80} suffix="%" />
                        </div>
                         <div className="absolute -top-8 left-0 font-mono text-xs text-accent">ACTIVE</div>
                    </motion.div>
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
                    <div key={step} className="group border-r border-y border-black p-10 bg-bone hover:bg-black hover:text-white transition-colors duration-300 relative">
                    <div className="font-mono text-xs mb-8 opacity-70 group-hover:opacity-100">STEP 0{i + 1}</div>
                    <div className="mb-12 text-black group-hover:text-white">
                        {i === 0 && <Landmark className="w-12 h-12 stroke-1" />}
                        {i === 1 && <Code className="w-12 h-12 stroke-1" />}
                        {i === 2 && <Layers className="w-12 h-12 stroke-1" />}
                    </div>
                    <h3 className="font-serif text-3xl mb-4 italic text-black group-hover:text-white">{step}</h3>
                    <p className="font-mono text-xs leading-relaxed opacity-90 group-hover:opacity-100 text-black group-hover:text-white">
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
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black">
                 {[
                    { label: "TVL", value: "15", prefix: "$", suffix: "M" },
                    { label: "Yield Dist.", value: "1.6", prefix: "$", suffix: "M" },
                    { label: "Commitments", value: "80", prefix: "$", suffix: "M" },
                    { label: "Wallets", value: "2000", prefix: "", suffix: "+" },
                ].map((stat, i) => (
                    <div key={stat.label} className="p-12 text-center hover:bg-accent hover:text-white transition-colors group">
                        <div className="font-serif text-5xl md:text-6xl mb-4 text-black group-hover:text-white transition-colors">
                            <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="font-mono text-xs uppercase tracking-[0.2em] border-t border-black/20 pt-4 inline-block group-hover:border-white/40 text-black group-hover:text-white transition-colors">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideContainer>
);

const PerformanceSlide = () => (
    <SlideContainer>
        <SectionHeader number="04" title="Performance" subtitle="Proven returns across market cycles." />
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 border border-black">
            <div className="p-12 border-b md:border-b-0 md:border-r border-black bg-hatch relative">
                 <div className="absolute inset-0 bg-bone opacity-90" /> {/* Fade hatch */}
                 <div className="relative z-10">
                     <div className="flex items-end justify-between mb-16 border-b border-black pb-8">
                        <div>
                            <div className="text-6xl font-serif text-accent mb-2">22.6%</div>
                            <div className="font-mono text-xs uppercase">Average APY</div>
                        </div>
                        <TrendingUp className="w-12 h-12 text-black stroke-1" />
                     </div>
                     
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                             <div className="text-2xl font-mono">6.1</div>
                             <div className="text-xs font-mono uppercase opacity-60 mt-1">Sharpe Ratio</div>
                        </div>
                        <div>
                             <div className="text-2xl font-mono">&lt;2%</div>
                             <div className="text-xs font-mono uppercase opacity-60 mt-1">Max Drawdown</div>
                        </div>
                     </div>
                 </div>
            </div>
            
            <div className="p-12 flex flex-col justify-center space-y-8 bg-bone">
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
                        <div className="h-4 border border-black p-0.5">
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
    </SlideContainer>
);

const MarketSlide = () => (
    <SlideContainer>
        <SectionHeader number="05" title="The Scale" subtitle="Addressable Market Analysis" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            <div className="border-l border-black pl-8 space-y-12">
                <div>
                    <div className="text-6xl font-light mb-2">$1.6T</div>
                    <div className="font-mono text-xs uppercase tracking-widest bg-black text-white inline-block px-2 py-1">Total Addressable</div>
                </div>
                <div>
                    <div className="text-6xl font-light mb-2 opacity-40">$100B</div>
                    <div className="font-mono text-xs uppercase tracking-widest border border-black inline-block px-2 py-1">Serviceable</div>
                </div>
                <div>
                    <div className="text-6xl font-medium text-accent mb-2">$5B</div>
                    <div className="font-mono text-xs uppercase tracking-widest bg-accent text-white inline-block px-2 py-1">Obtainable</div>
                </div>
            </div>
            
            <div className="relative h-[400px] border border-black bg-halftone flex items-center justify-center overflow-hidden">
                {/* Geometric representation instead of circles */}
                <div className="relative w-64 h-64 border border-black flex items-center justify-center bg-bone">
                    <span className="absolute top-2 left-2 font-mono text-[10px]">TAM</span>
                    <div className="w-40 h-40 border border-black flex items-center justify-center bg-bone">
                        <span className="absolute top-2 left-2 font-mono text-[10px]">SAM</span>
                        <div className="w-20 h-20 bg-accent flex items-center justify-center border border-black">
                            <span className="font-bold text-white font-mono">SOM</span>
                        </div>
                    </div>
                </div>
                {/* Architectural lines */}
                <div className="absolute top-0 left-1/2 h-full w-px bg-black/20" />
                <div className="absolute left-0 top-1/2 w-full h-px bg-black/20" />
            </div>
        </div>
    </SlideContainer>
);

const IntegrationSlide = () => (
    <SlideContainer>
        <SectionHeader number="06" title="Integration" subtitle="Yield as a Service Infrastructure" />
        
        <div className="relative w-full max-w-5xl h-[500px] border border-black bg-bone">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Hub */}
                <div className="w-64 h-64 border border-black bg-accent flex flex-col items-center justify-center text-white z-10">
                    <Zap className="w-12 h-12 mb-4 stroke-1" />
                    <div className="font-serif text-2xl italic text-center">Execution <br/> Engine</div>
                </div>
                
                {/* Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="black" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="black" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="black" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="black" strokeWidth="1" />
                </svg>
                
                {/* Satellites */}
                {[
                    { label: "Lending", icon: Layers, pos: "top-8 left-8" },
                    { label: "Fintechs", icon: Globe, pos: "top-8 right-8" },
                    { label: "Institutions", icon: Landmark, pos: "bottom-8 left-8" },
                    { label: "Enterprise", icon: Shield, pos: "bottom-8 right-8" },
                ].map((item, i) => (
                    <div key={item.label} className={`absolute ${item.pos} w-40 h-32 bg-bone border border-black p-4 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group shadow-lg`}>
                        <item.icon className="w-6 h-6 stroke-1 text-black group-hover:text-white" />
                        <div className="font-mono text-sm uppercase tracking-wider text-black group-hover:text-white">{item.label}</div>
                    </div>
                ))}
            </div>
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
            ].map((member, i) => (
                <div key={member.name} className="bg-bone p-12 hover:bg-black hover:text-white transition-colors group">
                    <div className="w-20 h-20 bg-gray-200 mb-8 grayscale group-hover:grayscale-0 group-hover:bg-white/20" />
                    <div className="font-serif text-2xl mb-2">{member.name}</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-accent mb-6">{member.role}</div>
                    <div className="font-mono text-sm opacity-70 leading-relaxed">{member.bio}</div>
                </div>
            ))}
        </div>
    </SlideContainer>
);

const RoadmapSlide = () => (
    <SlideContainer>
        <SectionHeader number="08" title="Roadmap" subtitle="Scale to Billions" />
        
        <div className="w-full max-w-6xl border-t border-black pt-12">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { date: "Dec 2025", title: "DUSD Public Launch", desc: "Ethereum mainnet. Pre-deposit commitments." },
                    { date: "Q1 2026", title: "Transparency Suite", desc: "Full dashboard & third-party attestations." },
                    { date: "Q2 2026", title: "Integrations", desc: "Lending protocols & Debit card spending." },
                    { date: "2026-27", title: "Enterprise", desc: "Privacy layers & Canton Network." },
                ].map((item, i) => (
                    <div key={item.title} className="relative border-l border-black pl-6 py-2">
                        <div className="font-mono text-xs bg-black text-white inline-block px-2 py-1 mb-4">{item.date}</div>
                        <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                        <p className="font-mono text-xs opacity-60 leading-relaxed">{item.desc}</p>
                        {/* Node */}
                        <div className="absolute top-0 left-[-3px] w-[5px] h-[5px] bg-black" />
                    </div>
                ))}
             </div>
        </div>
    </SlideContainer>
);

const AskSlide = () => (
    <SlideContainer>
        <div className="w-full max-w-5xl border border-black bg-bone p-12 md:p-24 relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-full h-4 bg-hatch" />
             
             <h2 className="text-7xl md:text-9xl font-serif text-black mb-16 leading-[0.8]">
                 Join the <span className="text-accent italic">Era.</span>
             </h2>
             
             <div className="flex flex-col md:flex-row justify-center gap-16 mb-16 border-y border-black py-12">
                 <div className="text-center">
                     <div className="font-mono text-xs uppercase tracking-widest mb-2 opacity-50">Raising</div>
                     <div className="text-6xl font-light text-accent">$5M</div>
                 </div>
                 <div className="text-center">
                     <div className="font-mono text-xs uppercase tracking-widest mb-2 opacity-50">Valuation</div>
                     <div className="text-6xl font-light text-accent">$50M</div>
                 </div>
             </div>
             
             <a href="mailto:hello@deploy.finance" className="inline-flex items-center gap-4 bg-accent text-white px-12 py-6 font-mono text-lg font-bold uppercase tracking-widest hover:bg-black transition-colors border border-black">
                 Contact for Allocation <ArrowRight className="w-6 h-6" />
             </a>
             
             <div className="absolute bottom-0 left-0 w-full h-4 bg-hatch" />
        </div>
    </SlideContainer>
);

// --- Main Application ---

export default function DeployPitchDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = useCallback((direction) => {
        if (isScrolling) return;
        setIsScrolling(true);
        setCurrentSlide(prev => {
            if (direction === 'next') return Math.min(prev + 1, SLIDES.length - 1);
            if (direction === 'prev') return Math.max(prev - 1, 0);
            return prev;
        });
        setTimeout(() => setIsScrolling(false), 800);
    }, [isScrolling]);

    useEffect(() => {
        const onWheel = (e) => {
            if (Math.abs(e.deltaY) > 30) handleScroll(e.deltaY > 0 ? 'next' : 'prev');
        };
        const onKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') handleScroll('next');
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') handleScroll('prev');
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
        <div className="font-mono text-black bg-bone h-screen w-screen overflow-hidden relative selection:bg-accent selection:text-white">
            <NoiseOverlay />
            <GridBackground />
            
            {/* Top Bar */}
            <div className="fixed top-0 left-0 right-0 h-16 border-b border-black z-50 flex items-center justify-between px-6 bg-bone/90 backdrop-blur-sm">
                <div className="font-serif text-xl font-bold italic tracking-tighter">Deploy.</div>
                
                {/* Pill Navigation as Horizontal List */}
                <div className="hidden md:flex gap-px bg-black border border-black">
                    {SLIDES.map((slide, i) => (
                        <button
                            key={slide}
                            onClick={() => setCurrentSlide(i)}
                            className={`px-4 py-1 text-xs font-mono uppercase tracking-widest transition-colors ${
                                i === currentSlide ? 'bg-accent text-white' : 'bg-bone text-black hover:bg-black hover:text-white'
                            }`}
                        >
                            {slide}
                        </button>
                    ))}
                </div>
                
                <div className="font-mono text-xs">
                    {currentSlide + 1}/{SLIDES.length}
                </div>
            </div>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full pt-16" // Add padding for top bar
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>
            
            {/* Decorative Corners */}
            <div className="fixed top-20 left-6 w-2 h-2 bg-black z-40" />
            <div className="fixed top-20 right-6 w-2 h-2 bg-black z-40" />
            <div className="fixed bottom-6 left-6 w-2 h-2 bg-black z-40" />
            <div className="fixed bottom-6 right-6 w-2 h-2 bg-black z-40" />
        </div>
    );
}
