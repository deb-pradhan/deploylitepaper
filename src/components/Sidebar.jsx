import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'hero', label: 'Abstract' },
        { id: 'intro', label: '1. The Idle Majority' },
        { id: 'thesis', label: '2. Economic Thesis' },
        { id: 'overview', label: '3. What Deploy Is' },
        { id: 'product', label: '4. Product Stack' },
        { id: 'sustainability', label: '5. Structural Yield' },
        { id: 'yaas', label: '6. Yield as a Service' },
        { id: 'transparency', label: '7. Transparency' },
        { id: 'roadmap', label: '8. Roadmap' },
        { id: 'invitation', label: '9. An Open Invitation' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-paper-bg border border-paper-border rounded-md shadow-sm"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <nav className={clsx(
                "w-64 h-screen fixed left-0 top-0 border-r border-paper-border bg-paper-bg p-8 overflow-y-auto transition-transform duration-300 z-40",
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                <div className="mb-12">
                    <div className="w-8 h-8 bg-paper-accent rounded flex items-center justify-center mb-4">
                        <span className="font-bold text-white">D</span>
                    </div>
                    <h1 className="font-serif font-bold text-lg text-paper-text">Deploy Litepaper</h1>
                    <p className="text-xs text-paper-muted mt-1">November 2025</p>
                </div>

                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block py-2 px-3 text-sm rounded-md transition-colors",
                                    activeSection === item.id
                                        ? "bg-paper-border text-paper-text font-medium"
                                        : "text-paper-muted hover:text-paper-text hover:bg-paper-border/50"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-paper-border">
                    <button className="w-full py-2 px-4 bg-paper-accent text-white text-sm font-medium rounded-md hover:bg-black transition-colors">
                        Launch App
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
