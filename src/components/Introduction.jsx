import React from 'react';
import Section from './Section';

const Introduction = () => {
    return (
        <Section id="intro" subtitle="1. The Idle Majority" title="A Trillion-Dollar Tragedy">
            <div className="mb-8">
                <p className="mb-6">
                    In 2025, decentralized finance possesses the most sophisticated financial primitives ever created: instant global settlement, programmable money, deep liquidity across thousands of assets. Yet capital efficiency remains shockingly low.
                </p>
                <p className="mb-6">
                    More than 80 percent of all stablecoin supply earns zero yield. Tens of millions of Bitcoin and Ethereum holders watch their wealth appreciate in cold storage but rarely put it to work without accepting directional risk or surrendering custody. Institutions allocate cautiously, repelled by the recurring blowups of over leveraged, self looping stablecoin experiments.
                </p>
                <p className="mb-6 font-bold">
                    Three structural failures keep the majority of capital idle.
                </p>

                <ul className="list-disc pl-6 space-y-4 mb-8 marker:text-paper-muted">
                    <li>
                        <strong>Fragmented Infrastructure:</strong> Yield is fragmented across dozens of chains, venues, and strategies, requiring constant bridging, monitoring, and rebalancing that even professional teams struggle to execute efficiently.
                    </li>
                    <li>
                        <strong>Fake Yields:</strong> Most visible yields are fake. They come from token inflation rather than genuine economic demand. When emissions stop, the yield vanishes and the price collapses. Users have been trained by experience to distrust any APY above treasury-bill rates.
                    </li>
                    <li>
                        <strong>Lack of Trusted Automation:</strong> Trusted automation at scale simply does not exist. Existing vaults either demand full custody transfer or expose users to hidden smart-contract risks, opaque governance tokens, or single points of failure.
                    </li>
                </ul>

                <p className="text-lg font-serif italic text-paper-muted border-l-2 border-paper-accent pl-4">
                    The result is a modern tragedy: the largest pool of programmable capital in human history sits frozen, unable to participate in its own economy.
                </p>
            </div>
        </Section>
    );
};

export default Introduction;
