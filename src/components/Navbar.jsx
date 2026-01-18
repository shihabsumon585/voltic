"use client";
import Link from 'next/link';
import React from 'react'
// import logo from "/logo.png";

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
        <Link href={"/"}>
          <img src={"/logo.png"} className='w-20' alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/login"} className='btn btn-primary'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar;
