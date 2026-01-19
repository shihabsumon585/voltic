"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import RegisterButton from '@/components/RegisterButton';
import { postUser } from '@/actions/server/auth';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const formData = { name, email, password };
        postUser(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 md:bg-white p-4">
            <div className="flex w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden bg-white min-h-[600px]">

                {/* Left Side: Branding */}
                <div className="hidden lg:flex w-1/2 bg-slate-900 flex-col justify-between p-12 relative overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="z-10">
                        <Link href="/" className="flex items-center gap-2 text-white italic">
                            <span className="text-2xl font-black tracking-tighter uppercase">Vol<span className="text-blue-500">Tic</span></span>
                        </Link>
                    </div>
                    <div className="z-10">
                        <h2 className="text-4xl font-bold text-white leading-tight">Join the Future of <br /> <span className="text-blue-500">Energy Management</span></h2>
                        <p className="text-slate-400 mt-4 text-lg">Create your VolTic account to optimize power grid efficiency.</p>
                    </div>
                    <div className="z-10 text-slate-500 text-sm">© 2026 VolTic Solutions Ltd.</div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h3 className="text-3xl font-black text-slate-800 mb-2">Create Account</h3>
                        <p className="text-slate-500 mb-8">Enter your details to get started.</p>

                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Name Fields */}
                            <div className="">
                                <div className="form-control w-full">
                                    <label className="label font-bold text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="John"
                                        className="input input-bordered w-full bg-slate-50 focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="form-control w-full">
                                <label className="label font-bold text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="name@company.com"
                                    className="input input-bordered w-full bg-slate-50 focus:border-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                           

                            {/* Password Input with Toggle */}
                            <div className="form-control w-full">
                                <label className="label font-bold text-slate-700">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        placeholder="••••••••"
                                        className="input input-bordered w-full bg-slate-50 focus:border-blue-500 focus:outline-none pr-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <p className="label-text-alt text-slate-500 mt-1">Must be at least 8 characters with numbers & symbols</p>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="form-control w-full">
                                <label className="label font-bold text-slate-700">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full bg-slate-50 focus:border-blue-500 focus:outline-none pr-12"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start gap-3 py-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-md mt-1" id="terms" required />
                                <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                                    I agree to the <Link href="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
                                </label>
                            </div>

                            

                            {/* Register Button */}
                            <RegisterButton />

                            <div className="divider text-slate-400 text-xs uppercase tracking-widest my-8">Or sign up with</div>

                            <button type="button" className="btn btn-outline w-full border-slate-200 text-slate-600 hover:bg-slate-50 gap-3 font-bold">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="Google" />
                                Sign up with Google
                            </button>
                        </form>

                        <p className="text-center mt-8 text-slate-600">
                            Already have an account? <Link href="/login" className="text-blue-600 font-bold hover:underline">Sign in here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
