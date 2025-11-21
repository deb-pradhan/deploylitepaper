import React from 'react';
import Section from './Section';

const Roadmap = () => {
    return (
        <Section id="roadmap" subtitle="8. Roadmap" title="From $15 Million to Multiple Billions">
            <div className="relative border-l border-paper-border ml-3 space-y-12 py-4">
                <div className="pl-8 relative">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-paper-accent ring-4 ring-white"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-paper-muted block mb-1">Mid-December 2025</span>
                    <h4 className="text-lg font-bold mb-2">DUSD Public Launch</h4>
                    <p className="text-paper-text">Launch on Ethereum mainnet with pre-deposit commitments already in place.</p>
                </div>

                <div className="pl-8 relative">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-paper-accent ring-4 ring-white"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-paper-muted block mb-1">Q1 2026</span>
                    <h4 className="text-lg font-bold mb-2">Transparency Dashboard</h4>
                    <p className="text-paper-text">Full transparency dashboard and third-party attestations live.</p>
                </div>

                <div className="pl-8 relative">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-paper-accent ring-4 ring-white"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-paper-muted block mb-1">Q1–Q2 2026</span>
                    <h4 className="text-lg font-bold mb-2">Integrations & Spending</h4>
                    <p className="text-paper-text">First wave of major lending-protocol integrations and physical debit-card spending via partners.</p>
                </div>

                <div className="pl-8 relative">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-paper-accent ring-4 ring-white"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-paper-muted block mb-1">Mid-2026</span>
                    <h4 className="text-lg font-bold mb-2">Privacy & Enterprise</h4>
                    <p className="text-paper-text">Privacy-enhanced DUSD and Canton Network enterprise deployment.</p>
                </div>

                <div className="pl-8 relative">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-paper-accent ring-4 ring-white"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-paper-muted block mb-1">2026–2027</span>
                    <h4 className="text-lg font-bold mb-2">Scale to Billions</h4>
                    <p className="text-paper-text">$500 million → $2 billion+ TVL as network effects compound.</p>
                </div>
            </div>
        </Section>
    );
};

export default Roadmap;
