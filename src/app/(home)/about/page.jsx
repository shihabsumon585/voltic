import React from 'react';
// আপনার প্রজেক্টের পাথ অনুযায়ী Title কম্পোনেন্টটি ইমপোর্ট করুন
import Title from '@/components/Title';
import { ShieldCheck, Zap, BatteryCharging, Headset } from 'lucide-react';

const About = () => {
    const features = [
        {
            id: 1,
            icon: <Zap className="w-10 h-10 text-yellow-500" />,
            title: "Energy Efficiency",
            description: "Our solutions are designed to minimize energy waste and reduce your utility costs significantly."
        },
        {
            id: 2,
            icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
            title: "Safety Guaranteed",
            description: "Every VolTic product undergoes rigorous testing to ensure maximum safety for your home and office."
        },
        {
            id: 3,
            icon: <BatteryCharging className="w-10 h-10 text-blue-500" />,
            title: "Innovative Technology",
            description: "We bring the latest smart electrical innovations to your doorstep for a seamless experience."
        },
        {
            id: 4,
            icon: <Headset className="w-10 h-10 text-purple-600" />,
            title: "24/7 Support",
            description: "Our dedicated team of engineers is always ready to assist you with any electrical needs."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* আপনার দেওয়া টাইটেল সেকশন */}
                <div className="text-center mb-16">
                    <Title
                        title={"Why Choose VolTic Solutions"}
                        subtitle={"Experience the perfect blend of innovation, safety, and efficiency with our world-class electrical products and services."}
                    />
                </div>

                {/* মেইন কন্টেন্ট গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-x-5">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 bg-gray-50 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* এক্সট্রা সেকশন: Our Mission (ঐচ্ছিক) */}
                <div className="mt-20 bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Powering Your Future with Confidence</h2>
                        <p className="text-blue-100 text-lg">
                            At VolTic, we don't just sell electrical products; we provide peace of mind. Our mission is to lead the world towards a more sustainable and electrified future.
                        </p>
                    </div>
                    {/* <div className="flex gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                            Contact Us
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;