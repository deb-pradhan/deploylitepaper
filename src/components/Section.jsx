import React from 'react';
import { clsx } from 'clsx';

const Section = ({ id, title, subtitle, children, className }) => {
    return (
        <section id={id} className={clsx("mb-24 scroll-mt-24", className)}>
            {(title || subtitle) && (
                <header className="mb-8 pb-4 border-b border-paper-border">
                    {subtitle && (
                        <span className="block text-paper-muted font-sans text-sm tracking-wider uppercase mb-2">
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-3xl font-serif font-bold text-paper-text">
                            {title}
                        </h2>
                    )}
                </header>
            )}

            <div className="prose prose-slate max-w-none text-paper-text">
                {children}
            </div>
        </section>
    );
};

export default Section;
