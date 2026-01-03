import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { assets } from '../assets/assest';

/* ---------- reusable in-view hook ---------- */
const useInView = (threshold = 0.2) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
};

/* ---------- service row ---------- */
const ServiceRow = ({ title, desc, delay = 0 }) => {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`
        relative z-50 w-full h-[85px] sm:h-[110px] hover:h-fit border-t border-[#666666]
        flex flex-col
        py-6 sm:py-8
        transition-all duration-700 ease-out group
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* ROW CONTENT */}
            <div className="flex items-center justify-between">
                {/* title */}
                <p className="
          font-cervino uppercase text-[#B4B4B4]
          text-lg sm:text-2xl lg:text-3xl
          transition-all duration-500
          group-hover:text-[#222222]
          group-hover:font-bold
          lg:group-hover:text-4xl
        ">
                    {title}
                </p>

                {/* arrow */}
                <div className="
          text-xl sm:text-2xl lg:text-3xl
          text-[#B4B4B4] p-2 mr-2 sm:mr-6
          transition-all duration-500
          group-hover:bg-black group-hover:text-white
          group-hover:rounded-xl
        ">
                    <GoArrowUpRight className="group-hover:rotate-45 transition-all duration-500" />
                </div>
            </div>

            {/* HOVER DESCRIPTION */}
            <p
                className="
          max-w-2xl mt-2
          font-cervino text-sm sm:text-base
          text-[#666666]
          leading-6
          opacity-0 translate-y-2
          transition-all duration-500
          group-hover:opacity-100 group-hover:translate-y-0
        "
            >
                {desc}
            </p>

            {/* hover image (desktop only) */}
            <img
                src={assets.serviceimg1}
                alt=""
                className="
          hidden lg:block
          absolute top-1/2 right-[180px]
          -translate-y-1/2
          h-44 w-[300px]
          object-contain
          opacity-0 group-hover:opacity-100
          transition-all duration-700
        "
            />
        </div>
    );
};

const OurExpertSection = () => {
    const { ref: headerRef, isInView: headerInView } = useInView();

    return (
        <section className="
      relative w-full overflow-hidden
      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-14
    ">

            {/* BG Blobs */}
            <div className="absolute left-0 -bottom-32  w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute right-0 -bottom-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[160px] sm:blur-[200px] opacity-60" />

            <div className="absolute left-0 -top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute right-0 -top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[160px] sm:blur-[200px] opacity-60" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* header */}
                <div
                    ref={headerRef}
                    className={`
            max-w-4xl space-y-4
            transition-all duration-700
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
                >
                    <h2 className="
            font-cervino uppercase
            text-[26px] leading-[36px]
            sm:text-[40px] sm:leading-[55px]
            lg:text-[45px] lg:leading-[75px]
          ">
                        Our Expert AI Automation
                        <br /> Services
                    </h2>

                    <p className="
            font-cervino text-sm sm:text-base
            leading-6 sm:leading-7
            text-[#666666]
            max-w-2xl
          ">
                        Discover the pinnacle of efficiency and innovation through our Expert AI Automation
                        Services. Our seasoned professionals craft tailored solutions using cutting-edge AI.
                    </p>
                </div>

                {/* services */}
                <div className="mt-10 relative z-50 flex flex-col">
                    <ServiceRow
                        title="Smart Customer Service Automation"
                        desc="We help businesses provide more personalized customer support through AI-first automation. Our smart virtual assistants understand human language and integrate easily with your CRM and live chat platforms."
                        delay={150}
                    />
                    <ServiceRow
                        title="Predictive Maintenance Systems"
                        desc="Our predictive AI solutions use sensor-based anomaly detection and machine learning development to identify early signs of equipment issues and schedule maintenance based on actual risk."
                        delay={250}
                    />
                    <ServiceRow
                        title="AI-Powered Personalization Engines"
                        desc="Our AI app development company in India and USA build personalization engines that can offer tailored experiences to every user. With predictive segmentation, you can run hyper-targeted marketing campaigns that convert better."
                        delay={350}
                    />
                    <ServiceRow
                        title="Fraud Detection & Risk Intelligence"
                        desc="Protect revenue with AI-powered fraud detection systems that spot threats in real time. Our AI models use pattern recognition and behavior-based scoring to flag suspicious activity across finance, crypto, and eCommerce platforms."
                        delay={450}
                    />
                    <ServiceRow
                        title="Document Intelligence & OCR Solutions"
                        desc="As a best AI development company in India and USA, we automate document-heavy workflows with AI-powered tools that extract, classify, and summarize information at scale."
                        delay={450}
                    />
                    <ServiceRow
                        title="AI for Smart Logistics & Supply Chain"
                        desc="Optimize logistics and reduce operational costs with our AI-driven planning and automation. Our enterprise AI development company brings intelligence to every step of your logistics workflow."
                        delay={450}
                    />
                    <ServiceRow
                        title="AI in Healthcare & Diagnostics"
                        desc="Enhance care delivery with AI solutions that improve diagnosis speed and clinical decision-making. We specialize in predictive risk scoring, treatment recommendations, image-based diagnostics, and smart patient triage."
                        delay={450}
                    />
                    <ServiceRow
                        title="AI for IoT & Edge Devices"
                        desc="As a leading AI IoT software development company, we make devices, sensors, and physical systems smarter and more responsive. Our AI-powered IoT solutions run in real time at the edge."
                        delay={450}
                    />
                    <div className="border-b border-[#666666]">
                        <ServiceRow
                            title="AI for Blockchain & Crypto"
                            desc="We make decentralized platforms and token ecosystems smart with AI-driven solutions for crypto and Web3. Our AI-powered blockchain development company builds tools that can integrate easily with exchanges, wallets, and DAOs."
                            delay={450}
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default OurExpertSection;
