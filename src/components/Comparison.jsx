import React from 'react';
import Title from './Title'; // আপনার টাইটেল কম্পোনেন্ট

const Comparison = () => {
    const benefits = [
        { feature: "Voltage Stability", ordinary: "Fluctuates frequently", voltic: "99.9% Constant Stable" },
        { feature: "Energy Consumption", ordinary: "High Power Loss", voltic: "Eco-friendly & Low Loss" },
        { feature: "Product Lifespan", ordinary: "1-2 Years approx", voltic: "5+ Years Warranty" },
        { feature: "Safety Sensors", ordinary: "Basic Fuse", voltic: "Smart AI Surge Protection" },
        { feature: "Build Quality", ordinary: "Standard Plastic", voltic: "Fire-resistant Polymer" },
    ];

    return (
        <section className="">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <Title
                    title={"The VolTic Advantage"}
                    subtitle={"See how VolTic redefines safety and efficiency compared to ordinary electrical solutions."}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">

                    {/* Left: DaisyUI Diff Component (Visual Comparison) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center lg:text-left">Visual Performance</h3>
                        <div className="diff aspect-[16/9] rounded-2xl shadow-2xl border-4 border-blue-600">
                            <div className="diff-item-1">
                                {/* VolTic Performance (Clear/Stable) */}
                                <div className="bg-blue-600 text-white grid place-content-center text-4xl md:text-6xl font-black italic">
                                    VOLTIC STABLE
                                </div>
                            </div>
                            <div className="diff-item-2">
                                {/* Ordinary Performance (Distorted/Flicker) */}
                                <div className="bg-slate-300 text-slate-600 grid place-content-center text-4xl md:text-6xl font-black italic opacity-50">
                                    ORDINARY FLICKER
                                </div>
                            </div>
                            <div className="diff-resizer"></div>
                        </div>
                        <p className="text-sm text-slate-500 text-center italic">Slide the bar to see the stability difference.</p>
                    </div>

                    {/* Right: Detailed Comparison Table */}
                    <div className="overflow-x-auto">
                        <table className="table w-full border-separate border-spacing-y-2">
                            <thead>
                                <tr className="text-slate-600 text-lg">
                                    <th className="bg-transparent">Features</th>
                                    <th className="bg-transparent">Ordinary</th>
                                    <th className="bg-blue-600 text-white rounded-t-xl text-center font-bold">VolTic</th>
                                </tr>
                            </thead>
                            <tbody>
                                {benefits.map((item, index) => (
                                    <tr key={index} className="bg-slate-50 hover:bg-slate-100 transition-colors">
                                        <td className="font-semibold text-slate-700">{item.feature}</td>
                                        <td className="text-red-500 line-through opacity-70">{item.ordinary}</td>
                                        <td className="bg-blue-50 text-blue-700 font-bold text-center border-x-2 border-blue-100 last:border-b-2">
                                            {item.voltic}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                            <p className="text-sm text-yellow-800 font-medium">
                                <strong>Did you know?</strong> Switching to VolTic can save up to 30% on your monthly electricity bill due to better conductivity.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Comparison;