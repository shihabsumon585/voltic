import React from 'react';
import Title from './Title';

const Featured = () => {
    const features = [
        {
            id: 1,
            title: "Premium Quality",
            description: "We provide industry-certified electrical components that ensure 100% safety and durability.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-3.121-1.593 3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            ),
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            id: 2,
            title: "Fast Installation",
            description: "Our expert engineers are ready to set up your electrical systems quickly and efficiently.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            bgColor: "bg-yellow-100",
            iconColor: "text-yellow-600",
        },
        {
            id: 3,
            title: "24/7 Support",
            description: "Facing an electrical emergency? Our support team is available round the clock for you.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
            ),
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
        },
    ];

    return (
        <section className=" bg-white">
            <div className="container mx-auto px-4">

                <Title
                    title={"Why Choose VolTic Solutions"}
                    subtitle={"Experience the perfect blend of innovation, safety, and efficiency with our world-class electrical products and services."}
                ></Title>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group p-8 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md text-center md:text-left"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 ${feature.bgColor} ${feature.iconColor} rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>

                            {/* Simple Bottom Link */}
                            <div className="mt-6 flex items-center justify-center md:justify-start text-blue-600 font-semibold text-sm cursor-pointer group-hover:underline">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Featured;