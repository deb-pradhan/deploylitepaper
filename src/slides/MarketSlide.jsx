import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';

const MarketSlide = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left: TAM/SAM/SOM */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '3rem' }}
                    >
                        Market Opportunity
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: '100%', opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-color)', borderRadius: '0 8px 8px 0' }}
                        >
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>TAM</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$1.6 Trillion</div>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: '70%', opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.15)', borderLeft: '4px solid var(--secondary-color)', borderRadius: '0 8px 8px 0' }}
                        >
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>SAM</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$100 Billion</div>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: '40%', opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.2)', borderLeft: '4px solid #fff', borderRadius: '0 8px 8px 0' }}
                        >
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>SOM</div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$5 Billion</div>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Projections */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '3rem' }}
                >
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Revenue Target at Scale: <span style={{ color: 'var(--accent-color)' }}>$130M</span></h3>

                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', gap: '1rem' }}>
                        {[
                            { year: 'Year 1', val: '$5M', h: '10%' },
                            { year: 'Year 2', val: '$25M', h: '40%' },
                            { year: 'Year 3', val: '$100M', h: '100%' }
                        ].map((item, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                                <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{item.val}</div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: item.h }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                    viewport={{ once: true }}
                                    style={{ width: '100%', background: 'var(--accent-color)', borderRadius: '8px 8px 0 0', opacity: 0.8 }}
                                />
                                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#888' }}>{item.year}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </SlideContainer>
    );
};

export default MarketSlide;
