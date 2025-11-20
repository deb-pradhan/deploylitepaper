import React from 'react';
import Section from './Section';

const RiskManagement = () => {
    return (
        <Section id="sustainability" subtitle="5. Structural Yield" title="Why This Yield Is Structural and Sustainable">
            <p className="mb-8">
                Crypto markets exhibit a persistent structural long bias. Retail and institutions alike want leveraged upside more than leveraged downside. This imbalance creates perpetual positive funding rates that have existed on more than <strong>95 percent of all trading days</strong> since perpetual futures were invented.
            </p>

            <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Military Precision Execution</h3>
                <p className="mb-6">
                    Deploy simply collects this “risk premium of the crypto economy” with military precision:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 border border-paper-border rounded bg-white">
                        <h4 className="font-bold mb-2">Continuous Partial Rebalancing</h4>
                        <p className="text-sm text-paper-muted">Instead of weekly full resets, the system makes micro-adjustments to maintain delta neutrality.</p>
                    </div>
                    <div className="p-4 border border-paper-border rounded bg-white">
                        <h4 className="font-bold mb-2">Chunked Execution</h4>
                        <p className="text-sm text-paper-muted">Orders are broken into small pieces across multiple venues to minimize market impact.</p>
                    </div>
                    <div className="p-4 border border-paper-border rounded bg-white">
                        <h4 className="font-bold mb-2">Proactive De-risking</h4>
                        <p className="text-sm text-paper-muted">Triggered by on-chain volatility oracles before liquidation risks materialize.</p>
                    </div>
                    <div className="p-4 border border-paper-border rounded bg-white">
                        <h4 className="font-bold mb-2">Ultra-Low Slippage</h4>
                        <p className="text-sm text-paper-muted">Average slippage 0.03% - 0.08% versus 0.15% - 0.30% for traditional approaches.</p>
                    </div>
                </div>

                <p>
                    The result is dramatically higher net yield, near-zero liquidation risk, and performance that actually improves during periods of high volatility when funding rates spike.
                </p>
            </div>
        </Section>
    );
};

export default RiskManagement;
