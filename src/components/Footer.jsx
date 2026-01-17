import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 mt-20">
            {/* Upper Footer: Main Links & Info */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.972 9.5h4.778a.75.75 0 0 1 .58 1.222l-8 10a.75.75 0 0 1-1.233-.806L11.028 14.5H6.25a.75.75 0 0 1-.58-1.222l8-10a.75.75 0 0 1 .945-.183Z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">Vol<span className="text-blue-500">Tic</span></span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Leading the future of electrical engineering with smart, safe, and energy-efficient solutions for homes and industries worldwide.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fab fa-facebook text-xl"></i></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='text-center'>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">Featured Products</a></li>
                            <li><a href="#" className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">Industrial Solutions</a></li>
                            <li><a href="#" className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">Safety Certificates</a></li>
                            <li><a href="#" className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">Partner Program</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500">📍</span>
                                <span>123 Voltage Tower, Tech Plaza,<br />Industrial Area, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📞</span>
                                <span>+880 1234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">✉️</span>
                                <span>support@voltic.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    {/* <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Newsletter</h4>
                        <p className="text-slate-400 mb-4 text-sm">Get updates on new technology and safety tips.</p>
                        <div className="join w-full">
                            <input
                                className="input input-bordered join-item w-full bg-slate-800 border-slate-700 text-white focus:outline-none focus:border-blue-500"
                                placeholder="email@example.com"
                            />
                            <button className="btn btn-primary join-item bg-blue-600 border-none hover:bg-blue-700">Go</button>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* Lower Footer: Copyright & Legal */}
            <div className="border-t border-slate-800 bg-slate-950/50">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                    <p>© 2026 VolTic Electricals. All rights reserved.</p>
                    <div className="flex gap-6 ">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;