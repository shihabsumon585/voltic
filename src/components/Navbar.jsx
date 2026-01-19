"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import userImg from "../../public/user.png";

const Navbar = () => {
  const { data: session, status } = useSession();

  const links = (
    <>
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/products"}>Products</Link></li>
      <li><Link href={"/about"}>About</Link></li>

      {/* {session?.user?.email && (
        <li><Link href={"/profile"}>Profile</Link></li>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 top-0 z-50 "  >
      {/* ---------- Start ---------- */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="currentColor" className="w-6 h-6 text-white">
              <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.972 9.5h4.778a.75.75 0 0 1 .58 1.222l-8 10a.75.75 0 0 1-1.233-.806L11.028 14.5H6.25a.75.75 0 0 1-.58-1.222l8-10a.75.75 0 0 1 .945-.183Z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">
            Vol<span className="text-blue-500">Tic</span>
          </span>
        </Link>
      </div>

      {/* ---------- Center ---------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* ---------- End ---------- */}
      <div className="navbar-end">
        {status === "loading" ? null : session ? (
          /* ===== Avatar Dropdown ===== */
          <div className="dropdown dropdown-start ">
            <div tabIndex={0} role="button" className="">
              <div className="w-10 rounded-full ">
                <Image
                  src={userImg}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full "
                /> 
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              style={{ left: '-208px', right: 'auto' }}
            >
              <li className="font-semibold cursor-default">
                {session.user.name || session.user.email}
              </li>

              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="btn bg-blue-600 border-none text-white hover:bg-blue-700 h-12 text-lg shadow-lg shadow-blue-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
