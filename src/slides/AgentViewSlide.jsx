import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { BarChart, Activity, Shield } from 'lucide-react';

const AgentViewSlide = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '900px', margin: '0 auto' }}
                >
                    Industry leading returns built to <span className="accent-gradient">withstand every market cycle</span>.
                </motion.h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{
                        height: '400px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }}></div>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Deploy Agent Dashboard</div>
                    </div>

                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '1rem' }}>
                            <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>Total Value Locked</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$15,420,000</div>
                            <div style={{ marginTop: '2rem', height: '100px', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1))', borderBottom: '2px solid var(--accent-color)', position: 'relative' }}>
                                <motion.div
                                    initial={{ width: '0%' }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    style={{ height: '100%', borderRight: '2px solid var(--accent-color)' }}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '1rem', flex: 1 }}>
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>Active Strategies</div>
                                <div style={{ fontSize: '1.2rem' }}>Delta Neutral</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '1rem', flex: 1 }}>
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>Risk Level</div>
                                <div style={{ fontSize: '1.2rem', color: '#4ade80' }}>Low</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Chart */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>USD Yields Comparison</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { name: 'Deploy', value: 22.6, color: 'var(--accent-color)' },
                            { name: 'Ethena', value: 10.2, color: '#666' },
                            { name: 'Restly', value: 7.5, color: '#444' }
                        ].map((item, index) => (
                            <div key={index}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span>{item.name}</span>
                                    <span style={{ fontWeight: 'bold', color: item.color === 'var(--accent-color)' ? item.color : '#aaa' }}>{item.value}%</span>
                                </div>
                                <div style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(item.value / 25) * 100}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                        viewport={{ once: true }}
                                        style={{ height: '100%', background: item.color, borderRadius: '6px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </SlideContainer>
    );
};

export default AgentViewSlide;
