'use client';

import {
    Zap,
    ShieldCheck,
    Truck,
    RotateCcw,
    Info,
    ChevronRight,
    Star,
    ShoppingCart,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import productsData from '../../../../../public/products.json'; // import static JSON

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const found = productsData.find(p => p.id.toString() === id);
            setProduct(found || null);
        }
    }, [id]);

    if (!product) {
        return <div className="p-10 text-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12 text-slate-900">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                    <span>Products</span>
                    <ChevronRight size={14} />
                    <span>{product.category}</span>
                    <ChevronRight size={14} />
                    <span className="text-slate-900 font-medium">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center border">
                            <div className="text-slate-300 flex flex-col items-center">
                                <Zap size={80} />
                                <span className="mt-4 text-2xl font-bold italic">
                                    {product.brand}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div>
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3">
                            {product.category}
                        </span>

                        <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <span className="text-slate-900 font-bold">{product.rating}</span>
                            </div>
                            <span className="text-slate-400">|</span>
                            <span className="text-sm">SKU: {product.id}</span>

                            {product.stock_status === 'In Stock' ? (
                                <span className="flex items-center gap-1 text-emerald-600 text-sm font-bold">
                                    <CheckCircle2 size={16} /> In Stock
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 text-amber-600 text-sm font-bold">
                                    <AlertCircle size={16} /> {product.stock_status}
                                </span>
                            )}
                        </div>

                        <p className="text-4xl mb-8">
                            ${product.price.toLocaleString()} <span className="text-lg text-slate-400">USD</span>
                        </p>

                        {/* Features */}
                        <h3 className="text-sm font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
                            <Info size={16} /> Highlights
                        </h3>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                            <button className="flex-1 border py-4 rounded-xl font-bold">
                                Find a Dealer
                            </button>
                        </div>

                        {/* Trust */}
                        <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t">
                            <TrustItem icon={<ShieldCheck />} label={`${product.metadata.warranty_years}yr Warranty`} />
                            <TrustItem icon={<Truck />} label="Fast Delivery" />
                            <TrustItem icon={<RotateCcw />} label="30-Day Return" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

const TrustItem = ({ icon, label }) => (
    <div className="flex flex-col items-center text-center text-slate-400">
        <div className="text-blue-600 mb-2">{icon}</div>
        <span className="text-[10px] font-bold uppercase">{label}</span>
    </div>
);

export default ProductDetails;
