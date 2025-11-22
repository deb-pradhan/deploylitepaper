import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { ArrowRight, Database, Layers, TrendingUp } from 'lucide-react';

const SolutionSlide = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px', margin: '0 auto' }}
                >
                    Convert crypto into private <span className="accent-gradient">yield-bearing dAssets</span>
                </motion.h2>
                <p style={{ marginTop: '1rem', color: '#888' }}>with Canton Chain integration</p>
            </div>

            {/* Flow Diagram */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
            }}>

                {/* Input */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '2rem', textAlign: 'center', minWidth: '200px' }}
                >
                    <Database size={40} color="#888" style={{ marginBottom: '1rem' }} />
                    <h3>Inputs</h3>
                    <p style={{ color: '#aaa', marginTop: '0.5rem' }}>USDC, Native Tokens</p>
                </motion.div>

                <ArrowRight size={30} color="#444" />

                {/* Middle: Deploy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '3rem',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                        border: '1px solid rgba(59, 130, 246, 0.4)',
                        textAlign: 'center',
                        minWidth: '250px',
                        boxShadow: '0 0 60px rgba(59, 130, 246, 0.15)'
                    }}
                >
                    <Layers size={50} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                    <h2 style={{ fontSize: '2rem', letterSpacing: '0.1em' }}>DEPLOY</h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginTop: '0.5rem' }}>Autonomous Yield Engine</p>
                </motion.div>

                <ArrowRight size={30} color="#444" />

                {/* Output */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '2rem', textAlign: 'center', minWidth: '200px' }}
                >
                    <TrendingUp size={40} color="#888" style={{ marginBottom: '1rem' }} />
                    <h3>Outputs</h3>
                    <p style={{ color: '#aaa', marginTop: '0.5rem' }}>Aster, Hyperliquid, DEXs</p>
                    <div style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(59, 130, 246, 0.2)',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: 'var(--accent-color)'
                    }}>
                        Superior Yields
                    </div>
                </motion.div>

            </div>
        </SlideContainer>
    );
};

export default SolutionSlide;
