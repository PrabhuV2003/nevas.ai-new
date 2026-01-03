// src/components/Navbar.jsx
import React, { useState } from "react";
import { assets } from "../assets/assest";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b relative z-50 border-[#e5e5e5]">
      <div className="relative mx-auto max-w-6xl
        flex items-center justify-between
        py-4 px-4 sm:px-6 lg:px-0">

        {/* LEFT */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <img
            src={assets.logo}
            alt="nevas.ai logo"
            className="w-[140px] sm:w-[160px]"
          />

          {/* Desktop Menu */}
          <nav className="hidden lg:block mt-5">
            <ul className="flex gap-10 text-[14px] font-cervino uppercase">
              <li className="cursor-pointer hover:opacity-70">
                <a href="#about-us">About us</a>
              </li>
              <li className="cursor-pointer hover:opacity-70">
                <a href="#">Services</a>
              </li>
              <li className="cursor-pointer hover:opacity-70">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
            <div className="mt-3 h-px w-full bg-[#d2d2d2]" />
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <a href="#contact" className="text-[14px] font-cervino font-semibold tracking-[0.25em]
            uppercase border-b border-black pb-0.5 hover:opacity-75">
            Schedule a Meeting
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 px-4 py-6
          font-cervino font-semibold uppercase text-[14px]">

          <a href="#" className="hover:opacity-70">Home</a>
          <a href="#" className="hover:opacity-70">About Us</a>
          <a href="#" className="hover:opacity-70">Contact Us</a>

          <button className="w-fit border-b border-black
            tracking-[0.25em] pb-1">
            Book a Meeting
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
