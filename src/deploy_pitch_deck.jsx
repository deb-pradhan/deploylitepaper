import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Users, ArrowRight, Lock, Activity, Globe, ChevronRight } from 'lucide-react';

// --- Assets & Data ---
const SLIDES = [
    'Cover',
    'Problem',
    'Solution',
    'Traction',
    'Performance',
    'Market',
    'Team',
    'Ask'
];

// --- Shared Components ---

const NoiseOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
);

const MathBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-slate-900 font-mono text-xs"
                initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
                animate={{
                    y: [null, Math.random() * -100],
                    opacity: [0, 0.5, 0]
                }}
                transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5
                }}
            >
                {['∫', '∑', '∂', '∆', 'π', '∞', '√', '≈', '≠', '≤'][Math.floor(Math.random() * 10)]}
            </motion.div>
        ))}
    </div>
);

const Orb = ({ className, delay = 0 }) => (
    <motion.div
        className={`absolute rounded-full blur-[120px] opacity-20 pointer-events-none ${className}`}
        animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
            y: [0, -20, 0],
        }}
        transition={{
            duration: 15,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

const SlideContainer = ({ children, className = "" }) => (
    <div className={`relative w-full h-screen flex flex-col justify-center items-center px-8 md:px-24 overflow-hidden ${className}`}>
        <MathBackground />
        {children}
    </div>
);

const AnimatedNumber = ({ value, prefix = "", suffix = "" }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseFloat(value);
        if (start === end) return;

        let totalDuration = 2000;
        let incrementTime = (totalDuration / end) * 5; // speed up

        // Simple count up for demo purposes
        let timer = setInterval(() => {
            start += 1;
            setDisplayValue(String(start));
            if (start >= end) {
                clearInterval(timer);
                setDisplayValue(value); // Ensure exact final value
            }
        }, 10);

        return () => clearInterval(timer);
    }, [value]);

    return <span className="tabular-nums">{prefix}{displayValue}{suffix}</span>;
};

// --- Slides ---

const CoverSlide = () => (
    <SlideContainer>
        <Orb className="bg-indigo-500 w-[800px] h-[800px] -top-60 -right-60" />
        <Orb className="bg-slate-300 w-[600px] h-[600px] bottom-0 left-0" delay={2} />

        <motion.div
            initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
        >
            <motion.img
                src="/deploy_logo.png"
                alt="Deploy Logo"
                className="h-24 md:h-32 mb-12 drop-shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            />

            <h2 className="text-3xl md:text-5xl font-extralight text-slate-800 tracking-tight mb-8">
                The Neobank for the <span className="font-normal text-indigo-600">Digital Age</span>
            </h2>
            <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-indigo-200" />
                <p className="font-mono text-xs md:text-sm text-slate-400 tracking-[0.4em] uppercase">
                    Infrastructure, not speculation
                </p>
                <div className="h-px w-12 bg-indigo-200" />
            </div>
        </motion.div>
    </SlideContainer>
);

const ProblemSlide = () => (
    <SlideContainer>
        <Orb className="bg-slate-200 w-[600px] h-[600px] top-20 left-20" />
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center z-10">
            <div>
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-thin tracking-tighter text-slate-900 mb-8 leading-[0.9]"
                >
                    The <span className="font-semibold">$1 Trillion</span> <br /> Inefficiency.
                </motion.h2>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light"
                >
                    Capital efficiency in crypto is broken. While traditional finance optimizes every basis point, the digital asset economy leaves massive value on the table.
                </motion.p>
            </div>

            <div className="relative h-[500px] w-full flex items-end justify-center pb-12">
                {/* Idle Capital */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "80%" }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-40 bg-slate-100 rounded-t-sm relative group overflow-hidden border border-slate-200"
                >
                    {/* Micro-animation: subtle pattern move */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:8px_8px]" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-slate-400 font-medium tracking-widest text-xs uppercase">Idle</div>
                </motion.div>

                {/* Productive Capital */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "20%" }}
                    transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-40 bg-indigo-600 rounded-t-sm ml-8 relative shadow-[0_0_60px_-10px_rgba(70,77,240,0.5)] overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-indigo-600 font-bold text-7xl tracking-tighter">
                        <AnimatedNumber value={80} suffix="%" />
                    </div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/90 font-medium text-xs tracking-widest uppercase">Productive</div>
                </motion.div>
            </div>
        </div>
    </SlideContainer>
);

