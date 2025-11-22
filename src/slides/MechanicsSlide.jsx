import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { ArrowRight, Coins, Activity, DollarSign } from 'lucide-react';

const MechanicsSlide = () => {
    const steps = [
        {
            icon: Coins,
            title: '1. Deploy',
            desc: 'Deposit BTC, ETH, or stablecoins to mint dAssets with 1:1 backing and instant liquidity.'
        },
        {
            icon: Activity,
            title: '2. Activate',
            desc: 'Assets allocated across delta-neutral strategies with continuous rebalancing and risk management.'
        },
        {
            icon: DollarSign,
            title: '3. Earn',
            desc: 'Ongoing yield distribution to all dAsset holders, with on-chain transparency.'
        }
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
                    Mechanics
                </motion.h2>
                <p style={{ color: '#888', marginTop: '1rem' }}>Designed to Maximize Yields</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{
                                flex: 1,
                                minWidth: '250px',
                                maxWidth: '350px',
                                padding: '2rem',
                                textAlign: 'center',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'var(--accent-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                boxShadow: '0 0 20px var(--accent-glow)'
                            }}>
                                <step.icon size={30} color="white" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: '#aaa', lineHeight: 1.6 }}>{step.desc}</p>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                                viewport={{ once: true }}
                                style={{ alignSelf: 'center', display: 'none', md: { display: 'block' } }} // Simple hide on mobile logic needed via CSS usually
                                className="arrow-separator"
                            >
                                <ArrowRight size={30} color="#444" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <style>{`
        @media (max-width: 768px) {
          .arrow-separator { display: none; }
        }
      `}</style>
        </SlideContainer>
    );
};

export default MechanicsSlide;
