import React from 'react';
import Section from './Section';

const Transparency = () => {
    return (
        <Section id="transparency" subtitle="7. Transparency" title="Transparency Engineered, Not Marketed">
            <p className="mb-8">
                Institutions and high-net-worth individuals do not trust marketing. They trust verifiable data.
            </p>
            <p className="mb-8">
                Within weeks of this litepaper’s publication, Deploy will ship:
            </p>

            <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">Real-Time Public Dashboard</h4>
                        <p className="text-paper-muted text-sm">Showing exact fund locations, yield attribution, and distribution mechanics.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">Third-Party Attestations</h4>
                        <p className="text-paper-muted text-sm">Regular reports from top-tier accounting firms.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full border border-paper-accent flex items-center justify-center shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-paper-accent"></div>
                    </div>
                    <div>
                        <h4 className="font-bold">On-Chain Proofs</h4>
                        <p className="text-paper-muted text-sm">Cryptographic proofs of every automated trade.</p>
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
