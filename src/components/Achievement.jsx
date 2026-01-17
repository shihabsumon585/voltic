import React from 'react';
import Title from './Title';

const Achievement = () => {
    return (
        <section className="w-full ">
            <div className="container mx-auto px-4">
                {/* Section Header (আপনি আগে যে Header টি চেয়েছিলেন সেটির ছোট ভার্সন) */}
                <Title
                    title={"Our Impact in Numbers"}
                    subtitle={"Driven by excellence and trusted by thousands, we provide the power that keeps the world moving."}
                ></Title>

                {/* DaisyUI Stats Container */}
                <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-white border border-slate-100">

                    {/* Stat 1: Installations */}
                    <div className="stat place-items-center py-8">
                        <div className="stat-icon text-blue-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <div className="stat-title text-slate-500 font-medium">Successful Projects</div>
                        <div className="stat-value text-blue-600">5000+</div>
                        <div className="stat-desc font-semibold text-slate-400">Installations Worldwide</div>
                    </div>

                    {/* Stat 2: Stability */}
                    <div className="stat place-items-center py-8">
                        <div className="stat-icon text-yellow-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                        <div className="stat-title text-slate-500 font-medium">Power Efficiency</div>
                        <div className="stat-value text-yellow-500">99%</div>
                        <div className="stat-desc font-semibold text-slate-400">Voltage Stability</div>
                    </div>

                    {/* Stat 3: Global Service */}
                    <div className="stat place-items-center py-8">
                        <div className="stat-icon text-green-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div className="stat-title text-slate-500 font-medium">Global Presence</div>
                        <div className="stat-value text-green-600">10+</div>
                        <div className="stat-desc font-semibold text-slate-400">Countries Served</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Achievement;