"use client";
import Link from 'next/link';
import React from 'react'
import LoginButton from './LoginButton';
// import { signIn } from 'next-auth/react';

const Navbar = () => {

  const user = { email: "shihabsumon585@gmail.com" || null };

  const links = <>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/products"}>Products</Link></li>
    <li><Link href={"/about"}>About</Link></li>
    <li><Link href={"/faq"}>FAQ</Link></li>
    <li><Link href={"/contact"}>Contact</Link></li>

    {user?.email &&
      <>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
        <li><Link href={"/profile"}>Profile</Link></li>
        <li><Link href={"/settings"}>Settings</Link></li>
      </>}
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 top-0 z-50" >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="bg-blue-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.972 9.5h4.778a.75.75 0 0 1 .58 1.222l-8 10a.75.75 0 0 1-1.233-.806L11.028 14.5H6.25a.75.75 0 0 1-.58-1.222l8-10a.75.75 0 0 1 .945-.183Z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Vol<span className="text-blue-500">Tic</span></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <LoginButton></LoginButton> */}
        <Link
          href={"/login"}
          onClick={() => signIn()}
          className='btn bg-blue-600 border-none text-white hover:bg-blue-700 h-12 text-lg shadow-lg shadow-blue-200'
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
