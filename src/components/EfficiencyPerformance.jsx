import React from 'react';
import Section from './Section';

const EfficiencyPerformance = () => {
    return (
        <Section id="yaas" subtitle="6. Yield as a Service" title="The B2B Flywheel That Scales to Billions">
            <p className="mb-8">
                Deploy is not merely a consumer application. It is infrastructure for the entire ecosystem.
            </p>
            <p className="mb-8">
                Any protocol, custodian, fintech, or Layer-1 can integrate Deploy’s execution engine and offer “Deploy-powered yield” under their own brand. White-label high-yield savings accounts, D-Asset collateral acceptance in lending markets, private DUSD deployments on enterprise networks. All are live possibilities today.
            </p>

            <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Partnership Pipeline</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                    <span className="px-4 py-2 bg-paper-border rounded-full text-sm font-medium">Major Lending Platforms</span>
                    <span className="px-4 py-2 bg-paper-border rounded-full text-sm font-medium">Payment Providers (Cast Card)</span>
                    <span className="px-4 py-2 bg-paper-border rounded-full text-sm font-medium">Institutional Terminals (SAS)</span>
                    <span className="px-4 py-2 bg-paper-border rounded-full text-sm font-medium">Enterprise Networks (Canton)</span>
                </div>

                <p className="text-lg font-serif italic">
                    "The more capital that flows through the engine, the better the execution becomes, the higher the yield, the faster the flywheel spins."
                </p>
            </div>
        </Section>
    );
};

export default EfficiencyPerformance;
