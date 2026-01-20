import products from '../../../../public/products.json';
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import React from 'react';

const Products = () => {
    return (
        <div className=''>
            <div className='py-16'>
                <Title
                    className="pt-10"
                    title={"Explore Our Premium Collection"}
                    subtitle={"Discover a wide range of high-performance electrical solutions designed to power your world with reliability and precision."}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
