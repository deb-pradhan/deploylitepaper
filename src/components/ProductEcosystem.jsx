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
            </div>

            <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">4.2 Canton Network: The Privacy-Native Settlement Layer for Institutional dUSD</h3>
                <p className="mb-6">
                    Public blockchains cannot host institutional capital at scale. The radical transparency that makes DeFi auditable also exposes trading strategies, payment flows, and collateral positions to competitors and bad actors. This is why the majority of institutional capital remains off-chain.
                </p>
                <p className="mb-6">
                    <strong>Canton Network</strong> solves this fundamental barrier. Unlike other L1s built around transparency-by-default, Canton was designed from the ground up with native institutional-grade privacy—without compromising the composability of public blockchains.
                </p>

                <div className="p-6 bg-paper-bg border border-paper-border rounded-lg mb-8">
                    <h4 className="font-bold mb-4">Why Canton for dUSD</h4>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">1</div>
                            <div>
                                <span className="font-bold block">Sub-Transaction Level Privacy</span>
                                Smart contracts ensure each party only receives the parts of a transaction that apply to them. In a DvP settlement, the bank sees only cash movement; the registrar sees only asset transfer. Selective disclosure on a need-to-know basis.
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">2</div>
                            <div>
                                <span className="font-bold block">No Mempool, No Leakage</span>
                                Eliminates front-running, strategy inference, and metadata correlation. dUSD holders can execute without broadcasting their positions to the world.
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">3</div>
                            <div>
                                <span className="font-bold block">Institutional Trust & Liquidity</span>
                                Canton is trusted by Goldman Sachs, BNP Paribas, HSBC, Broadridge, and Circle. Market makers including QCP, DRW, GSR, FalconX, Flowdesk, and B2C2 are already active on the network. This existing institutional ecosystem provides deep liquidity and established workflows for dUSD.
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-paper-accent text-white flex items-center justify-center shrink-0 font-bold">4</div>
                            <div>
                                <span className="font-bold block">Battle-Tested at Scale</span>
                                Canton already processes $6T+ in on-chain assets and over $280 billion in daily U.S. Treasury repo trades. This is not theoretical infrastructure—it's live institutional rails.
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-lg font-serif italic text-paper-muted border-l-2 border-paper-accent pl-4 mb-6">
                    "Canton is the first AllFi blockchain—the only viable path for both institutions and crypto-native builders to compose real-world finance with crypto-style velocity."
                </p>

                <p>
                    By deploying dUSD on Canton, we unlock the institutional market that has been structurally locked out of DeFi yields. Corporate treasuries, asset managers, and regulated entities can finally access delta-neutral yields without exposing sensitive financial data on a public ledger. This is how dUSD scales from millions to billions.
                </p>
            </div>
        </Section>
    );
};

export default ProductEcosystem;
