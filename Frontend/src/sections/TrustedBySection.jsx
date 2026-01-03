import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assest'

const brands = [
  assets.C1,
  assets.C2,
  assets.C3,
  assets.C4,
  assets.C5,
  assets.C6,
]

const TrustedBySection = () => {

  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descRef.current) observer.observe(descRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descRef.current) observer.unobserve(descRef.current);
    };
  }, []);

  const anim = `transition-all duration-700 ease-out transform`;

  return (
    <div className='relative px-5 z-50 flex flex-col justify-center items-center w-full h-[250px] bg-white overflow-hidden shadow-2sm'>

      {/* Title Animation */}
      <h2
        ref={titleRef}
        className={`
          font-cervino font-semibold text-xl sm:text-3xl text-center uppercase text-[#222]
          ${anim}
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        style={{ transitionDelay: "150ms" }}
      >
        Trusted by Businesses That Refuse to Stay
      </h2>

      {/* Description Animation */}
      <p
        ref={descRef}
        className={`
          font-cervino text-sm leading-5 sm:text-base sm:leading-7 text-center text-[#666]
          ${anim}
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        style={{ transitionDelay: "300ms" }}
      >
        Organizations across sectors rely on our AI-driven automations to boost productivity, reduce costs, 
        and accelerate digital transformation.
      </p>

      {/* Marquee Logos */}
      <div className='relative w-full overflow-hidden mt-10'>
        <div className="w-[150px] h-full absolute left-0 bg-gradient-to-r from-white to-transparent pointer-events-none z-50"></div>
        <div className="w-[150px] h-full absolute right-0 bg-gradient-to-r from-transparent to-white pointer-events-none z-50"></div>

        <div className='flex animate-marquee whitespace-nowrap'>
          {brands.map((logo, i) => (
            <img key={i} src={logo} alt="brand logo" className='mx-5 sm:mx-12 h-6 opacity-70 hover:opacity-100 transition' />
          ))}
          {brands.map((logo, i) => (
            <img key={`dup-${i}`} src={logo} alt="brand logo" className='mx-5 sm:mx-12 h-6 opacity-70 hover:opacity-100 transition' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection;
