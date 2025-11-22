import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';

const HeroSlide = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        color: 'var(--accent-color)'
                    }}>
                        Deploy
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gradient"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}
                >
                    Hyper Yield Protocol
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        color: '#888',
                        marginBottom: '4rem'
                    }}
                >
                    Delta Neutral Yields using HyperLiquid
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ position: 'absolute', bottom: '2rem', left: 0, width: '100%', textAlign: 'center' }}
                >
                    <a href="mailto:hello@deploy.finance" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                        hello@deploy.finance
                    </a>
                </motion.div>
            </div>
        </SlideContainer>
    );
};

export default HeroSlide;
