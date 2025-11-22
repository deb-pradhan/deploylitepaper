import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';

const TrackRecordSlide = () => {
    const stats = [
        { label: 'Peak Daily APY', value: '53.4%', sub: 'Maximum return' },
        { label: 'Average APY', value: '22.6%', sub: '6-month beta' },
        { label: 'Sharpe Ratio', value: '6.1', sub: 'Alpha Grade' },
        { label: 'Max Drawdown', value: '<2%', sub: 'vs 20–40% market' },
    ];

    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                    Proven Track Record
                </motion.h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '2rem', textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                            {stat.value}
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>{stat.label}</div>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{stat.sub}</div>
                    </motion.div>
                ))}
            </div>

            {/* Historical Performance Chart Mockup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ height: '300px', padding: '2rem', position: 'relative' }}
            >
                <h3 style={{ marginBottom: '1rem', fontSize: '1rem', color: '#aaa' }}>Historical Daily APY Performance (May–Oct 2025)</h3>

                {/* SVG Chart */}
                <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    <line x1="0" y1="150" x2="1000" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                    {/* The Line */}
                    <motion.path
                        d="M0,150 C100,140 150,100 200,110 C250,120 300,80 400,90 C500,100 550,40 600,50 C650,60 700,100 800,80 C900,60 950,30 1000,40"
                        fill="none"
                        stroke="var(--accent-color)"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />

                    {/* Area under the line (optional, simpler to just do line for now) */}
                    <motion.path
                        d="M0,150 C100,140 150,100 200,110 C250,120 300,80 400,90 C500,100 550,40 600,50 C650,60 700,100 800,80 C900,60 950,30 1000,40 V200 H0 Z"
                        fill="url(#gradient)"
                        opacity="0.2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--accent-color)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </SlideContainer>
    );
};

export default TrackRecordSlide;
