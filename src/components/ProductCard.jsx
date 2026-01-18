import React from 'react';
import { ShieldCheck, Zap, Thermometer, BatteryCharging } from 'lucide-react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const { name, category, price, rating, specifications, stock_status, metadata, features } = product;

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Header Image Section */}
            <div className="relative h-48 bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-bold text-xl uppercase tracking-widest italic">
                    {category}
                </span>
                {metadata.energy_star_rated && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Zap size={12} fill="white" /> ENERGY STAR
                    </div>
                )}
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2 py-1 rounded-md border border-slate-200">
                    {product.id}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{name}</h3>
                    <span className="text-blue-700 font-bold text-xl">${price}</span>
                </div>

                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                        {"★".repeat(Math.floor(rating))}
                        <span className="text-slate-300">{"★".repeat(5 - Math.floor(rating))}</span>
                    </div>
                    <span className="ml-2 text-xs font-medium text-slate-500">{rating} Rating</span>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(specifications).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <p className="text-[10px] uppercase text-slate-400 font-bold leading-none mb-1">
                                {key.replace('_', ' ')}
                            </p>
                            <p className="text-xs font-semibold text-slate-700 truncate">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {features.map((feature, index) => (
                        <span key={index} className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-medium">
                            • {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer Action Section */}
            <div className="px-5 pb-5 mt-auto">
                <div className="flex items-center gap-2 mb-4 text-[11px] text-slate-500">
                    <ShieldCheck size={14} className="text-blue-600" />
                    <span>{metadata.warranty_years} Year VolTic Warranty</span>
                </div>

                <Link href={`/products/${product.id}`} className='btn rounded-2xl  w-full bg-accent text-white'>Details</Link>

                <p className={`text-center mt-2 text-[10px] font-bold uppercase tracking-tighter ${stock_status === "In Stock" ? "text-emerald-500" : "text-amber-500"
                    }`}>
                    {stock_status}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;