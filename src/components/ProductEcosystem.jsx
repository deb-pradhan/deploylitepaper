import React from 'react';
import Section from './Section';

const ProductEcosystem = () => {
    return (
        <Section id="product" subtitle="4. The Product" title="dUSD">
            <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">4.1 dUSD: The Yield-Bearing Stablecoin That Finally Makes Sense</h3>
                <p className="mb-6">
                    dUSD is the core product of Deploy Finance. It is a fully collateralized, self-custodial, yield-bearing dollar token that unlocks delta-neutral yields on perpetual DEXes—automatically.
                </p>

                <div className="p-6 bg-paper-bg border border-paper-border rounded-lg mb-8">
                    <h4 className="font-bold mb-4">How DUSD Yield Works</h4>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">1</div>
                            <div>
                                <span className="font-bold block">Market Demand</span>
                                When the crypto market is bullish (most of the time), longs pay shorts.
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">2</div>
                            <div>
                                <span className="font-bold block">Delta-Neutral Position</span>
                                Deploy is always short in a delta-neutral hedged position. Therefore Deploy collects.
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">3</div>
                            <div>
                                <span className="font-bold block">Direct Distribution</span>
                                DUSD holders receive the yield directly. No self-looping, no basis-trade recursion.
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mb-6">
                    Historical annualized funding rates across major venues have averaged <strong>15 to 25 percent</strong> since 2019, with frequent spikes above 50 percent during bull runs. Even after conservative slippage and operational costs, net APY to DUSD holders consistently lands in the high teens to low twenties across cycles.
                </p>
                <p>
                    Future iterations will add optional privacy layers (zk proofs or mixer integration) to meet institutional compliance requirements without sacrificing self-custody.
                </p>
            </div>
        </Section>
    );
};

export default ProductEcosystem;
