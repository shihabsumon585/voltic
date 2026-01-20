import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import React from 'react'

const Products = async () => {

    const res = await fetch('http://localhost:3000/products.json', {
        cache: 'no-store' // always fresh data (SSR)
    });

    const products = await res.json();
    console.log(products)

    return (
        <div className=''>


            <div className='py-16'>
                <Title
                    className="pt-10"
                    title={"Explore Our Premium Collection"}
                    subtitle={"Discover a wide range of high-performance electrical solutions designed to power your world with reliability and precision."}
                ></Title>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">


                {products.map((product) => (
                    <ProductCard key={product.id} product={product} ></ProductCard>
                ))}
            </div>
        </div>
    )
}

export default Products
