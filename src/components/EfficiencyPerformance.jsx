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
                <h3 className="text-xl font-bold mb-6 text-center md:text-left">The Integration Pipeline</h3>
                
                <div className="relative py-8 overflow-hidden">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-paper-border -z-10 hidden md:block transform -translate-y-1/2"></div>
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-paper-border -z-10 md:hidden"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                        
                        {/* Node 1 */}
                        <div className="flex flex-col items-center bg-white p-4 border border-paper-border rounded-lg shadow-sm w-full md:w-48 relative z-10">
                            <div className="w-10 h-10 bg-paper-accent text-white rounded-full flex items-center justify-center font-bold mb-3 text-lg">1</div>
                            <h4 className="font-bold text-center mb-2">Lending Platforms</h4>
                            <p className="text-xs text-center text-paper-muted">Collateral integration</p>
                        </div>

                        {/* Node 2 */}
                        <div className="flex flex-col items-center bg-white p-4 border border-paper-border rounded-lg shadow-sm w-full md:w-48 relative z-10">
                             <div className="w-10 h-10 bg-paper-accent text-white rounded-full flex items-center justify-center font-bold mb-3 text-lg">2</div>
                            <h4 className="font-bold text-center mb-2">Payment Providers</h4>
                            <p className="text-xs text-center text-paper-muted">Cast Card & Fintechs</p>
                        </div>

                        {/* Node 3 */}
                        <div className="flex flex-col items-center bg-white p-4 border border-paper-border rounded-lg shadow-sm w-full md:w-48 relative z-10">
                             <div className="w-10 h-10 bg-paper-accent text-white rounded-full flex items-center justify-center font-bold mb-3 text-lg">3</div>
                            <h4 className="font-bold text-center mb-2">Institutions</h4>
                            <p className="text-xs text-center text-paper-muted">Terminals (SAS)</p>
                        </div>

                        {/* Node 4 */}
                        <div className="flex flex-col items-center bg-white p-4 border border-paper-border rounded-lg shadow-sm w-full md:w-48 relative z-10">
                             <div className="w-10 h-10 bg-paper-accent text-white rounded-full flex items-center justify-center font-bold mb-3 text-lg">4</div>
                            <h4 className="font-bold text-center mb-2">Enterprise</h4>
                            <p className="text-xs text-center text-paper-muted">Private Networks (Canton)</p>
                        </div>

                    </div>
                </div>

                <p className="text-lg font-serif italic mt-8 text-center md:text-left">
                    "The more capital that flows through the engine, the better the execution becomes, the higher the yield, the faster the flywheel spins."
                </p>
            </div>
        </Section>
    );
};

export default EfficiencyPerformance;
