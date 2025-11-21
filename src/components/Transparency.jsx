import React from 'react';
import Section from './Section';

const Transparency = () => {
    return (
        <Section id="transparency" subtitle="7. Transparency" title="Transparency Engineered, Not Marketed">
            <p className="mb-8">
                Institutions and high net worth individuals do not trust marketing. They trust verifiable data. That is why transparency is not a future roadmap item—it is live today.
            </p>

            <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">Real-Time Performance Dashboard</h4>
                        <p className="text-paper-muted text-sm">We provide a live, granular dashboard showing exact fund locations, yield attribution, and performance metrics in real time.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">Verifiable On-Chain Trading</h4>
                        <p className="text-paper-muted text-sm">
                            Users can independently verify every single trade and transaction on-chain using explorers like <a href="https://hypurrscan.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-paper-text">Hypurrscan</a>.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">True Self-Custody</h4>
                        <p className="text-paper-muted text-sm">Your funds remain yours. Users can export their wallet to any other interface and access their assets instantly, even if Deploy ceases to exist.</p>
                    </div>
                </div>
            </div>

            <blockquote className="pl-4 border-l-2 border-paper-accent italic text-paper-text">
                "When your competitive moat is trust earned through years of survival, you do not hide the proof. You put it on display."
            </blockquote>
        </Section>
    );
};

export default Transparency;
