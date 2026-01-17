"use client";
import React, { useState } from 'react';
import Title from './Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }

    // Success Logic
    toast.success("Subscribed successfully! Welcome to VolTic.", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    // Clear the input field
    setEmail("");
  };

  return (
    <section className="">
      {/* Toast Container must be present in the component or App.js */}
      <ToastContainer />

      <div className="container mx-auto px-4">
        
        <Title 
          title={"Stay Connected"} 
          subtitle={"Subscribe to our newsletter to receive the latest updates, safety tips, and exclusive offers from VolTic."}
        />

        <div className="mt-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubscribe} className="bg-white p-2 md:p-4 rounded-2xl shadow-xl border border-slate-100">
            <div className="join w-full">
              <input 
                className="input input-bordered join-item w-full bg-slate-50 text-slate-800 focus:outline-none focus:border-blue-500 border-none" 
                placeholder="Enter your email address..." 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="btn btn-primary join-item bg-blue-600 border-none px-6 md:px-10 text-white hover:bg-blue-700 transition-all font-bold uppercase tracking-wide"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          <p className="mt-4 text-center text-slate-400 text-sm">
            Don't worry, we don't spam. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;