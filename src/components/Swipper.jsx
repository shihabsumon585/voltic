"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { useRouter } from 'next/navigation';

const slides = [
    {
        img: "/slider1.avif",
        tagline: "Powering Your Home with Smart Energy.",
        subText: "Explore our latest collection of premium circuit breakers."
    },
    {
        img: "/slider2.png",
        tagline: "Reliable Electrical Solutions for Safety.",
        subText: "Industrial grade cables for maximum durability."
    },
    {
        img: "/slider3.jpg",
        tagline: "Brighten Your Space with VolTic LED.",
        subText: "Energy-efficient lighting solutions for a brighter tomorrow."
    },
];

const VolTicSlider = () => {
    const router = useRouter();

    return (
        <div className="w-full ">
            {/* Height adjusted to h-[50vh] or h-[60vh] for proper screen ratio */}
            <Swiper
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper h-[50vh] md:h-[60vh] min-h-[350px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        {/* Image fix */}
                        <img
                            className="w-full h-full object-cover"
                            src={slide.img}
                            alt="VolTic Product"
                        />

                        {/* Darker Overlay for better text visibility */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-4">

                            <div className="max-w-4xl space-y-4">
                                {/* Tagline - Font size slightly reduced to fit smaller height */}
                                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <Typewriter
                                        words={[slide.tagline]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                    />
                                </h2>

                                <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
                                    {slide.subText}
                                </p>

                                {/* Action Buttons - Compact size */}
                                <div className="flex justify-center gap-4 pt-2">
                                    <button
                                        onClick={() => router.push("/products")}
                                        className="px-6 py-2.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all text-sm md:text-base"
                                    >
                                        Shop Now
                                    </button>
                                    <button
                                        onClick={() => router.push("/products")}
                                        className="px-6 py-2.5 rounded border border-white text-white font-medium hover:bg-white hover:text-black transition-all text-sm md:text-base"
                                    >
                                        Catalog
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VolTicSlider;