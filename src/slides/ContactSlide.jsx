import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/SlideContainer';
import { Mail, Send } from 'lucide-react';

const ContactSlide = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '2rem',
                        color: 'var(--accent-color)'
                    }}>
                        Deploy
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '4rem' }}
                >
                    Get in Touch
                </motion.h1>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                    <motion.a
                        href="mailto:hello@deploy.finance"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{
                            padding: '2rem 3rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Mail size={24} color="var(--accent-color)" />
                        <span style={{ fontSize: '1.2rem' }}>hello@deploy.finance</span>
                    </motion.a>

                    <motion.a
                        href="https://t.me/benjamin_bc"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{
                            padding: '2rem 3rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Send size={24} color="var(--secondary-color)" />
                        <span style={{ fontSize: '1.2rem' }}>@benjamin_bc</span>
                    </motion.a>
                </div>
            </div>
        </SlideContainer>
    );
};

export default ContactSlide;
