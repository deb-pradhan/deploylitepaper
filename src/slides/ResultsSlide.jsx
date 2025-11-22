import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { Wallet, TrendingUp, Users, Lock } from 'lucide-react';

const ResultsSlide = () => {
    const stats = [
        { icon: Lock, value: '$15M', label: 'TVL in Private Beta', sub: 'Managed via autonomous execution' },
        { icon: TrendingUp, value: '$80M', label: 'TVL Commitments', sub: 'Secured for mainnet expansion' },
        { icon: Wallet, value: '$1.6M', label: 'Yields Distributed', sub: 'Generated via delta-neutral strategies' },
        { icon: Users, value: '2,000+', label: 'Wallets Managed', sub: 'Unified control layer' },
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
                    Deploy in Action
                </motion.h2>
                <p style={{ color: '#888', marginTop: '1rem' }}>The Results</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                    >
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '1rem',
                            borderRadius: '12px',
                            color: 'var(--accent-color)'
                        }}>
                            <stat.icon size={32} />
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0.5rem 0 0.2rem' }}>{stat.label}</div>
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>{stat.sub}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

export default ResultsSlide;
