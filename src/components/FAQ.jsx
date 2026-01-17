import React from 'react';
import Title from './Title'; // Your Title component

const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "Do VolTic products work with all voltage ranges?",
            answer: "Yes, our products are engineered to operate within a wide voltage range (110V - 440V), ensuring your devices remain safe even during significant low-voltage fluctuations."
        },
        {
            id: 2,
            question: "What is your warranty policy?",
            answer: "We offer a 2 to 5-year replacement warranty on most VolTic devices. If any technical issues arise, our dedicated support team ensures a resolution within 24 hours."
        },
        {
            id: 3,
            question: "Can I install VolTic devices by myself?",
            answer: "For consumer gadgets, we provide easy-to-follow user manuals. For industrial panels or heavy-duty stabilizers, our certified engineers provide free professional installation services."
        },
        {
            id: 4,
            question: "Does using VolTic products help reduce electricity bills?",
            answer: "Absolutely. Our smart energy-saving technology minimizes power loss and improves conductivity, which can reduce your monthly electricity consumption by up to 20-30%."
        },
        {
            id: 5,
            question: "How do I contact support in case of an emergency?",
            answer: "You can reach our 24/7 hotline at +880-XXXXXXX or use the Live Chat feature on our website. Our technical emergency team is always on standby."
        }
    ];

    return (
        <section className="w-full">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Section Title */}
                <Title
                    title={"Frequently Asked Questions"}
                    subtitle={"Everything you need to know about VolTic products, safety, and support."}
                />

                <div className="mt-12 space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="collapse collapse-arrow bg-slate-50 border border-slate-100 rounded-xl transition-all duration-300 hover:border-blue-300 shadow-sm"
                        >
                            {/* Radio input creates the accordion effect (only one open at a time) */}
                            <input type="radio" name="voltic-faq-accordion" defaultChecked={faq.id === 1} />

                            {/* Question */}
                            <div className="collapse-title text-lg md:text-xl font-bold text-slate-800 py-5">
                                {faq.question}
                            </div>

                            {/* Answer */}
                            <div className="collapse-content text-slate-600 leading-relaxed">
                                <p className="pb-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                {/* <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-100">
                    <p className="text-blue-900 font-medium">Still have more questions?</p>
                    <button className="btn btn-primary bg-blue-600 border-none px-8 hover:bg-blue-700">
                        Contact Expert
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default FAQ;