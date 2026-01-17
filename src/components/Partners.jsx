import React from 'react';

const Partners = () => {
    const partners = [
        { id: 1, name: "Samsung", logo: "https://i.ibb.co.com/TxS1MmWN/image.png" },
        // { id: 2, name: "Panasonic", logo: "https://i.ibb.co.com/pvGvbdYq/image.png" },
        // { id: 3, name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
        { id: 4, name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" },
        { id: 5, name: "Schneider", logo: "https://www.tvh.com/sites/tvh/files/styles/max_650x650/public/2023-08/Schneider-Electric-logo-jpg-.png?itok=pxXk-20m" },
        { id: 6, name: "Philips", logo: "https://1000logos.net/wp-content/uploads/2017/05/Phillips-Logo-2008.png" },
    ];

    // Double the partners for seamless looping
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            {/* Inline CSS for Animation */}
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
                    Global Collaborations
                </h2>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white">
                    Our Devices Power Global Leaders
                </h3>
                <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Scrolling Container */}
            <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent">

                <div className="animate-infinite-scroll flex items-center py-10">
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="mx-4 md:mx-8 px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                    {/* Third copy for super smooth transition on ultra-wide screens */}
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`extra-${index}`}
                            className="mx-4 md:mx-8 px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;