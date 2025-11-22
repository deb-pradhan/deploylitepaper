import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { PieChart, DollarSign, Calendar, Target } from 'lucide-react';

const AskSlide = () => {
    const proceeds = [
        { label: 'Product Development', value: 40, color: 'var(--accent-color)' },
        { label: 'Market Expansion', value: 30, color: 'var(--secondary-color)' },
        { label: 'Operations & Team', value: 20, color: '#fff' },
        { label: 'Marketing & Community', value: 10, color: '#666' },
    ];

    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left: The Ask */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2rem' }}
                    >
                        The Ask
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                <DollarSign size={24} color="var(--accent-color)" />
                                <div style={{ fontSize: '0.9rem', color: '#888' }}>Raise Amount</div>
                            </div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>$5 Million</div>
                            <div style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.5rem' }}>on a $50 Million post-money valuation</div>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Calendar size={20} color="var(--secondary-color)" />
                                    <div style={{ fontSize: '0.8rem', color: '#888' }}>Target Close</div>
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Q1 2026</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{ padding: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Target size={20} color="#fff" />
                                    <div style={{ fontSize: '0.8rem', color: '#888' }}>Secured</div>
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>$75M <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>in dAssets</span></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right: Use of Proceeds */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', textAlign: 'center' }}>Use of Proceeds</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {proceeds.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '60px', fontWeight: 'bold', textAlign: 'right' }}>{item.value}%</div>
                                <div style={{ flex: 1, height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        style={{ height: '100%', background: item.color, borderRadius: '6px' }}
                                    />
                                </div>
                                <div style={{ width: '200px', fontSize: '0.9rem', color: '#ccc' }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </SlideContainer>
    );
};

export default AskSlide;
