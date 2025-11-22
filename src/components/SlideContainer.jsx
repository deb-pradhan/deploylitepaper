import React from 'react';
import { motion } from 'framer-motion';
import styles from './SlideContainer.module.css';

const SlideContainer = ({ children, className = '' }) => {
    return (
        <section className={`${styles.container} ${className}`}>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
};

export default SlideContainer;
