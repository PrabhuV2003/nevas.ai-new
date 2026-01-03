import React from 'react'
import { assets } from '../assets/assest'
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden
      pt-16 sm:pt-20 lg:pt-24
      pb-6
      px-4 sm:px-6 lg:px-14">

      {/* BG Blobs */}
      <div className="absolute left-0 bottom-0 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-70 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-70 pointer-events-none" />
      <div className="absolute right-0 top-0 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[160px] sm:blur-[200px] opacity-70 pointer-events-none" />

      <div className="relative z-10 border-y border-[#B4B4B4] pt-10">

        {/* Top content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <img src={assets.logo} alt="Nevas logo" className="w-[180px]" />
            <p className="font-cervino text-sm sm:text-base leading-6 sm:leading-7 text-[#666666]">
              Visual Elements: Incorporate futuristic and dynamic elements, such as circuit lines,
              interconnected nodes, and sleek, modern typography. Consider using a gradient color
              scheme that transitions from vibrant blues to deep purples.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <p className="font-cervino font-semibold text-lg uppercase mb-4 tracking-wider">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {["Home", "About Us", "Services", "FAQ", "Contact Us"].map(link => (
                <a
                  key={link}
                  href="#"
                  className="font-cervino text-sm sm:text-base text-[#666666] tracking-widest"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:items-center">
            <p className="font-cervino font-semibold text-lg uppercase mb-4 tracking-wider">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm sm:text-base text-[#4D5053]">
              <span>11201 contact@interno.com</span>
              <span>(123) 456 - 7890</span>
            </div>

            <div className="flex gap-5 text-2xl mt-6">
              <FaSquareFacebook />
              <FaLinkedin />
              <FaSquareInstagram />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0
          justify-between items-center
          border-t border-[#B4B4B4]  py-2 sm:pt-5">

          <p className="font-cervino text-sm sm:text-base font-semibold text-center">
            © 2023 Nevas.ai - All Rights Reserved
          </p>

          <div className="flex items-center gap-3 font-cervino text-sm sm:text-base font-semibold">
            <a href="#">Privacy Policy</a>
            <span className="hidden sm:block w-[1px] h-5 bg-black" />
            <a href="#">Terms of Services</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
