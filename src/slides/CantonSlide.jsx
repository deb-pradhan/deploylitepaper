import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { CheckCircle } from 'lucide-react';

const CantonSlide = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left: Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
                            New Strategy: <br />
                            <span className="accent-gradient">Canton Network Partnership</span>
                        </h2>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
                            $135M Institutional Backing
                        </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            "Integrates with Canton Network to connect private financial rails with open execution layers.",
                            "Enables access to tokenised assets like dBTC and delta-neutral strategies with real-time settlement.",
                            "Provides privacy-preserving infrastructure keeping execution sealed while enabling atomic, cross-chain settlement."
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                            >
                                <CheckCircle size={20} color="var(--accent-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
                                <p style={{ color: '#ccc', lineHeight: 1.5 }}>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Partners */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '3rem', textAlign: 'center' }}
                >
                    <h3 style={{ marginBottom: '2rem', color: '#888' }}>Strategic Partners</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        {/* Mock Logos */}
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>BANK OF AMERICA</div>
                        <div style={{ width: '50%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>DTCC</div>
                        <div style={{ width: '50%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>CITADEL Securities</div>
                    </div>
                </motion.div>

            </div>
        </SlideContainer>
    );
};

export default CantonSlide;
