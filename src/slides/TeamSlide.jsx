import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';

const TeamSlide = () => {
    const team = [
        { name: 'Benjamin', role: 'Founder & CEO', exp: 'Product & Tech' },
        { name: 'Ben Lilly', role: 'Founder', exp: 'DeFi Strategist & Economist' },
        { name: 'Amit Trehan', role: 'CTO', exp: 'Ex VP at Lloyd’s Bank' },
    ];

    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                    Meet the Team
                </motion.h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{
                            width: '280px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: '#333',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: '#666'
                        }}>
                            {member.name.charAt(0)}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                        <div style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 'bold' }}>{member.role}</div>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>{member.exp}</p>

                        {/* Decorative glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }} />
                    </motion.div>
                ))}
            </div>
        </SlideContainer>
    );
};

export default TeamSlide;
