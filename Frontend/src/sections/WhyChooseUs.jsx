import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CONTENT = {
  features: {
    title: "Transform your online presence with AI-powered features.",
    desc:
      "Our AI-driven platform delivers enterprise-grade performance, automation, and scalability designed for modern digital businesses.",
    items: [
      "Enterprise ready",
      "AI powered automation",
      "High performance",
      "Secure infrastructure",
      "Scalable architecture",
      "Modern UI experience",
    ],
  },
  values: {
    title: "Built on values that drive long-term success.",
    desc:
      "We believe in transparency, innovation, and customer-first solutions that create real impact and lasting partnerships.",
    items: [
      "Customer-first mindset",
      "Transparency & trust",
      "Innovation driven",
      "Long-term partnerships",
      "Reliable support",
      "Continuous improvement",
    ],
  },
}

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("features")

  const { title, desc, items } = CONTENT[activeTab]

  const titleRef = useRef(null)

  const sparkRef = useRef(null)

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span")

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        color: "#cfcfcf",
        y: 20,
      },
      {
        opacity: 1,
        color: "#000000",
        y: 0,
        stagger: {
          each: 0.04,
          from: "start",
          filter: "blur(0px)",
        },
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  useEffect(() => {
    gsap.fromTo(
      sparkRef.current,
      {
        y: 0,
        rotate: 0,
      },
      {
        y: 350,              // moves DOWN inside container
        rotate: 180,         // rotation while falling
        ease: "none",        // IMPORTANT for scroll sync
        scrollTrigger: {
          trigger: sparkRef.current,
          start: "top top",  // 🔥 when spark hits top of viewport
          end: "+=300",      // scroll distance
          scrub: 1,          // 🔥 ties animation to scroll
        },
      }
    )
  }, [])


  return (
    <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-14 bg-[#F2F2F2]">
      <h1
        ref={titleRef}
        className="font-cervino font-bold text-center 
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black"
      >
        {"Why Should You Choose?".split("").map((char, index) => (
          <span key={index} className="inline-block opacity-0 text-gray-300">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>



      <div className="w-full flex flex-col lg:flex-row mt-12 md:mt-20 gap-10">
        {/* Image */}
        <div className="w-full lg:w-[35%] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
          <img
            src={assets.why_choose_us}
            alt=""
            className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
          />
        </div>


        {/* Spark */}
        <div className="w-full lg:w-[15%] h-[200px] sm:h-[300px] lg:h-[500px] 
               hidden lg:flex justify-center items-start">
          <img
            ref={sparkRef}
            src={assets.sparkler}
            alt=""
            className="w-[90px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
          />
        </div>



        {/* Content */}
        <div className="w-full lg:w-[50%]">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {["features", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-cervino font-bold 
        text-sm sm:text-base md:text-lg 
        px-5 py-2 rounded-md transition-all duration-300
        ${activeTab === tab
                    ? "bg-gradient-to-r from-[#4080F5] to-[#572AC2] text-white"
                    : "bg-white text-black"
                  }`}
              >
                {tab === "features" ? "Features" : "Our Value"}
              </button>
            ))}
          </div>


          {/* 🔥 Animated Content Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <h1 className="my-4 sm:my-5 text-2xl sm:text-3xl md:text-4xl 
               font-cervino font-bold leading-snug">
                {title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 
              font-cervino text-[#716F73] mb-6">
                {desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="h-[60px] sm:h-[70px] border-b border-gray-400 
                 flex items-center gap-4 sm:gap-5"
                  >
                    <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-[#4080F5]" />
                    <p className="font-cervino font-semibold text-base sm:text-lg md:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