const SolutionSlide = () => (
    <SlideContainer>
        <Orb className="bg-indigo-50 w-[900px] h-[900px] -bottom-40 left-1/2 -translate-x-1/2" />
        <div className="text-center mb-24 z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 mb-6"
            >
                The Autonomous <span className="font-semibold">Yield Engine</span>
            </motion.h2>
            <p className="text-xl text-slate-500 font-light tracking-wide">Delta-Neutral strategies. Zero directional risk.</p>
        </div>

        <div className="flex items-center justify-center w-full max-w-6xl z-10">
            {['Deposit', 'Auto-Hedge', 'D-Assets'].map((step, i) => (
                <React.Fragment key={step}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="w-64 h-40 bg-white/80 backdrop-blur-xl border border-white/60 rounded-xl flex flex-col items-center justify-center shadow-sm z-10 group cursor-default"
                    >
                        <span className="font-light text-3xl text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">{step}</span>
                        {/* Micro-interaction: line appears on hover */}
                        <div className="h-px w-0 bg-indigo-600 mt-2 transition-all duration-300 group-hover:w-12" />
                    </motion.div>
                    {i < 2 && (
                        <div className="relative w-24 h-px bg-slate-200 overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-indigo-500 w-1/2"
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </SlideContainer>
);

const TractionSlide = () => {
    const stats = [
        { label: "TVL", value: "15", prefix: "$", suffix: "M" },
        { label: "Yield Dist.", value: "1.6", prefix: "$", suffix: "M" },
        { label: "Commitments", value: "80", prefix: "$", suffix: "M" },
        { label: "Wallets", value: "2000", prefix: "", suffix: "+" },
    ];

    return (
        <SlideContainer>
            <Orb className="bg-slate-100 w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 mb-24 text-center z-10">
                Battle <span className="font-semibold">Tested</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl z-10">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className={`p-10 rounded-2xl border backdrop-blur-md transition-all duration-500 ${stat.label === "TVL"
                                ? 'border-indigo-100 bg-indigo-50/60'
                                : 'border-white/60 bg-white/40'
                            } text-center group`}
                    >
                        <div className={`text-4xl md:text-5xl font-light mb-4 tracking-tighter ${stat.label === "TVL" ? 'text-indigo-600' : 'text-slate-900'}`}>
                            <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="text-slate-400 font-medium uppercase tracking-widest text-xs group-hover:text-indigo-500 transition-colors">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

const PerformanceSlide = () => (
    <SlideContainer>
        <div className="max-w-6xl w-full z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 mb-6">
                        Proven <span className="font-semibold">Performance</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-12 font-light tracking-wide">Industry leading returns built to withstand every market cycle.</p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-4xl font-light text-indigo-600 mb-2">22.6%</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400">Average APY</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-slate-900 mb-2">53.4%</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400">Peak Daily APY</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-slate-900 mb-2">6.1</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400">Sharpe Ratio</div>
                        </div>
                        <div>
                            <div className="text-4xl font-light text-slate-900 mb-2">&lt;2%</div>
                            <div className="text-xs uppercase tracking-widest text-slate-400">Max Drawdown</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {[
                        { name: "Deploy", val: 22.6, color: "bg-indigo-600", width: "90%" },
                        { name: "Ethena", val: 7.6, color: "bg-slate-200", width: "30%" },
                        { name: "Resolv", val: 7.0, color: "bg-slate-200", width: "28%" },
                    ].map((item, i) => (
                        <div key={item.name} className="flex items-center gap-8 group">
                            <div className="w-24 font-medium text-lg text-slate-900">{item.name}</div>
                            <div className="flex-1 h-10 bg-white rounded-full overflow-hidden relative shadow-sm border border-slate-100">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: item.width }}
                                    transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                    className={`h-full ${item.color} relative`}
                                >
                                    {item.name === "Deploy" && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                                    )}
                                </motion.div>
                            </div>
                            <div className={`w-24 font-mono text-2xl font-light ${item.name === "Deploy" ? "text-indigo-600" : "text-slate-300"}`}>
                                {item.val}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </SlideContainer>
);

const MarketSlide = () => (
    <SlideContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full max-w-7xl z-10">
            <div>
                <h2 className="text-6xl md:text-8xl font-thin tracking-tighter text-slate-900 mb-12">
                    The <span className="font-semibold">Scale</span>
                </h2>
                <div className="space-y-8">
                    <div className="flex items-baseline gap-6 group">
                        <span className="text-5xl font-light text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">$1.6T</span>
                        <span className="text-slate-400 text-sm uppercase tracking-widest">Total Addressable Market</span>
                    </div>
                    <div className="flex items-baseline gap-6 group">
                        <span className="text-5xl font-light text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">$100B</span>
                        <span className="text-slate-400 text-sm uppercase tracking-widest">Serviceable Market</span>
                    </div>
                    <div className="flex items-baseline gap-6 group">
                        <span className="text-5xl font-medium text-indigo-600 tracking-tighter">$5B</span>
                        <span className="text-slate-400 text-sm uppercase tracking-widest">Obtainable Market</span>
                    </div>
                </div>
                <div className="mt-16 p-8 bg-white/60 backdrop-blur-md rounded-xl border-l-2 border-indigo-500 shadow-sm">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">Revenue Goal</div>
                    <div className="text-3xl font-light text-slate-900">$100M ARR by Year 3</div>
                </div>
            </div>

            <div className="relative h-[600px] flex items-center justify-center">
                {/* Concentric Circles Visualization */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
                    className="absolute w-[500px] h-[500px] rounded-full border border-slate-200 flex items-center justify-center bg-white/20 backdrop-blur-sm"
                >
                    <span className="absolute top-6 text-slate-300 text-xs font-medium tracking-widest">TAM $1.6T</span>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
                        className="w-[350px] h-[350px] rounded-full border border-slate-300 flex items-center justify-center bg-slate-50/40 backdrop-blur-md shadow-lg"
                    >
                        <span className="absolute top-6 text-slate-400 text-xs font-medium tracking-widest">SAM $100B</span>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                            className="w-[180px] h-[180px] rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_20px_50px_rgba(70,77,240,0.3)]"
                        >
                            <div className="text-center">
                                <div className="font-bold text-2xl">SOM</div>
                                <div className="text-xs opacity-80 mt-1">$5B</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </SlideContainer>
);

const TeamSlide = () => (
    <SlideContainer>
        <Orb className="bg-indigo-50 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 mb-24 text-center z-10">
            Built by <span className="font-semibold">Quants</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
            {[
                { name: "Benjamin", role: "Founder & CEO", bio: "Product & Tech Background." },
                { name: "Ben Lilly", role: "Founder", bio: "DeFi Strategist & Economist." },
                { name: "Amit Trehan", role: "CTO", bio: "Ex-VP Lloyd's Bank. Security Expert." }
            ].map((member, i) => (
                <motion.div
                    key={member.name}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group"
                >
                    <div className="w-16 h-16 bg-slate-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-2xl font-light text-slate-900 mb-2">{member.name}</h3>
                    <div className="text-indigo-600 font-mono text-xs mb-4 uppercase tracking-widest">{member.role}</div>
                    <p className="text-slate-500 leading-relaxed text-sm font-light">{member.bio}</p>
                </motion.div>
            ))}
        </div>
    </SlideContainer>
);

const AskSlide = () => (
    <SlideContainer>
        <Orb className="bg-indigo-500 w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="text-center max-w-5xl mx-auto z-10">
            <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-7xl md:text-9xl font-thin tracking-tighter text-slate-900 mb-12"
            >
                Join the <span className="font-semibold">Era</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16">
                <div className="text-center group">
                    <div className="text-xs text-slate-400 uppercase tracking-[0.3em] mb-4 group-hover:text-indigo-500 transition-colors">Raising</div>
                    <div className="text-6xl md:text-7xl font-light text-slate-900 tracking-tight">$5M</div>
                </div>
                <div className="h-24 w-px bg-slate-200 hidden md:block" />
                <div className="text-center group">
                    <div className="text-xs text-slate-400 uppercase tracking-[0.3em] mb-4 group-hover:text-indigo-500 transition-colors">Valuation</div>
                    <div className="text-6xl md:text-7xl font-light text-slate-900 tracking-tight">$50M</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
                <div className="p-6 bg-white/50 rounded-xl border border-white/60">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">Target Close</div>
                    <div className="text-2xl font-light text-slate-900">Q1 2026</div>
                </div>
                <div className="p-6 bg-white/50 rounded-xl border border-white/60">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">Commitments</div>
                    <div className="text-2xl font-light text-slate-900">$75M <span className="text-sm text-slate-400">in dAssets</span></div>
                </div>
            </div>

            <motion.a
                href="mailto:hello@deploy.finance"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-indigo-600 text-white px-12 py-6 rounded-full text-xl font-light tracking-wide shadow-[0_20px_50px_-10px_rgba(70,77,240,0.4)] hover:shadow-[0_30px_80px_-10px_rgba(70,77,240,0.5)] transition-all group"
            >
                Contact for Allocation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
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

        setTimeout(() => setIsScrolling(false), 1200); // Increased debounce for weightier feel
    }, [isScrolling]);

    useEffect(() => {
        const onWheel = (e) => {
            if (Math.abs(e.deltaY) > 30) {
                handleScroll(e.deltaY > 0 ? 'next' : 'prev');
            }
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
        TeamSlide,
        AskSlide
    ][currentSlide];

    return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 h-screen w-screen overflow-hidden">
            <NoiseOverlay />

            {/* Progress Indicator */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
                {SLIDES.map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-indigo-600 h-8' : 'bg-slate-300 h-1.5 opacity-50'
                            }`}
                    />
                ))}
            </div>

            {/* Slide Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
