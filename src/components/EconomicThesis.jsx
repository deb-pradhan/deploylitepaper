import React from 'react';
import Section from './Section';

const EconomicThesis = () => {
    return (
        <Section id="thesis" subtitle="2. Economic Thesis" title="A Modern Gresham’s Law">
            <div className="mb-12">
                <p className="mb-6">
                    History provides the clearest lens for understanding the future of money.
                </p>
                <p className="mb-6">
                    During the Wildcat Banking era of the 19th-century United States, hundreds of private banks issued their own paper notes. Savvy citizens quickly learned to hoard gold and silver while spending the depreciating paper in daily commerce. Sir Thomas Gresham’s 16th-century observation was proven once again: <strong>bad money drives out good.</strong>
                </p>
                <p className="mb-6">
                    Crypto is recreating the same dynamic, only in reverse.
                </p>
                <p className="mb-6">
                    Bitcoin and Ethereum have become the new gold and silver: scarce, deflationary, socially incontestable stores of value with unbreakable consensus. Fiat-pegged stablecoins are the new paper notes: infinitely printable, slowly depreciating, perfect for transactions yet terrible for long-term holding.
                </p>
                <p className="mb-8">
                    The rational strategy is therefore the exact opposite of what most participants currently do.
                </p>

                <div className="p-6 bg-paper-bg border border-paper-border rounded-lg mb-8">
                    <ul className="space-y-2 font-serif text-lg">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-paper-accent"></span>
                            Never sell your Bitcoin or Ethereum again.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-paper-accent"></span>
                            Never hold large idle balances in inflationary fiat tokens.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-paper-accent"></span>
                            <strong>Hold wealth in the superior asset.</strong>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-paper-accent"></span>
                            <strong>Hold debt and spending power in the inferior asset.</strong>
                        </li>
                    </ul>
                </div>

                <p className="mb-12">
                    Deploy exists to make this strategy not just possible but automatic, productive, and available to everyone from retail holders to sovereign-scale institutions.
                </p>

                {/* Diagram 1: The Deploy Neobank Flow */}
                <figure className="my-12 p-8 border border-paper-border rounded bg-white overflow-x-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px]">
                        <div className="p-6 border border-black rounded text-center w-40 h-24 flex items-center justify-center font-medium">User<br />Wealth</div>
                        <div className="h-8 w-px bg-black md:h-px md:w-12 shrink-0"></div>
                        <div className="p-6 border-2 border-black rounded text-center w-40 h-24 flex items-center justify-center font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Deploy<br />Protocol</div>
                        <div className="h-8 w-px bg-black md:h-px md:w-12 shrink-0"></div>
                        <div className="p-6 border border-black bg-gray-50 rounded text-center w-40 h-24 flex items-center justify-center">D-Asset<br />Collateral</div>
                        <div className="h-8 w-px bg-black md:h-px md:w-12 shrink-0"></div>
                        <div className="p-6 border border-black rounded text-center w-40 h-24 flex items-center justify-center">Neobank<br />Interface</div>
                        <div className="h-8 w-px bg-black md:h-px md:w-12 shrink-0"></div>
                        <div className="p-6 border border-black rounded text-center w-40 h-24 flex items-center justify-center">Everyday<br />Commerce</div>
                    </div>
                    <figcaption className="text-center text-sm text-paper-muted mt-8 font-medium">Figure 1: The Deploy Neobank Flow</figcaption>
                </figure>
            </div>
        </Section>
    );
};

export default EconomicThesis;
