import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assest'
import { FaLongArrowAltRight } from "react-icons/fa";

/* ================== ADD: useInView hook ================== */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
/* ======================================================== */

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [sliderPosition, setSliderPosition] = useState(50);

  const heroText = useInView();
  const imagesView = useInView(0.1); // ✅ added

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='w-full min-h-screen relative'>

      {/* ================= BACKGROUNDS ================= */}
      <div className='absolute left-0 bottom-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[100px] sm:blur-[200px]' />
      <div className='absolute left-1/2 -translate-x-1/2 bottom-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[100px] sm:blur-[200px]' />
      <div className='absolute right-0 bottom-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[100px] sm:blur-[200px]' />
      {/* =============================================== */}

      <Navbar />

      {/* ================= HERO TEXT ================= */}
      <div
        ref={heroText.ref}
        className={`w-full h-full relative z-50 p-5 sm:p-10 transition-all duration-700 ease-out
        ${heroText.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className='w-full z-10 min-h-[60vh] md:min-h-[50vh] relative flex flex-col justify-center items-center gap-5'>
          <h1 className='font-cervino text-3xl sm:text-5xl md:text-6xl font-extrabold leading-11 sm:leading-16 text-[#1C2546] text-center'>
            Powering The Future Of{" "}
            <span className='bg-gradient-to-r from-[#4080F5] to-[#572AC2] bg-clip-text text-transparent'>
              Fashion With AI
            </span>{" "}
            &{" "}
            <span className='bg-gradient-to-r from-[#4080F5] to-[#572AC2] bg-clip-text text-transparent'>
              Intelligent Automation.
            </span>
          </h1>

          <p className='font-cervino text-center text-sm sm:text-base w-full md:w-9/12'>
            We help fashion brands, retailers, and D2C companies increase conversions,
            reduce operational costs, and scale faster using AI-driven personalization,
            virtual try-ons, demand forecasting, and workflow automation.
          </p>

          <button className='flex justify-center items-center gap-2.5 bg-gradient-to-r from-[#4080F5] to-[#572AC2] text-base sm:text-lg text-white p-2 px-4 rounded-lg'>
            Talk to Our AI Fashion Experts <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      {/* =============================================== */}

      {/* ================= Images ================= */}
      <div
        ref={imagesView.ref}
        className={`w-full min-h-[70vh] flex justify-center relative z-50 transition-all duration-1000 ease-out
        ${imagesView.inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"}`}
      >
        <div className=' w-[80%] h-[80%] md:w-[400px] md:-[400px] xl:w-[300px] xl:h-[300px] rounded-2xl absolute top-10 left-1/2 -translate-x-1/2'>

          <div className=' hidden md:block absolute w-[220px] h-[50px] right-11/12 bottom-10 flex justify-center items-center z-10'>
            <div className='w-full flex justify-center items-center gap-2.5'>
              <div className='w-[195px] bg-gradient-to-r from-[#407ff5bb] to-[#582ac2c5] text-white py-1 px-2 rounded-2xl text-center font-cervino'>
                AI Virtual Try-On Engine
              </div>
              <div className='w-[10px] h-[10px] rounded-full bg-white animate-ping'></div>
            </div>
          </div>

          <img
            src={assets.f1}
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
            className='w-full h-full object-cover object-top rounded-2xl'
          />

          <img
            src={assets.f2}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            className='w-full h-full object-cover object-top absolute top-0 left-0 rounded-2xl'
          />

          <input
            type="range"
            className='absolute top-1/2 left-1/2 transform -translate-1/2 w-full z-10 slider'
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
          />
        </div>

        <div className='w-[200px] h-[200px] hidden md:block absolute top-0 md:left-[5%] xl:left-[23%] xl:-translate-x-[23%]'>
          <img src="https://img.freepik.com/free-photo/3d-dress-fire-with-flames_23-2151073807.jpg?w=1480" className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute w-[220px] h-[50px] md:left-11/12 xl:right-11/12 md:bottom-0 xl:top-10 flex justify-center items-center'> <div className='flex justify-center items-center gap-2.5 max-xl:flex-row-reverse '> <div className='w-[200px] bg-gradient-to-r from-[#407ff5bb] to-[#582ac2c5] text-white py-1 px-2 rounded-2xl text-center font-cervino'> Higher Conversion Rates </div> <div className='w-[10px] h-[10px] rounded-full bg-white animate-ping'></div> </div> </div>
        </div>

        <div className='w-[150px] h-[150px] hidden md:block absolute top-5 md:right-[5%] xl:right-[22%] xl:-translate-x-[22%] z-10'>
          <img src="https://img.freepik.com/free-photo/portrait-fashionable-robot_23-2151845047.jpg?w=1480" className='w-full h-full object-cover object-top rounded-2xl' />

          <div className='absolute w-[200px] h-[50px] md:right-11/12 xl:left-11/12 top-0 flex justify-center items-center '> <div className='flex justify-center items-center gap-2.5 max-xl:flex-row-reverse'> <div className='w-[10px] h-[10px] rounded-full bg-white animate-ping'></div> <div className='w-[185px] bg-gradient-to-r from-[#407ff5bb] to-[#582ac2c5] text-white py-1 px-2 rounded-2xl text-center font-cervino'> Privacy-First AI </div> </div> </div>
        </div>

        <div className='w-[150px] h-[150px] hidden md:block absolute bottom-10 right-1/6'>
          <img src="https://img.freepik.com/premium-photo/digital-fashion-model-blue-dress-is-displayed-clothing-store_14117-1064631.jpg?w=1480" className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute w-[200px] h-[50px] right-11/12 xl:left-11/12 top-10 flex justify-center items-center'> <div className='flex justify-center items-center gap-2.5 max-xl:flex-row-reverse'> <div className='w-[10px] h-[10px] rounded-full bg-white animate-ping'></div> <div className='w-[185px] bg-gradient-to-r from-[#407ff5bb] to-[#582ac2c5] text-white py-1 px-2 rounded-2xl text-center font-cervino'> Automation Experts </div> </div> </div>
        </div>

        <div className='w-[100px] h-[100px] hidden xl:block absolute top-16 right-[150px]'>
          <img src="https://img.freepik.com/premium-photo/photostock-image-stylish-cocktail-dress-displayed-augmented-reality-with-fabric_1314184-9295.jpg?w=1480" className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='w-[100px] h-[100px] hidden xl:block absolute bottom-16 left-[150px]'>
          <img src="https://img.freepik.com/premium-photo/smart-clothing-with-biometric-tracking-fabric-with-futuristic-patterns-mannequin-illuminated-by-store-lights_1342292-10639.jpg" className='w-full h-full object-cover object-right rounded-2xl' />
        </div>

      </div>
      {/* =============================================== */}

    </div>
  );
};

export default HeroSection;
