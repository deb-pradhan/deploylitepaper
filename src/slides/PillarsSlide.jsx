import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { Shield, Cpu, Layers } from 'lucide-react';

const PillarsSlide = () => {
    const pillars = [
        {
            icon: Shield,
            title: "01 — Confidentiality Liquidity Layer",
            desc: "A private settlement network synchronising liquidity across chains while keeping execution encrypted, enabling institutional-grade discretion with composability."
        },
        {
            icon: Cpu,
            title: "02 — Autonomous Yield Engine",
            desc: "Adaptive delta-neutral core balancing exposure and yield, turning volatility into consistent performance with zero directional risk."
        },
        {
            icon: Layers,
            title: "03 — Modular Asset Fabric",
            desc: "Composable architecture for tokenised assets—mint, deploy, integrate across ecosystems without bridges or fragmentation."
        }
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
                    Key Pillars of Deploy
                </motion.h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <pillar.icon size={40} color="var(--accent-color)" />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{pillar.title}</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>{pillar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

export default PillarsSlide;
