import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { AlertTriangle, ShieldAlert, ServerCrash } from 'lucide-react';

const ProblemSlide = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left: Text Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}
                    >
                        Over <span className="text-gradient">$1 Trillion</span> in crypto capital remains unproductive.
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { icon: ServerCrash, title: "Fragmented Infrastructure", desc: "Liquidity is siloed across chains." },
                            { icon: ShieldAlert, title: "Opaque Risk", desc: "Unclear counterparty exposure." },
                            { icon: AlertTriangle, title: "No Trusted Yield Engines", desc: "Lack of automated, institutional-grade tools." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <item.icon size={24} color="var(--accent-color)" />
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#aaa' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Visuals (Pie Chart & Stat) */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {/* Pie Chart Representation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: 'conic-gradient(var(--accent-color) 5%, rgba(255,255,255,0.1) 5%)',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)'
                        }}
                    >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'var(--bg-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>95%</span>
                            <span style={{ fontSize: '0.9rem', color: '#888' }}>Unproductive</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '2rem', textAlign: 'center' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&gt;80%</h3>
                        <p style={{ color: '#888' }}>Not Earning Yields</p>
                    </motion.div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: 0,
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '1rem',
                    color: '#666'
                }}
            >
                Deploy converts this private and public capital into productive liquidity.
            </motion.div>
        </SlideContainer>
    );
};

export default ProblemSlide;
